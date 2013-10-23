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
import android.widget.LinearLayout;
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
	LinearLayout _mainViewLayout;
	FormElements _searchForm;
	Boolean _connectionStatus = false;
	WeatherElements _weatherInfo;
	HashMap<String, String> _history;
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		
		createMainView();
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}
	
	public void createMainView(){
		/*
		 * Create the visuals
		 * Set the text for elements like the button and Edit Text
		 * Create OnClickListener for button
		 * -When clicked weather info is grabbed from the service and displayed on the screen
		 * Check connection status and disable/enable the button
		 * Append elements to the view
		 */
		
		_context = this;
		_mainViewLayout = new LinearLayout(this);
		_history = new HashMap<String, String>();
		
		String _hint = getResources().getString(R.string.hint);
		String _buttonText = getResources().getString(R.string.buttonHint);
		
		_searchForm = new FormElements(_context, _hint, _buttonText);
		
		Button submitSearchButton = _searchForm.getButton();
		
		submitSearchButton.setOnClickListener(new View.OnClickListener() {
			
			@Override
			public void onClick(View v) {
				getWeatherInfo(_searchForm.getField().getText().toString());
			}
		});
		
		_connectionStatus = WebThings.getConnectionStatus(_context);
		if (_connectionStatus){
			Log.i("Network connection: ", WebThings.getConnectionType(_context));
			submitSearchButton.setClickable(true);
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
			submitSearchButton.setClickable(false);
		}
		
		_weatherInfo = new WeatherElements(_context);
		
		_mainViewLayout.addView(_searchForm);
		_mainViewLayout.addView(_weatherInfo);
		
		_mainViewLayout.setOrientation(LinearLayout.VERTICAL);
		
		setContentView(_mainViewLayout);
	}//createMainView
	
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
				String request = json.getJSONObject("data").getJSONArray("request").getJSONObject(0).getString("query");
				
				String _description = results.getJSONObject(0).getJSONArray("weatherDesc").getJSONObject(0).getString("value");
				String _fahrenheit = results.getJSONObject(0).getString("temp_F");
				
				Log.i("Results: ", results.toString());
				Log.i("Request: ", request.toString());
				Log.i("Weather Info: ", _description + ", " + _fahrenheit);
				
				_weatherInfo.setWeather(_description, _fahrenheit + " degrees fahrenheit");
				
				_history.put(request, results.toString());
				FileThings.storeObjectFile(_context, "history", _history, false);
				FileThings.storeStringFile(_context, "temp", results.toString(), true);
			} catch(JSONException e) {
				Log.e("JSON", e.toString());
			}
		}
		
	}//requestWeather
	
}
