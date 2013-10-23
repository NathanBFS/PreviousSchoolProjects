/*
 * project	MinimalDegrees
 * 
 * package	lib
 * 
 * author	Nathan Buth
 * 
 * date		May 23, 2013
 */
package lib;

import java.io.BufferedInputStream;
import java.net.URL;
import java.net.URLConnection;
import android.content.Context;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.util.Log;

public class WebThings {
	/*
	 * getConnectionType - Checks the type of connection
	 * getConnectionStatus - Checks to see if connected or not
	 * nInfo - Check the network information
	 * getURLStringResponse - processes response from URL
	 */

	//Variables
	static Boolean _connectionStatus = false;
	static String _connectionType = "Unavailable";
	
	public static String getConnectionType(Context context){
		nInfo(context);
		return _connectionType;
	}//getConnectionType
	
	public static Boolean getConnectionStatus(Context context){
		nInfo(context);
		
		return _connectionStatus;
	}//getConnectionStatus
	
	private static void nInfo(Context context){
		//check connection status
		
		ConnectivityManager manageConnection = (ConnectivityManager) context.getSystemService(Context.CONNECTIVITY_SERVICE);
		NetworkInfo netInfo = manageConnection.getActiveNetworkInfo();
		if(netInfo != null){
			if(netInfo.isConnected()){
				_connectionType = netInfo.getTypeName();
				_connectionStatus = true;
			}
		}
	}//nInfo
	
	public static String getURLStringResponse(URL url){
		//receive URL response data 
		
		String response = "";
		
		try{
			URLConnection connect = url.openConnection();
			BufferedInputStream bin = new BufferedInputStream(connect.getInputStream());
			
			byte[] contentBytes = new byte[1024];
			int bytesRead = 0;
					
			StringBuffer responseBuffer = new StringBuffer();
			
			while ((bytesRead = bin.read(contentBytes)) != -1){
				response = new String(contentBytes, 0, bytesRead);
				responseBuffer.append(response);
			}
		} catch(Exception e) {
			Log.e("URL Response Error", e.toString());
		}
		return response;
	}//getURLStringResponse
	
}
