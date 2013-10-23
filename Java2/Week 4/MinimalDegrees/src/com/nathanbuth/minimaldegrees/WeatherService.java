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

import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;
import android.app.Activity;
import android.app.IntentService;
import android.content.Intent;
import android.os.Bundle;
import android.os.Message;
import android.os.Messenger;
import android.os.RemoteException;
import android.util.Log;
import lib.*;


public class WeatherService extends IntentService {
	
	URL usableURL = null;
	String response = null;
	String zipCode = null;
	
	public WeatherService(){
		super("WeatherService");
	}
	
	@Override
	protected void onHandleIntent(Intent intent) {
		
		Bundle extras = intent.getExtras();
		
		if(extras != null){
			zipCode = (String) extras.get("zipcode");
		}
		
		String apiURL = "http://api.worldweatheronline.com/free/v1/weather.ashx";
		String apiKey = "4dgwqs59cdws29rws53p6zyq";
		String queryString = "";
		
		try{
			queryString = URLEncoder.encode(zipCode,
					"UTF-8");
		} catch (Exception e) {
			Log.e("Bad URL: ", "Encoding Problem");
		}
		
		try {
			usableURL = new URL(apiURL + "?q=" + queryString + "&format=json&num_of_days=7&key=" + apiKey);
			response = WebThings.getURLStringResponse(usableURL);
			Log.i("Query String: ", queryString.toString());
			Log.i("Response data: ", response.toString());
			
			FileThings.storeStringFile(this, "weatherData", response, false);
		} catch(MalformedURLException e) {
			Log.e("Error: ", "MalformedURLException");
			usableURL = null;
		}
		
		Messenger messenger = (Messenger) extras.get("messenger");
		
		Message message = Message.obtain();
		if (message != null){
			message.arg1 = Activity.RESULT_OK;
			message.obj = response;
		}
		
		try {
			messenger.send(message);
		} catch (RemoteException e) {
			Log.e("onHandleIntent", e.getMessage().toString());
		}
	}

}
