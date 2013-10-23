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

//import com.nathanbuth.lib.slideInfo;

import org.json.JSONException;
import org.json.JSONObject;

public class slideJSON {

	public static JSONObject buildJSON() {

		// create Slides JSONObject
		JSONObject slidesObject = new JSONObject();

		try {
			// create query SONObject
			JSONObject queryObject = new JSONObject();

			for (slideInfo slide : slideInfo.values()) {
				JSONObject infoObject = new JSONObject();

				infoObject.put("slideNumber", slide.setNumbers());
				infoObject.put("slideTitle", slide.setTitles());
				infoObject.put("slideText", slide.setTexts());

				queryObject.put(slide.name().toString(), infoObject);
			}

			slidesObject.put("query", queryObject);

		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return slidesObject;
	}
	
	public static String readJSON(String selected){
		
		String result, number, title, text;
		
		JSONObject object = buildJSON();
		
		try {
			number = object.getJSONObject("query").getJSONObject(selected).getString("slideNumber");
			title = object.getJSONObject("query").getJSONObject(selected).getString("slideTitle");
			text = object.getJSONObject("query").getJSONObject(selected).getString("slideText");
			
			result = "Slide Number: " + number + "\r\n"
					+ "Slide Title: " + title + "\r\n"
					+ "Slide Text: " + text; 
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			result = e.toString();
		}
		
		return result;
	}

}
