/*
 * project	MinimalDegrees
 * 
 * package	com.nathanbuth.minimaldegrees
 * 
 * author	Nathan Buth
 * 
 * date		May 23, 2013
 */
package com.nathanbuth.minimaldegrees;

import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;
import java.util.HashMap;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import android.os.AsyncTask;
import android.os.Bundle;
import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.util.Log;
import android.view.Menu;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;
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
	HashMap<String, String> _history;
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.mainpage);

		/*
		 * Create the visuals
		 * Set the text for elements like the button and Edit Text
		 * Create OnClickListener for button
		 * -When clicked weather info is grabbed from the service and displayed on the screen
		 * Check connection status and disable/enable the button
		 * Append elements to the view
		 */
		
		_context = this;
		_connectionStatus = WebThings.getConnectionStatus(_context);
		_history = new HashMap<String, String>();
		
		Button submitSearchButton = (Button) findViewById(R.id.submitSearchButton);
		
		submitSearchButton.setOnClickListener(new View.OnClickListener() {
			
			@Override
			public void onClick(View v) {
				_connectionStatus = WebThings.getConnectionStatus(_context);
				
				if (_connectionStatus){
					Log.i("Network connection: ", WebThings.getConnectionType(_context));
				} else {
					
					AlertDialog.Builder alert = new AlertDialog.Builder(_context);
					alert.setTitle("No Network Connection Detected");
					alert.setMessage("Please check your network connection and try again.");
					alert.setCancelable(false);
					alert.setPositiveButton("Close", new DialogInterface.OnClickListener() {
						@Override
						public void onClick(DialogInterface dialogInterface, int i) {
							dialogInterface.cancel();
						}
					});
					alert.show();
				}
				
				EditText searchInput = (EditText) findViewById(R.id.searchInput);
				
				// Check to make sure entered value is valid zip
                if (searchInput.getText().toString().length() != 5) {
                    Toast toast = Toast.makeText(_context,"Invalid Zip Code", Toast.LENGTH_SHORT);
                    toast.show();
                } else {
                	getWeatherInfo(searchInput.getText().toString());
                }
			}
		});
		
		if (_connectionStatus){
			Log.i("Network connection: ", WebThings.getConnectionType(_context));
		} else {
			
			AlertDialog.Builder alert = new AlertDialog.Builder(_context);
			alert.setTitle("No Network Connection Detected");
			alert.setMessage("Please check your network connection and try again.");
			alert.setCancelable(false);
			alert.setPositiveButton("Close", new DialogInterface.OnClickListener() {
				@Override
				public void onClick(DialogInterface dialogInterface, int i) {
					dialogInterface.cancel();
				}
			});
			alert.show();
		}
		
		/*Button moreInfoButton = (Button) findViewById(R.id.moreInfoButton);
		moreInfoButton.setOnClickListener(new OnClickListener() {
			
			@Override
			public void onClick(View v) {
				
				
			}
		})*/

	}
	
	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}
	
	private void getWeatherInfo(String locationInfo){
		/*
		 *Hook up to the World Weather Online API
		 *Create URL request and send it 
		 */
		String apiURL = "http://api.worldweatheronline.com/free/v1/weather.ashx";
		String apiKey = "4dgwqs59cdws29rws53p6zyq";
		String queryString = "";
		
		try{
			queryString = URLEncoder.encode(locationInfo, "UTF-8");
		} catch (Exception e) {
			Log.e("Error: ", "URL Encoding Problem");
		}
		
		URL usableURL;
		
		try {
			usableURL = new URL(apiURL + "?q=" + queryString + "&format=json&key=" + apiKey);
			
			requestWeather wRequest = new requestWeather();
			wRequest.execute(usableURL);
		} catch(MalformedURLException e) {
			Log.e("Error: ", "MalformedURLException");
			usableURL = null;
		}
	}//getWeatherInfo

	private class requestWeather extends AsyncTask<URL, Void, String> {
		/*
		 * Get the URL response
		 * Process the JSON data response
		 * Append weather data to the appropriate text views
		 * Save data to external and internal storage 
		 */

		@Override
		protected String doInBackground(URL... urls) {
			String response = "";
			for(URL url:urls){
				response = WebThings.getURLStringResponse(url);
			}
			
			return response;
		}
		
		@Override
		protected void onPostExecute(String result){
			Log.i("URL Response: ", result);
			
			try{
				JSONObject json = new JSONObject(result);
			
				JSONArray results = json.getJSONObject("data").getJSONArray("current_condition");
				JSONArray results2 = json.getJSONObject("data").getJSONArray("weather");
				String request = json.getJSONObject("data").getJSONArray("request").getJSONObject(0).getString("query");
				
				Integer _weatherIcon = null;
				String _descriptionData = results.getJSONObject(0).getJSONArray("weatherDesc").getJSONObject(0).getString("value");
				String _celsiusData = results.getJSONObject(0).getString("temp_C");
				String _fahrenheitData = results.getJSONObject(0).getString("temp_F");
				String _celsiusMinData = results2.getJSONObject(0).getString("tempMinC");
				String _celsiusMaxData = results2.getJSONObject(0).getString("tempMaxC");
				String _fahrenheitMinData = results2.getJSONObject(0).getString("tempMinF");
				String _fahrenheitMaxData = results2.getJSONObject(0).getString("tempMaxF");
				
				Log.i("Results: ", results.toString());
				Log.i("Request: ", request.toString());
				Log.i("Weather Info: ", _descriptionData + ", " + _celsiusData + ", " + _fahrenheitData);
								
				if (_descriptionData.equals("Sunny")) {
                    _weatherIcon = R.drawable.sunny;
                } else if (_descriptionData.equals("Partly Cloudy")) {
                	_weatherIcon = R.drawable.partlycloudy;
                } else if (_descriptionData.equals("Overcast") || _descriptionData.equals("Cloudy")) {
                	_weatherIcon = R.drawable.cloudy;
                } else {
                	_weatherIcon = R.drawable.noimage;
                }
				
				((ImageView)findViewById(R.id.weatherImage)).setImageResource(_weatherIcon);
				((TextView)findViewById(R.id._description)).setText(_descriptionData);
				((TextView)findViewById(R.id._celsius)).setText(_celsiusData + "°C");
				((TextView)findViewById(R.id._fahrenheit)).setText(_fahrenheitData + "°F");
				((TextView)findViewById(R.id._minCelsius)).setText(_celsiusMinData + "°C -");
				((TextView)findViewById(R.id._maxCelsius)).setText(_celsiusMaxData + "°C");
				((TextView)findViewById(R.id._minFahrenheit)).setText(_fahrenheitMinData + "°F -");
				((TextView)findViewById(R.id._maxFahrenheit)).setText(_fahrenheitMaxData + "°F");
								
				_history.put(request, results.toString());
				FileThings.storeObjectFile(_context, "history", _history, false);
				FileThings.storeStringFile(_context, "temp", results.toString(), true);
			} catch(JSONException e) {
				Log.e("JSON", e.toString());
				
				AlertDialog.Builder alert = new AlertDialog.Builder(_context);
				alert.setTitle("Unable to find weather location.");
				alert.setMessage("Please make sure that the zip code you entered is valid and try again.");
				alert.setCancelable(false);
				alert.setPositiveButton("Close", new DialogInterface.OnClickListener() {
					@Override
					public void onClick(DialogInterface dialogInterface, int i) {
						dialogInterface.cancel();
					}
				});
				alert.show();
			}
		}
		
	}//requestWeather
	
}
