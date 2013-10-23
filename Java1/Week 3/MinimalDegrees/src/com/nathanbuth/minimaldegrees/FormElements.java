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

import android.annotation.SuppressLint;
import android.content.Context;
import android.text.InputType;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;

@SuppressLint("ViewConstructor")
public class FormElements extends LinearLayout {
	/*
	 * FormElements - creates the EditText and Button to be used to enter in data
	 */
	
	//Variables
	EditText _searchInput;
	LayoutParams _searchLP;
	Button _submitSearchButton;

	//Create the form
	public FormElements(Context context, String hint, String buttonText){
		super(context);
		
		_searchLP = new LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT);
		this.setLayoutParams(_searchLP);
		
		//Make the edit text
		_searchInput = new EditText(context);
		_searchLP = new LayoutParams(0, ViewGroup.LayoutParams.WRAP_CONTENT, 1.0f);
		_searchInput.setLayoutParams(_searchLP);
		_searchInput.setHint(hint);
		
		_searchInput.setRawInputType(InputType.TYPE_CLASS_TEXT);
		
		//Make the button
		_submitSearchButton = new Button(context);
		_submitSearchButton.setText(buttonText);
		
		//Add form elements to the view
		this.addView(_searchInput);
		this.addView(_submitSearchButton);
	}//FormElements
	
	public EditText getField() {
		return _searchInput;
	}
	
	public Button getButton() {
		return _submitSearchButton;
	}
}
