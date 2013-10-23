package com.nathanbuth.minimaldegrees;

import com.github.espiandev.showcaseview.ShowcaseView;

import android.app.ActionBar;
import android.app.Activity;
import android.net.Uri;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;
import android.content.Intent;

public class SecondActivity extends Activity implements View.OnClickListener, ShowcaseView.OnShowcaseEventListener {
	
	ShowcaseView sv;
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.forecastpage);
		ActionBar actionBar = getActionBar();
	    actionBar.setDisplayHomeAsUpEnabled(true);
		
		getData();
		
		ShowcaseView.ConfigOptions co = new ShowcaseView.ConfigOptions();
        co.hideOnClickOutside = true;
        sv = ShowcaseView.insertShowcaseView(R.id.webButton, this, "View Other Weather Data", "Pressing this button " +
                "will take you to a weather website " +
                "using the browser of your choice .", co);
        sv.setOnShowcaseEventListener(this);
		
		Button getMoreButton = (Button) findViewById(R.id.webButton);
		
		getMoreButton.setOnClickListener(this);
	}
	
	@Override
    public void onClick(View view) {

        switch (view.getId()) {
            case R.id.webButton:
                //if (sv.isShown()) {
                	Intent implicitIntent = new Intent(Intent.ACTION_VIEW, Uri.parse("http://www.weather.com"));
                    
                    startActivity(implicitIntent);
                /*} else {
                	Intent implicitIntent = new Intent(Intent.ACTION_VIEW, Uri.parse("http://www.weather.com"));
                    
                    startActivity(implicitIntent);
                }*/
                break;
            case R.id.showcase_button:
                startActivity(new Intent(this, SecondActivityClone.class));
                break;
        }
    }
	
	String date;

    public void getData() {
        Bundle data = getIntent().getExtras();

        if (data != null) {
            String date = data.getString("date");
            String description = data.getString("description");
            String maxCelsius = data.getString("maxCelsius");
            String minCelsius = data.getString("minCelsius");
            String maxFahrenheit = data.getString("maxFahrenheit");
            String minFahrenheit = data.getString("minFahrenheit");

            ((TextView) findViewById(R.id._date)).setText(date);
            ((TextView) findViewById(R.id._description)).setText(description);
            ((TextView) findViewById(R.id._minCelsius)).setText(minCelsius + "¡C -");
            ((TextView) findViewById(R.id._maxCelsius)).setText(maxCelsius + "¡C");
            ((TextView) findViewById(R.id._minFahrenheit)).setText(minFahrenheit + "¡F -");
            ((TextView) findViewById(R.id._maxFahrenheit)).setText(maxFahrenheit + "¡F");
            
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
			
			findViewById(R.id.minMax).setVisibility(View.VISIBLE);
        }
    }
	
	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}
	
	public boolean onOptionsItemSelected(MenuItem item) {
	    switch (item.getItemId()) {
	        case android.R.id.home:
	            Intent intent = new Intent(this, MainActivity.class);
	            intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
	            startActivity(intent);
	            return true;
	        default:
	            return super.onOptionsItemSelected(item);
	    }
	}
	
	@Override
    public void onShowcaseViewHide(ShowcaseView showcaseView) {
		
    }

    @Override
    public void onShowcaseViewShow(ShowcaseView showcaseView) {
    }
	
	@Override
    public void finish() {
        Intent data = new Intent();
        data.putExtra("date", date);

        setResult(RESULT_OK, data);
        super.finish();
    }
}
