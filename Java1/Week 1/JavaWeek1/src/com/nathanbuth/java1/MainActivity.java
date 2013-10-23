/*
 * project	JavaWeek1
 * 
 * package	com.nathanbuth.java1
 * 
 * author	Nathan Buth
 * 
 * date		May 9, 2013
 */
package com.nathanbuth.java1;

import android.os.Bundle;
import android.app.Activity;
import android.graphics.Typeface;
import android.view.Menu;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.LinearLayout.LayoutParams;
import android.widget.TextView;
import android.widget.ImageView;
import java.util.Random;

public class MainActivity extends Activity {
	
	LinearLayout ll;
	LinearLayout boot;
	LinearLayout textLL;
	LinearLayout catLL;
	LinearLayout finalLL;
	LinearLayout.LayoutParams lp;
	TextView bootLabel;
	TextView catLabel;
	TextView cName;
	TextView finishedLabel;
	Button bootButton;
	Button cnButton;
	Button generateCatButton;
	Button yesButton;
	Button noButton;
	Button doneButton;
	Button finishedButton;
	EditText editableT;
	ImageView catImage;
	int numberTag;
	int modNumTag;
	boolean saveCat;
	
	int[] catPhotos = new int [] { R.drawable.cat1,
	        R.drawable.cat2, R.drawable.cat3, R.drawable.cat4, R.drawable.cat5,
	        R.drawable.cat6, R.drawable.cat7, R.drawable.cat8, R.drawable.cat9, R.drawable.notacat };
	
	Random catGenerator = new Random();

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
        ll = new LinearLayout(this);
        ll.setOrientation(LinearLayout.VERTICAL);
        lp = new LinearLayout.LayoutParams(LinearLayout.LayoutParams.MATCH_PARENT, LinearLayout.LayoutParams.WRAP_CONTENT);
        ll.setLayoutParams(lp);
        
        //Boot section
        boot = new LinearLayout(this);
        boot.setLayoutParams(lp);
        
        int bootNum = getResources().getInteger(R.integer.bootNum);
        numberTag = bootNum;
        
        modNumTag = 100;
        
        bootLabel = new TextView(this);
        bootLabel.setText("Ready to be booted up.  " + numberTag + ".");
        
        bootButton = new Button(this);
        bootButton.setText("Start Boot");
        bootButton.setOnClickListener(new View.OnClickListener() {
			
			@Override
			public void onClick(View v) {
				while (numberTag >= 0){
					for(int i = 0; i <= numberTag; i++){
						modNumTag = numberTag - i;
						
						bootLabel.setText(modNumTag + " processes left to complete.  " + "Boot up sequence complete!");
					}
					if (modNumTag == 0){
			        	ll.addView(textLL);
			        	boot.removeView(bootButton);
			        }
					
					break;
				}
			}
		});
        
        boot.addView(bootLabel);
        boot.addView(bootButton);
        
        ll.addView(boot);
        //End Boot Section
        
        //Text Section
        textLL = new LinearLayout(this);
        textLL.setLayoutParams(lp);
        
        editableT = new EditText(this);
        editableT.setHint("Type in cat name.");
        textLL.addView(editableT);
        
        cName = new TextView(this);
        
        cnButton = new Button(this);
        cnButton.setText("Submit Name");
        cnButton.setOnClickListener(new View.OnClickListener() {
			
			@Override
			public void onClick(View v) {
				String catName = (editableT.getText().toString());
				cName.setText(catName);
				cName.setTextSize(72);				
				
				textLL.addView(cName);
				ll.addView(catLL);
				boot.removeView(bootLabel);
				textLL.removeView(editableT);
				textLL.removeView(cnButton);
			}
		});
        
        textLL.addView(cnButton);        
        
        //End Text Section
        
        //Cat View 
        catLL = new LinearLayout(this);
        catLL.setLayoutParams(lp);
        
        finalLL = new LinearLayout(this);
        finalLL.setLayoutParams(lp);
        
        //saveCat = false;
        
        Integer q = catPhotos[catGenerator.nextInt(catPhotos.length)];
        catImage = new ImageView(this);
        catImage.setImageResource(q);
        
        generateCatButton = new Button(this);
        generateCatButton.setText("Generate Cat");
        generateCatButton.setOnClickListener(new View.OnClickListener() {
			
			@Override
			public void onClick(View v) {
				catLL.addView(catImage);
				
				catImage.setImageResource(catPhotos[catGenerator.nextInt(catPhotos.length)]);
				catLL.removeView(generateCatButton);
				
				ll.addView(finalLL);
			}
		});  
        
        catLL.addView(generateCatButton);
        
        catLabel = new TextView(this);
        catLabel.setText("Do you like this cat?");
        
        yesButton = new Button(this);
        yesButton.setText("Yes");
        yesButton.setOnClickListener(new View.OnClickListener() {
			
			@Override
			public void onClick(View v) {
				saveCat = true;
				doneButton.setText("Done");
				finalLL.addView(doneButton);
			}
		});
        
        noButton = new Button(this);
        noButton.setText("No");
        noButton.setOnClickListener(new View.OnClickListener() {
			
			@Override
			public void onClick(View v) {
				if(saveCat == false){
					saveCat = true;
					saveCat = false;
				} else if (saveCat != false){
					saveCat = false;
				}
				finalLL.addView(doneButton);
			}
		});
        
        doneButton = new Button(this);
        doneButton.setText("Click This");
        doneButton.setOnClickListener(new View.OnClickListener() {
			
			@Override
			public void onClick(View v) {
				if(saveCat == false){
					catLL.removeView(catImage);
					catLL.addView(catImage);
					
					catImage.setImageResource(catPhotos[catGenerator.nextInt(catPhotos.length)]);
					finalLL.removeView(noButton);
					finalLL.removeView(catLabel);
					doneButton.setText("Keep click until you find one you do like.");
				} else if (saveCat == true) {
					ll.removeAllViews();
					boot.removeAllViews();
					textLL.removeAllViews();
					catLL.removeAllViews();
					finalLL.removeAllViews();
					ll.addView(finishedLabel);
					ll.addView(finishedButton);
				} else {
					//do nothing
				}
				
			}
		});
        
        finalLL.addView(catLabel);
		finalLL.addView(yesButton);
		finalLL.addView(noButton);
		
		finishedButton = new Button(this);
		finishedButton.setText("No");
        finishedButton.setOnClickListener(new View.OnClickListener() {
			
			@Override
			public void onClick(View v) {
				finish();
			}
		});
        
        finishedLabel = new TextView(this);
        finishedLabel.setText("Thank you for using my app, enjoy your new cat picture!");
        
        //End Cat View
       
        setContentView(ll);
    }


    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.main, menu);
        return true;
    }
    
}
