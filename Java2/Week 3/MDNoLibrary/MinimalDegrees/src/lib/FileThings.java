/*
 * project	MinimalDegrees
 * 
 * package	lib
 * 
 * author	Nathan Buth
 * 
 * date		Jun 7, 2013
 */
package lib;

import java.io.*;


import android.content.Context;
import android.util.Log;

public class FileThings {

	@SuppressWarnings("resource")
	public static Boolean storeStringFile(Context context, String filename, String content, Boolean locExt){
		try{
			File file;
			FileOutputStream fos;
			if(locExt){
				file = new File(context.getExternalFilesDir(null), filename);
				fos = new FileOutputStream(file);
			} else {
				fos = context.openFileOutput(filename, Context.MODE_PRIVATE);
			}
			fos.write(content.getBytes());
			//fos.close();
		} catch (IOException e){
			Log.e("Write Error: ", filename);
		}
		return true;
	}//storeStringFile
	
	@SuppressWarnings("resource")
	public static Boolean storeObjectFile(Context context, String filename, Object content, Boolean locExt){
		try {
			File file;
			FileOutputStream fos;
			ObjectOutputStream oos;
			if(locExt){
				file = new File(context.getExternalFilesDir(null), filename);
				fos = new FileOutputStream(file);
			} else {
				fos = context.openFileOutput(filename, Context.MODE_PRIVATE);
			}
			oos = new ObjectOutputStream(fos);
			oos.writeObject(content);
			oos.close();
			fos.close();
		} catch(IOException e){
			Log.e("Write Error: ", filename);
		}
		return true;
	}//storeObjectFile
	
	@SuppressWarnings("resource")
	public static String readStringFile(Context context, String filename, Boolean locExt){
		String content = "";
		try{
			File file;
			FileInputStream fis;
			if(locExt){
				file = new File(context.getFileStreamPath(null), filename);
				fis = new FileInputStream(file);
			} else {
				file = new File(filename);
				fis = context.openFileInput(filename);
			}
			BufferedInputStream bin = new BufferedInputStream(fis);
			byte[] contentBytes = new byte[1024];
			int bytesRead = 0;
			StringBuffer contentBuffer = new StringBuffer();
			while((bytesRead = bin.read(contentBytes)) != -1){
				content = new String(contentBytes, 0, bytesRead);
				contentBuffer.append(content);
			}
			content = contentBuffer.toString();
			//fis.close();
		} catch(FileNotFoundException e){
			Log.e("Read Error: ", "File not found " + filename);
		} catch (IOException e){
			Log.e("Read Error: ", "I/O Error");
		}
		return content;
	}//readStringFile
	
	@SuppressWarnings("resource")
	public static Object readObjectFile(Context context, String filename, Boolean locExt){
		Object content = new Object();
		try{
			File file;
			FileInputStream fis;
			if(locExt){
				file = new File(context.getFileStreamPath(null), filename);
				fis = new FileInputStream(file);
			} else {
				file = new File(filename);
				fis = context.openFileInput(filename);
			}
			ObjectInputStream objectInput = new ObjectInputStream(fis);
			try{
				content = objectInput.readObject();
			} catch(ClassNotFoundException e) {
				Log.e("Read Error: ", "Invalid Java OBject File");
			}
			objectInput.close();
			fis.close();
		} catch(FileNotFoundException e){
			Log.e("Read Error: ", "File not found " + filename);
		} catch (IOException e){
			Log.e("Read Error: ", "I/O Error");
		}
		return content;
	}//readObjectFile
}
