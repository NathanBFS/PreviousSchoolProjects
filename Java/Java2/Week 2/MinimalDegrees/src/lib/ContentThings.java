package lib;

import java.util.regex.Matcher;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.content.ContentProvider;
import android.content.ContentValues;
import android.content.UriMatcher;
import android.database.Cursor;
import android.database.MatrixCursor;
import android.net.Uri;
import android.provider.BaseColumns;
import android.util.Log;

public class ContentThings extends ContentProvider {

	public static final String AUTHORITY = "com.nathankbuth.lib.ContentThings";
	
	public static class WeatherData implements  BaseColumns {
		
		public static final Uri CONTENT_URI = Uri.parse("content://" + AUTHORITY + "/halfWeek/");
		
		public static final String CONTENT_TYPE = "vnd.android.cursor.dir/nathankbuth.minimaldegrees.item";
		public static final String CONTENT_ITEM_TYPE = "vnd.android.cursor.item/nathankbuth.minimaldegrees.item";
				
		public static final String DESCRIPTION_COLUMN = "description";
		public static final String C_COLUMN = "celsius";
		public static final String F_COLUMN = "fahrenheit";
		
		public static final String[] PROJECTION = {"_Id", DESCRIPTION_COLUMN, C_COLUMN, F_COLUMN};
		
		private WeatherData() {};
	}
	
	public static final int HALF_WEEK = 1;
	public static final int FULL_WEEK = 2;
	
	private static final UriMatcher uriMatcher = new UriMatcher(UriMatcher.NO_MATCH);
	
	static {
		uriMatcher.addURI(AUTHORITY, "halfWeek/", HALF_WEEK);
		uriMatcher.addURI(AUTHORITY, "fullWeek/", FULL_WEEK);
	}
	
	@Override
	public int delete(Uri uri, String selection, String[] selectionArgs) {
		// TODO Auto-generated method stub
		throw new UnsupportedOperationException();
	}

	@Override
	public String getType(Uri uri) {
		String type = null;
		
		switch (uriMatcher.match(uri)) {
			case HALF_WEEK:
				type = WeatherData.CONTENT_TYPE;
				break;
			case FULL_WEEK:
				type = WeatherData.CONTENT_ITEM_TYPE;
				break; 
			default:
				break;
		}
		return type;
	}

	@Override
	public Uri insert(Uri uri, ContentValues values) {
		// TODO Auto-generated method stub
		throw new UnsupportedOperationException();
	}

	@Override
	public boolean onCreate() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Cursor query(Uri uri, String[] projection, String selection, String[] selectionArgs, String sortOrder) {
		MatrixCursor result = new MatrixCursor(WeatherData.PROJECTION);
		
		String read = FileThings.readStringFile(getContext(), "weatherData", false);
		
		JSONObject json;
		JSONObject data = null;
		JSONArray week = null;
		
		try {
			json = new JSONObject(read);
			data = json.getJSONObject("data");
			week = data.getJSONArray("weather");
		} catch (JSONException e) {
			e.printStackTrace();
		}
		
		if (data == null) {
			return result;
		}
		
		switch (uriMatcher.match(uri)) {
			case HALF_WEEK:
				for(int i = 0; i < week.length(); i++){
					try {
						JSONObject day = week.getJSONObject(i);
						String halfWeekD = day.getJSONArray("weatherDesc").getJSONObject(0).getString("value");
						String halfWeekC = day.getString("tempMaxC");
						String halfWeekF = day.getString("tempMaxF");
						
						result.addRow(new Object[] {i + 1, halfWeekD, halfWeekC, halfWeekF});
						//Log.i("Result data:", result.toString());
					} catch (JSONException e){
						e.printStackTrace();
					}
				}
				break;
			case FULL_WEEK:
				for(int i = 0; i < week.length(); i++){
					try {
						JSONObject day = week.getJSONObject(i);
						String fullWeekD = day.getJSONArray("weatherDesc").getJSONObject(0).getString("value");
						String fullWeekC = day.getString("tempMaxC");
						String fullWeekF = day.getString("tempMaxF");
						
						result.addRow(new Object[] {i + 1, fullWeekD, fullWeekC, fullWeekF});
					} catch (JSONException e){
						e.printStackTrace();
					}
				}
				break;
			default:
				Log.e("QUERY", "INVALID URI = " + uri.toString());
		}
		
		return result;
	}

	@Override
	public int update(Uri uri, ContentValues values, String selection,
			String[] selectionArgs) {
		// TODO Auto-generated method stub
		throw new UnsupportedOperationException();
	}

}
