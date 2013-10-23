/*
 * project	MinimalDegrees
 * 
 * package	com.nathanbuth.minimaldegrees
 * 
 * author	Nathan Buth
 * 
 * date		Jun 7, 2013
 */
package com.nathanbuth.minimaldegrees;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.os.Messenger;
import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.database.Cursor;
import android.util.Log;
import android.view.Menu;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.ListView;
import android.widget.SimpleAdapter;
import android.widget.TextView;
import android.widget.Toast;
import lib.ContentThings;
import lib.StorageThings;
import lib.WebThings;
import lib.FileThings;

public class MainActivity extends Activity {
	/*
	 * createMainView - process form elements and display on the view, check network.
	 * getWeatherInfo - link to API and send a request
	 * requestWeather - receive results from the API and process it into usable data, display data, save data
	 */
	
	//Variables
	Context _context;
	Boolean _connectionStatus = false;
	ListView _fList;
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.mainpage);

		_context = this;
		_connectionStatus = WebThings.getConnectionStatus(_context);
		_fList = (ListView) this.findViewById(R.id.weatherList);
		View listHeader = this.getLayoutInflater().inflate(R.layout.list_header, null);
		_fList.addHeaderView(listHeader);
		
		checkConnection();
		
		Button submitSearchButton = (Button) findViewById(R.id.submitSearchButton);
		
		submitSearchButton.setOnClickListener(new View.OnClickListener() {
			
			@Override
			public void onClick(View v) {
				_connectionStatus = WebThings.getConnectionStatus(_context);
				
				checkConnection();
				
				EditText searchInput = (EditText) findViewById(R.id.searchInput);
				
				// Check to make sure entered value is valid zip
                if (searchInput.getText().toString().length() != 5) {
                    Toast toast = Toast.makeText(_context,"Invalid Zip Code", Toast.LENGTH_SHORT);
                    toast.show();
                } else {
                	Handler serviceHandler = new Handler(){
                		public void handleMessage(Message message) {
                			if(message.arg1 == RESULT_OK && message.obj != null) {
                				String workingURL = message.obj.toString();
                				Log.i("workingURL: ", workingURL);
                				
                				try {
                					JSONObject json = new JSONObject(workingURL);
                					JSONObject data = json.getJSONObject("data");
                					
                					//String request = json.getJSONObject("data").getJSONArray("request").getJSONObject(0).getString("query");
                					
                					Cursor cursor = getContentResolver().query(ContentThings.WeatherData.CONTENT_URI, null, null, null, null);
                					
                				//	displayCurrentData();
                					displayForecastData(cursor);
                				} catch (JSONException e){
                					Log.e("JSON Error in OnClick:", e.toString());
                				}
                			}
                		}
                	};
                	
                	Messenger serviceMessenger = new Messenger(serviceHandler);
                	
                	Intent intent = new Intent(_context, WeatherService.class);
                	intent.putExtra("messenger", serviceMessenger);
                	intent.putExtra("zipcode", searchInput.getText().toString());
                	
                	startService(intent);                	
                }
			}
		});
	}
	
	public void checkConnection(){
		if (_connectionStatus){
			Log.i("Network connection: ", WebThings.getConnectionType(_context));
		} else {
			
			AlertDialog.Builder alert = new AlertDialog.Builder(_context);
			alert.setTitle("No Network Connection Detected");
			alert.setMessage("Please check your network connection and try again.  If recent weather data is available, it will be displayed");
			alert.setCancelable(false);
			alert.setPositiveButton("Close", new DialogInterface.OnClickListener() {
				@Override
				public void onClick(DialogInterface dialogInterface, int i) {
					dialogInterface.cancel();
				}
			});
			alert.show();
			
			String file = FileThings.readStringFile(_context, "weatherData", false);
			if (!file.isEmpty()){
				Cursor cursor = getContentResolver().query(ContentThings.WeatherData.CONTENT_URI, null, null, null, null);
				displayForecastData(cursor);
			} else {
				findViewById(R.id.noData).setVisibility(View.VISIBLE);
			}
		}
	}
	
	public void displayForecastData(Cursor cursor){
		String read = FileThings.readStringFile(_context, "weatherData", false);
				
			JSONObject json;
			JSONObject data;
			JSONArray cc;
			JSONArray w;
				
			try{
				json = new JSONObject(read);
				data = json.getJSONObject("data");
				cc = data.getJSONArray("current_condition");
				w = data.getJSONArray("weather");
					
				JSONObject ccObject = cc.getJSONObject(0);
				String description = ccObject.getJSONArray("weatherDesc").getJSONObject(0).getString("value");
				String tempC = ccObject.getString("temp_C");
				String tempF = ccObject.getString("temp_F");
					
				JSONObject wObject = w.getJSONObject(0);
				String tempCMin = wObject.getString("tempMinC");
				String tempCMax = wObject.getString("tempMaxC");
				String tempFMin = wObject.getString("tempMinF");
				String tempFMax = wObject.getString("tempMaxF");
					
				((TextView)findViewById(R.id._description)).setText(description);
				((TextView)findViewById(R.id._celsius)).setText(tempC + "°C");
				((TextView)findViewById(R.id._fahrenheit)).setText(tempF + "°F");
				((TextView)findViewById(R.id._minCelsius)).setText(tempCMin + "°C -");
				((TextView)findViewById(R.id._maxCelsius)).setText(tempCMax + "°C");
				((TextView)findViewById(R.id._minFahrenheit)).setText(tempFMin + "°F -");
				((TextView)findViewById(R.id._maxFahrenheit)).setText(tempFMax + "°F");
					
				TextView descTxt = (TextView)findViewById(R.id._description);
				String descriptionText = descTxt.getText().toString();
					
				Integer weatherIcon;
					
				if (descriptionText.equals("Sunny") || descriptionText.equals("Clear")) {
		            weatherIcon = R.drawable.sunny;
		        } else if (descriptionText.equals("Partly Cloudy")) {
		        	weatherIcon = R.drawable.partlycloudy;
		        } else if (descriptionText.equals("Overcast") || descriptionText.equals("Cloudy")) {
		        	weatherIcon = R.drawable.cloudy;
		        } else {
		        	weatherIcon = R.drawable.noimage;
		        }
					
				((ImageView)findViewById(R.id.weatherImage)).setImageResource(weatherIcon);
					
				findViewById(R.id.noData).setVisibility(View.GONE);
				findViewById(R.id.temp).setVisibility(View.VISIBLE);
				findViewById(R.id.minMax).setVisibility(View.VISIBLE);
			} catch (JSONException e){
				e.printStackTrace();
			}
		
		ArrayList<HashMap<String, String>> dataList = new ArrayList<HashMap<String, String>>();
		
		cursor.moveToFirst();
		
		if (cursor.moveToFirst()) {
			for (int i = 0; i < cursor.getCount(); i++) {
				HashMap<String, String> display = new HashMap<String, String>();
				
				display.put("description", cursor.getString(1));
				display.put("celsius", cursor.getString(2));
				display.put("fahrenheit", cursor.getString(3));
				
				cursor.moveToNext();
				
				dataList.add(display);
				Log.i("Data: ", dataList.toString());
			}
		}
		SimpleAdapter adapter = new SimpleAdapter(_context, dataList, R.layout.list_row, new String[] {"description", "celsius", "fahrenheit"}, new int[] {R.id.listD, R.id.listC, R.id.listF});
		
		_fList.setAdapter(adapter);
		}
	
	/*public void displayCurrentData() {
		String read = FileThings.readStringFile(_context, "weatherData", false);
		
		JSONObject json;
		JSONObject data;
		JSONArray cc;
		JSONArray w;
		
		try{
			json = new JSONObject(read);
			data = json.getJSONObject("data");
			cc = data.getJSONArray("current_condition");
			w = data.getJSONArray("weather");
			
			JSONObject ccObject = cc.getJSONObject(0);
			String description = ccObject.getJSONArray("weatherDesc").getJSONObject(0).getString("value");
			String tempC = ccObject.getString("temp_C");
			String tempF = ccObject.getString("temp_F");
			
			JSONObject wObject = w.getJSONObject(0);
			String tempCMin = wObject.getString("tempMinC");
			String tempCMax = wObject.getString("tempMaxC");
			String tempFMin = wObject.getString("tempMinF");
			String tempFMax = wObject.getString("tempMaxF");
			
			((TextView)findViewById(R.id._description)).setText(description);
			((TextView)findViewById(R.id._celsius)).setText(tempC + "°C");
			((TextView)findViewById(R.id._fahrenheit)).setText(tempF + "°F");
			((TextView)findViewById(R.id._minCelsius)).setText(tempCMin + "°C -");
			((TextView)findViewById(R.id._maxCelsius)).setText(tempCMax + "°C");
			((TextView)findViewById(R.id._minFahrenheit)).setText(tempFMin + "°F -");
			((TextView)findViewById(R.id._maxFahrenheit)).setText(tempFMax + "°F");
			
			TextView descTxt = (TextView)findViewById(R.id._description);
			String descriptionText = descTxt.getText().toString();
			
			Integer weatherIcon;
			
			if (descriptionText.equals("Sunny") || descriptionText.equals("Clear")) {
	            weatherIcon = R.drawable.sunny;
	        } else if (descriptionText.equals("Partly Cloudy")) {
	        	weatherIcon = R.drawable.partlycloudy;
	        } else if (descriptionText.equals("Overcast") || descriptionText.equals("Cloudy")) {
	        	weatherIcon = R.drawable.cloudy;
	        } else {
	        	weatherIcon = R.drawable.noimage;
	        }
			
			((ImageView)findViewById(R.id.weatherImage)).setImageResource(weatherIcon);
			
			findViewById(R.id.noData).setVisibility(View.GONE);
			findViewById(R.id.temp).setVisibility(View.VISIBLE);
			findViewById(R.id.minMax).setVisibility(View.VISIBLE);
		} catch (JSONException e){
			e.printStackTrace();
		}
		
	}*/
		
	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}
	
}
