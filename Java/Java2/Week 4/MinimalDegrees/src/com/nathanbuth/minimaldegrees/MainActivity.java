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
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.ListView;
import android.widget.SimpleAdapter;
import android.widget.TextView;
import android.widget.Toast;
import lib.ContentThings;
import lib.WebThings;
import lib.FileThings;
import com.nathanbuth.minimaldegrees.FormFragment;

public class MainActivity extends Activity implements FormFragment.formListener{
	/*
	 * createMainView - process form elements and display on the view, check network.
	 * getWeatherInfo - link to API and send a request
	 * requestWeather - receive results from the API and process it into usable data, display data, save data
	 */
	
	//Variables
	Context _context;
	Boolean _connectionStatus = false;
	ListView _fList;
	static final int DAY_SELECTED = 1;
	
	//List out ui elements so they can be bundled
	ImageView conditionImage;
    TextView descriptionLabel;
    TextView currentCelsiusLabel;
    TextView currentFahrenheitLabel;
    TextView minCelsiusLabel;
    TextView maxCelsiusLabel;
    TextView minFahrenheitLabel;
    TextView maxFahrenheitLabel;
    //TextView minMaxLabel; 
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.formfragment);

		_context = this;
		_connectionStatus = WebThings.getConnectionStatus(_context);
		_fList = (ListView) this.findViewById(R.id.weatherList);
		View listHeader = this.getLayoutInflater().inflate(R.layout.list_header, null);
		_fList.addHeaderView(listHeader);
		
		checkConnection();
				
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
					
				ImageView conditionImage = (ImageView)findViewById(R.id.weatherImage);
			    TextView descriptionLabel = (TextView)findViewById(R.id._description);
			    TextView currentCelsiusLabel = (TextView)findViewById(R.id._celsius);
			    TextView currentFahrenheitLabel = (TextView)findViewById(R.id._fahrenheit);
			    TextView minCelsiusLabel = (TextView)findViewById(R.id._minCelsius);
			    TextView maxCelsiusLabel = (TextView)findViewById(R.id._maxCelsius);
			    TextView minFahrenheitLabel = (TextView)findViewById(R.id._minFahrenheit);
			    TextView maxFahrenheitLabel = (TextView)findViewById(R.id._maxFahrenheit);
			    //TextView minMaxLabel;
				
			    descriptionLabel.setText(description);
			    currentCelsiusLabel.setText(tempC + "¡C");
			    currentFahrenheitLabel.setText(tempF + "¡F");
			    minCelsiusLabel.setText(tempCMin + "¡C -");
			    maxCelsiusLabel.setText(tempCMax + "¡C");
			    minFahrenheitLabel.setText(tempFMin + "¡F -");
			    maxFahrenheitLabel.setText(tempFMax + "¡F");
					
				String descriptionText = descriptionLabel.getText().toString();
					
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
					
				conditionImage.setImageResource(weatherIcon);
					
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
				display.put("date", cursor.getString(4));
				display.put("celsiusLow", cursor.getString(5));
				display.put("fahrenheitLow", cursor.getString(6));
				
				cursor.moveToNext();
				
				dataList.add(display);
				Log.i("Data: ", dataList.toString());
			}
		}
		SimpleAdapter adapter = new SimpleAdapter(_context, dataList, R.layout.list_row, new String[] {"description", "celsius", "fahrenheit", "date", "celsiusLow", "fahrenheitLow"}, new int[] {R.id.listD, R.id.listC, R.id.listF});
		
		_fList.setAdapter(adapter);
		
		//daySelected();
	}
	
	@Override
	public void getWeather(){
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
        					                					
        					Cursor cursor = getContentResolver().query(ContentThings.WeatherData.CONTENT_URI, null, null, null, null);
        					
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
	
	@Override
	public void daySelected(Integer i) {
		
		HashMap<String, String> display = (HashMap<String, String>) _fList.getItemAtPosition(i);
			
		Intent detailIntent = new Intent(_context, SecondActivity.class);
			
		detailIntent.putExtra("date", display.get("date"));
        detailIntent.putExtra("description", display.get("description"));
        detailIntent.putExtra("maxCelsius", display.get("celsius"));
        detailIntent.putExtra("minCelsius", display.get("celsiusLow"));
        detailIntent.putExtra("maxFahrenheit", display.get("fahrenheit"));
        detailIntent.putExtra("minFahrenheit", display.get("fahrenheitLow"));
                
        Log.i("Display: ", display.toString());
                
        startActivityForResult(detailIntent, DAY_SELECTED);
		
	}
		
	@Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == DAY_SELECTED) {
            if (resultCode == RESULT_OK) {
                Bundle result = data.getExtras();
                if (result != null) {
                    String date = result.getString("date");
                    Log.i("Result: ", result.toString());
                    
                    Toast toast = Toast.makeText(_context, "Welcome back!" , Toast.LENGTH_SHORT);
                    toast.show();
                }
            }
        }
    }
	
	
	//Code that I was trying to use to keep all of the data in place upon orientation change
	/*@Override
	public void onSaveInstanceState(Bundle savedInstanceState) {
	  super.onSaveInstanceState(savedInstanceState);
	  // Save state to the savedInstanceState
	  savedInstanceState.putString("Description", descriptionLabel.getText());
	  savedInstanceState.putString("Celsius", currentCelsiusLabel.getText());
	  savedInstanceState.putString("Fahrenheit", currentFahrenheitLabel.getText());
	  savedInstanceState.putString("MinCelsius", minCelsiusLabel.getText());
	  savedInstanceState.putString("MaxCelsius", maxCelsiusLabel.getText());
	  savedInstanceState.putString("MinFahrenheit", minFahrenheitLabel.getText());
	  savedInstanceState.putString("MaxFahrenheit", maxFahrenheitLabel.getText());
	}

	@Override
	public void onRestoreInstanceState(Bundle savedInstanceState) {
	  super.onRestoreInstanceState(savedInstanceState);
	  // Restore state from savedInstanceState
	  String description = savedInstanceState.getString("Description");
	  String celsius = savedInstanceState.getString("Celsius");
	  String fahrenheit = savedInstanceState.getString("Fahrenheit");
	  String minC = savedInstanceState.getString("MinCelsius");
	  String maxC = savedInstanceState.getString("MaxCelsius");
	  String minF = savedInstanceState.getString("MinFahrenheit");
	  String maxF = savedInstanceState.getString("MaxFahrenheit");
	  descriptionLabel.setText(description);
	  currentCelsiusLabel.setText(celsius);
	  currentFahrenheitLabel.setText(fahrenheit);
	  minCelsiusLabel.setText(minC);
	  maxCelsiusLabel.setText(maxC);
	  minFahrenheitLabel.setText(minF);
	  maxFahrenheitLabel.setText(maxF);
	}*/
	
	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}	
	
}
