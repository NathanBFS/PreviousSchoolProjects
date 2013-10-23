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

public enum slideInfo {

	Slide1("1", "Title Slide", "Presentation Title"),
	Slide2("2", "Welcome Slide", "This is my introduction and welcome slide"),
	Slide3("3", "Details Slide", "Details about my presentation are here"),
	Slide4("4", "Contact Slide", "Has my contact info and is the end of my presentation");
	
	private final String slideNumber;
	private final String slideTitle;
	private final String slideText;
	
	slideInfo(String slideNumber, String slideTitle, String slideText){
		this.slideNumber = slideNumber;
		this.slideTitle = slideTitle;
		this.slideText = slideText;
	}
	
	public String setNumbers(){
		return slideNumber;
	}
	public String setTitles(){
		return slideTitle;
	}
	public String setTexts(){
		return slideText;
	}
	
}