/*
 * project	JavaWeek2
 * 
 * package	com.nathanbuth.javaweek2
 * 
 * author	Nathan Buth
 * 
 * date		May 16, 2013
 */
package com.nathanbuth.javaweek2;
import com.nathanbuth.lib.slideJSON;
import com.nathanbuth.lib.slideThings;

import android.os.Bundle;
import android.app.Activity;
import android.view.Gravity;
import android.view.Menu;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.LinearLayout.LayoutParams;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.TextView;

public class MainActivity extends Activity {
	
	TextView slideText;
	ImageView slideBackground;
	RadioGroup slides;
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		
		//Initial Linear Layout
		LinearLayout ll = new LinearLayout(this);
        ll.setOrientation(LinearLayout.VERTICAL);
        LayoutParams lp = new LinearLayout.LayoutParams(LinearLayout.LayoutParams.MATCH_PARENT, LinearLayout.LayoutParams.WRAP_CONTENT);
        ll.setLayoutParams(lp);
        
        TextView titleLabel = new TextView(this);
        titleLabel.setText("Java Week 2 Project");
        titleLabel.setGravity(Gravity.CENTER_HORIZONTAL);
        titleLabel.setTextSize(24);
        
        //blank space
        TextView blankSpace = new TextView(this);
        blankSpace.setText("");
        
        TextView pickSlideLabel = new TextView(this);
        pickSlideLabel.setText("Please pick a slide to view.");
        pickSlideLabel.setGravity(Gravity.CENTER_HORIZONTAL);
        pickSlideLabel.setTextSize(18);
        
        TextView blankSpace2 = new TextView(this);
        blankSpace2.setText("");
        
        //Radio buttons
        LinearLayout radioControlsLL = new LinearLayout(this);
        
        String[] slideNumbers = {"Slide1", "Slide2", "Slide3", "Slide4"};
        slides = slideThings.getSlides(this, slideNumbers);
        
        //Select Slide Button
        LinearLayout buttonLL = new LinearLayout(this);
        
        Button slideSelect = new Button(this);
        slideSelect.setText("Select Slide");
        slideSelect.setGravity(Gravity.CENTER_HORIZONTAL);
        slideSelect.setOnClickListener(new View.OnClickListener() {
			
			@Override
			public void onClick(View v) {

				int selectedSlideId = slides.getCheckedRadioButtonId();
				RadioButton selectedRadio = (RadioButton) slides.findViewById(selectedSlideId);
				String selected = selectedRadio.getText().toString();
				slideText.setText(slideJSON.readJSON(selected));
				
			}
		});
        
        //Slide details
        
        LinearLayout slideLL = new LinearLayout(this);
        
        slideText = new TextView(this);
        slideText.setGravity(Gravity.CENTER_HORIZONTAL);
        slideText.setTextSize(28);

        //Title
        ll.addView(titleLabel);
        ll.addView(blankSpace);
        ll.addView(pickSlideLabel);
        ll.addView(blankSpace2);
        
        //Radio Controls
        radioControlsLL.addView(slides);
        ll.addView(radioControlsLL);
        
        buttonLL.addView(slideSelect);
        ll.addView(buttonLL);
        
        //Slide View
        slideLL.addView(slideText);
        slideLL.setLayoutParams(lp);
        ll.addView(slideLL);
        
        //Base View
        setContentView(ll);
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}

}