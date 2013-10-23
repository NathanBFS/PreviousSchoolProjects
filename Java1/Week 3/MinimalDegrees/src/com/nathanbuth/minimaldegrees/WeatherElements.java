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

import android.content.Context;
import android.widget.GridLayout;
import android.widget.TextView;

public class WeatherElements extends GridLayout{
	/*
	 * WeatherElements - creates the views for the weather data to be displayed in
	 * setWeather - organizes the weather data into the grid
	 */

	//Variables
	Context _context;
	TextView _description;
	TextView _fahrenheit;
	
	public WeatherElements(Context context){
		super(context);
		
		_context = context;
		
		//Sets Grid layout to 2 columns
		this.setColumnCount(2);
		
		//Create text views for weather data
		TextView descriptionText = new TextView(_context);
		descriptionText.setText(getResources().getString(R.string.weatherText));
		_description = new TextView(_context);

		TextView fahrenheitText = new TextView(_context);
		fahrenheitText.setText(getResources().getString(R.string.temperatureText));
		_fahrenheit = new TextView(_context);
		
		//Adds text views to the view
		this.addView(descriptionText);
		this.addView(_description);
		this.addView(fahrenheitText);
		this.addView(_fahrenheit);
		
	}//WeatherElements
	
	//Sets the text views in the grid layout
	public void setWeather(String description, String fahrenheit){
		_description.setText(description);
		_fahrenheit.setText(fahrenheit);
	}//setWeather
	
}
