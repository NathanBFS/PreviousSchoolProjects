package com.nathanbuth.minimaldegrees;

import android.app.Fragment;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

public class DetailFragment extends Fragment {

	TextView dateLabel;
	ImageView conditionImage;
    TextView descriptionLabel;
    TextView minCelsiusLabel;
    TextView maxCelsiusLabel;
    TextView minFahrenheitLabel;
    TextView maxFahrenheitLabel;
    TextView minMaxLabel;
	
	@Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        //Allows items to work in ActionBar
        setHasOptionsMenu(true);
    }
	
	@Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        super.onCreateView(inflater, container, savedInstanceState);

        LinearLayout view = (LinearLayout)inflater.inflate(R.layout.forecastpage, container, false);

        if (view != null) {
        	dateLabel = (TextView) view.findViewById(R.id._date);
        	conditionImage = (ImageView) view.findViewById(R.id.weatherImage);
        	descriptionLabel = (TextView) view.findViewById(R.id._description);
        	minCelsiusLabel = (TextView) view.findViewById(R.id._minCelsius);
        	maxCelsiusLabel = (TextView) view.findViewById(R.id._maxCelsius);
        	minFahrenheitLabel = (TextView) view.findViewById(R.id._minFahrenheit);
        	maxFahrenheitLabel = (TextView) view.findViewById(R.id._maxFahrenheit);
        	minMaxLabel = (TextView) view.findViewById(R.id.minMax);
        }
        
        Button webButton = (Button) view.findViewById(com.nathanbuth.minimaldegrees.R.id.webButton);

        webButton.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View view) {            	
            	Intent implicitIntent = new Intent(Intent.ACTION_VIEW, Uri.parse("http://www.weather.com"));
                
                startActivity(implicitIntent);
            }
        });
        
        return view;
    }

	@Override
    public void onCreateOptionsMenu(Menu menu, MenuInflater inflater) {
        inflater.inflate(R.menu.main, menu);
    }
	
	public void displayDetails(String date, String description, String minCelsius, String maxCelsius, String minFahrenheit, String maxFahrenheit) {
        // Set layout elements
		dateLabel.setText(date);
		descriptionLabel.setText(description);
		minCelsiusLabel.setText(minCelsius + "¡C -");
		maxCelsiusLabel.setText(maxCelsius + "¡C");
		minFahrenheitLabel.setText(minFahrenheit + "¡F -");
		maxFahrenheitLabel.setText(maxFahrenheit + "¡F");
		
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
		
		minMaxLabel.setVisibility(View.VISIBLE);
    }
	
}