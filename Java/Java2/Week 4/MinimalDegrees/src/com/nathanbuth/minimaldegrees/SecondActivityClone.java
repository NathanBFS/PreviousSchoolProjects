package com.nathanbuth.minimaldegrees;

import android.app.ActionBar;
import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

public class SecondActivityClone extends Activity {
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.detailfragment);
		ActionBar actionBar = getActionBar();
	    actionBar.setDisplayHomeAsUpEnabled(true);
		
		getData();
		
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

            DetailFragment fragment = (DetailFragment) getFragmentManager().findFragmentById(R.id.detailFragment);
            fragment.displayDetails(date, description, minCelsius, maxCelsius, minFahrenheit, maxFahrenheit);
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
    public void finish() {
        Intent data = new Intent();
        data.putExtra("date", date);

        setResult(RESULT_OK, data);
        super.finish();
    }
	
}
