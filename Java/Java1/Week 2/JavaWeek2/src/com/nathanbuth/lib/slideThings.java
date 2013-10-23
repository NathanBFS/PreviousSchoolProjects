/*
 * project	JavaWeek2
 * 
 * package	com.nathanbuth.lib
 * 
 * author	Nathan Buth
 * 
 * date		May 16, 2013
 */
package com.nathanbuth.lib;

import android.content.Context;

import android.widget.LinearLayout;
import android.widget.LinearLayout.LayoutParams;
import android.widget.RadioButton;
import android.widget.RadioGroup;


public class slideThings {
	
	public static LinearLayout slideFormat(Context context, String text1, String text2, String text3){
		LinearLayout ll = new LinearLayout(context);
		ll.setOrientation(LinearLayout.VERTICAL);
        LayoutParams lp = new LinearLayout.LayoutParams(LinearLayout.LayoutParams.MATCH_PARENT, LinearLayout.LayoutParams.WRAP_CONTENT);
        ll.setLayoutParams(lp);
		
		return ll;
	}
	
	public static RadioGroup getSlides(Context context, String[] slides){
		RadioGroup boxes = new RadioGroup(context);
		boxes.setOrientation(RadioGroup.HORIZONTAL);
		
		for(int i=0; i<slides.length; i++){
			RadioButton rb = new RadioButton(context);
			
			rb.setText(slides[i]);
			rb.setId(i+1);
			
			boxes.addView(rb);
		}
		
		boxes.check(1);
		
		return boxes;
	}
	

}
