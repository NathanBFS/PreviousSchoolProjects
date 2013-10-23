package lib;

public class StorageThings {
	
	public static String getDescription(String[] data) {
		String descriptionBase = data[9].split(":")[2];
		String description = descriptionBase.replaceAll("[^a-zA-Z0-9\\s]", "").trim();
		
		return description;
	}
	
	public static String getTempC(String[] data) {
		String tempCBase = data[5].split(":")[1];
		String tempC = tempCBase.replace("\"", "").trim();
		
		return tempC;
	}
	
	public static String getTempF(String[] data) {
		String tempFBase = data[6].split(":")[1];
		String tempF = tempFBase.replace("\"", "").trim();
		
		return tempF;
	}
	
	public static String getTempCMin(String[] data) {
		String tempCMiBase = data[21].split(":")[1];
		String tempCMin = tempCMiBase.replace("\"", "").trim();
		
		return tempCMin;
	}
	
	public static String getTempCMax(String[] data) {
		String tempCMaBase = data[19].split(":")[1];
		String tempCMax = tempCMaBase.replace("\"", "").trim();
		
		return tempCMax;
	}
	
	public static String getTempFMin(String[] data) {
		String tempFMiBase = data[22].split(":")[1];
		String tempFMin = tempFMiBase.replace("\"", "").trim();
		
		return tempFMin;
	}
	public static String getTempFMax(String[] data) {
		String tempFMaBase = data[20].split(":")[1];
		String tempFMax = tempFMaBase.replace("\"", "").trim();
		
		return tempFMax;
	}
}
