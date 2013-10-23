package com.nathanbuth698.hoverplayer;

import com.google.android.youtube.player.YouTubeBaseActivity;
import com.google.android.youtube.player.YouTubePlayer;
import com.google.android.youtube.player.YouTubePlayer.ErrorReason;
import com.google.android.youtube.player.YouTubePlayer.OnInitializedListener;
import com.google.android.youtube.player.YouTubePlayer.PlaybackEventListener;
import com.google.android.youtube.player.YouTubePlayer.PlayerStateChangeListener;
import com.google.android.youtube.player.YouTubePlayer.PlayerStyle;
import com.google.android.youtube.player.YouTubePlayer.PlaylistEventListener;
import com.google.android.youtube.player.YouTubePlayer.Provider;
import com.google.android.youtube.player.YouTubePlayerView;

import com.nathanbuth698.hoverplayer.DeveloperKey;

import android.os.Bundle;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.CompoundButton;
import android.widget.Spinner;
//import android.widget.TextView;
import android.widget.Toast;

public class VideoActivity extends YouTubeFailureRecoveryActivity implements
	CompoundButton.OnCheckedChangeListener,
	AdapterView.OnItemSelectedListener, SensorEventListener {

	private final ListEntry[] ENTRIES = {
	    new ListEntry("Minecraft Victorian Style House", "RlmyFEMYtKU", false),
	    new ListEntry("Iron Patriot Costume", "eZVF88bRxFs", false),
	    new ListEntry("Easy Eggg Peas Stew", "F_lhh9aN2M4", false),
	    new ListEntry("Pea & Potato Samosas", "Z8gb_-dlCFc", false),
	    new ListEntry("Chocolate Box", "BkIvy9Hz8r0", false)
	};
	
	private final ListEntryP[] ENTRIES_P = {
		new ListEntryP("Minecraft Playlist", "PLLcPuuEnK6CowIUso-UgTEK5NGzqtUn03", true),
		new ListEntryP("Cosplay Playlist", "PLLcPuuEnK6Cp5-GSIOqCvJ-bz9o4J6Qx9", true),
		new ListEntryP("Appetizer Playlist", "PLLcPuuEnK6CrnXOTiTFY2RBUONyP40jL4", true),
		new ListEntryP("Main Course Playlist", "PLLcPuuEnK6CpWWRpvxebNzTUThKrEuXvV", true),
		new ListEntryP("Dessert Playlist", "PLLcPuuEnK6ConhOmRElZP4eVjIX5PkAer", true)
	};
	
	private static final String KEY_CURRENTLY_SELECTED_ID = "currentlySelectedId";
	
	Toast toast;
	MenuItem sensorItem;
	MenuItem settingsItem;
	Boolean touchless = null;
	Boolean playing = null;
	private SensorManager sensorManager;
	private Sensor proximitySensor;
	private ArrayAdapter<ListEntry> videoAdapter;
	private Spinner videoChooser;
	private ArrayAdapter<ListEntryP> videoAdapterP;
	private Spinner videoChooserP;
	private YouTubePlayerView youtubePlayerView;
	private YouTubePlayer player;
	
	private MyPlayerStateChangeListener playerStateChangeListener;
	private MyPlaybackEventListener playbackEventListener;

	private int currentlySelectedPosition;
	private String currentlySelectedId;

	@Override
	public void onCreate(Bundle savedInstanceState) {
	    super.onCreate(savedInstanceState);
	    
	    setContentView(R.layout.activity_video);
	    //chooseMedia();
	    
	    videoChooser = (Spinner) findViewById(R.id.video_chooser);
	    videoChooserP = (Spinner) findViewById(R.id.playlist_chooser);
	    youtubePlayerView = (YouTubePlayerView) findViewById(R.id.youtube_view);
        
	    	videoAdapter = new ArrayAdapter<ListEntry>(this, android.R.layout.simple_spinner_item, ENTRIES);
			videoAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
		    videoChooser.setOnItemSelectedListener(this);
		    videoChooser.setAdapter(videoAdapter);
	    	videoAdapterP = new ArrayAdapter<ListEntryP>(this, android.R.layout.simple_spinner_item, ENTRIES_P);
			videoAdapterP.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
		    videoChooserP.setOnItemSelectedListener(this);
		    videoChooserP.setAdapter(videoAdapterP);
	    
	    youtubePlayerView.initialize(DeveloperKey.DEVELOPER_KEY, this);
	    
	    playerStateChangeListener = new MyPlayerStateChangeListener();
	    playbackEventListener = new MyPlaybackEventListener();
	}
	
	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.menu, menu);
		
		sensorItem = menu.findItem(R.id.action_sensor);
		settingsItem = menu.findItem(R.id.action_settings);
		
        return true;
		//return super.onCreateOptionsMenu(menu);
	}
	
	@Override
	public void onInitializationSuccess(YouTubePlayer.Provider provider, YouTubePlayer player,boolean wasRestored) {
	    this.player = player;
	    player.setPlayerStateChangeListener(playerStateChangeListener);
	    player.setPlaybackEventListener(playbackEventListener);

	    if (!wasRestored) {
	      //playVideoAtSelection();
	    }
	    //setControlsEnabled(true);
	  }
	
	@Override
	public boolean onOptionsItemSelected(MenuItem item) {
	    // Handle presses on the action bar items
	    switch (item.getItemId()) {
	        case R.id.action_sensor:
	        	sensorController();
	            return true;
	        case R.id.action_settings:
	        	playerController();
	            return true;
	        default:
	            return super.onOptionsItemSelected(item);
	    }
	}
	
	 private void playVideoAtSelection() {
			 ListEntry selectedEntry = videoAdapter.getItem(currentlySelectedPosition);
			    if (selectedEntry.id != currentlySelectedId && player != null) {
			        currentlySelectedId = selectedEntry.id;
			        if (selectedEntry.isPlaylist) {
			            player.cuePlaylist(selectedEntry.id);
		            } else {
			            player.cueVideo(selectedEntry.id);
		            }
		      }
			 ListEntryP selectedEntryP = videoAdapterP.getItem(currentlySelectedPosition);
			    if (selectedEntryP.id != currentlySelectedId && player != null) {
			        currentlySelectedId = selectedEntryP.id;
			        if (selectedEntryP.isPlaylist) {
			            player.cuePlaylist(selectedEntryP.id);
		            } else {
			            player.cueVideo(selectedEntryP.id);
		            }
		      }
	}
	
	public void sensorController(){
		final String[] items = {"Turn Sensor Controls On", "Turn Sensor Controls Off"};

		AlertDialog.Builder builder = new AlertDialog.Builder(this);
		builder.setTitle("Proximity Sensor Controls");
		builder.setItems(items, new DialogInterface.OnClickListener() {
			public void onClick(DialogInterface dialog, int item) {
				Toast.makeText(getApplicationContext(), items[item], Toast.LENGTH_SHORT).show();
				if(items[item].equals("Turn Sensor Controls On") && touchless == true){
					registerSensor();
				}else if(items[item].equals("Turn Sensor Controls Off") && touchless == false){
					unregisterSensor();
				}else{
					touchless = false;
				}
			}
		});
		AlertDialog alert = builder.create();
		alert.show();
	}
	
	public void playerController(){
		final String[] items = {"Default Style", "Minimal Style", "Chromeless Style"};

		AlertDialog.Builder builder = new AlertDialog.Builder(this);
		builder.setTitle("Player Styling");
		builder.setItems(items, new DialogInterface.OnClickListener() {
			public void onClick(DialogInterface dialog, int item) {
				Toast.makeText(getApplicationContext(), items[item], Toast.LENGTH_SHORT).show();
				if(items[item].equals("Default Style")){
					player.setPlayerStyle(PlayerStyle.DEFAULT);
				}else if(items[item].equals("Minimal Style")){
					player.setPlayerStyle(PlayerStyle.MINIMAL);
				}else if(items[item].equals("Chromeless Style")){
					player.setPlayerStyle(PlayerStyle.CHROMELESS);
				}
			}
		});
		AlertDialog alert = builder.create();
		alert.show();
	}
	
	public void registerSensor(){
		sensorManager = (SensorManager) getSystemService(Context.SENSOR_SERVICE);
		
		proximitySensor = sensorManager.getDefaultSensor(Sensor.TYPE_PROXIMITY);
		
		if (proximitySensor == null){
			Toast.makeText(this, "Proximity Sensor not available on this device.  Only touch gestures will be usable.", Toast.LENGTH_SHORT).show();
		} else {
			sensorManager.registerListener(this, proximitySensor, SensorManager.SENSOR_DELAY_UI);

			touchless = false;
		}
	}
	
	public void unregisterSensor(){
		if(touchless == false){
			sensorManager.unregisterListener(this);
			touchless = true;
		}else{
			Log.i("Error line 179: ","Currently not able to unregister sensor due to it not being registered.");
		}
	}

	@Override
	public void onItemSelected(AdapterView<?> arg0, View view, int pos,long id) {
		currentlySelectedPosition = pos;
	    playVideoAtSelection();
	}

	@Override
	public void onNothingSelected(AdapterView<?> arg0) {
		// TODO Auto-generated method stub
		
	}
	
	@Override
	protected void onSaveInstanceState(Bundle state) {
	    super.onSaveInstanceState(state);
	    state.putString(KEY_CURRENTLY_SELECTED_ID, currentlySelectedId);
	}
	
	@Override
	protected void onRestoreInstanceState(Bundle state) {
	    super.onRestoreInstanceState(state);
	    currentlySelectedId = state.getString(KEY_CURRENTLY_SELECTED_ID);
	}
	
	private static final int parseInt(String intString, int defaultValue) {
	    try {
	      return intString != null ? Integer.valueOf(intString) : defaultValue;
	    } catch (NumberFormatException e) {
	      return defaultValue;
	    }
	}

	@Override
	public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
		// TODO Auto-generated method stub
		
	}

	private final class MyPlaybackEventListener implements PlaybackEventListener {
	    String playbackState = "NOT_PLAYING";
	    String bufferingState = "";
	    @Override
	    public void onPlaying() {
	        playbackState = "PLAYING";
	    }

	    @Override
	    public void onBuffering(boolean isBuffering) {
	        bufferingState = isBuffering ? "(BUFFERING)" : "";
	    }

	    @Override
	    public void onStopped() {
	        playbackState = "STOPPED";
	    }

	    @Override
	    public void onPaused() {
	       playbackState = "PAUSED";
	    }

		@Override
		public void onSeekTo(int arg0) {
			// TODO Auto-generated method stub
			
		}
	}

	private final class MyPlayerStateChangeListener implements PlayerStateChangeListener {
	    String playerState = "UNINITIALIZED";

	    @Override
	    public void onLoading() {
	        playerState = "LOADING";
	    }

	    @Override
	    public void onLoaded(String videoId) {
	        playerState = String.format("LOADED %s", videoId);
	    }

	    @Override
	    public void onAdStarted() {
	        playerState = "AD_STARTED";
	    }

	    @Override
	    public void onVideoStarted() {
	        playerState = "VIDEO_STARTED";
	        playing = true;
	        registerSensor();
	    }

	    @Override
	    public void onVideoEnded() {
	        playerState = "VIDEO_ENDED";
	    }

	    @Override
	    public void onError(ErrorReason reason) {
	        playerState = "ERROR (" + reason + ")";
	        if (reason == ErrorReason.UNEXPECTED_SERVICE_DISCONNECTION) {
	          // When this error occurs the player is released and can no longer be used.
	          player = null;
	          //setControlsEnabled(false);
	        }
	    }
	}
	
	final class ListEntry {

	    public final String title;
	    public final String id;
	    public final boolean isPlaylist;

	    public ListEntry(String title, String videoId, boolean isPlaylist) {
	        this.title = title;
	        this.id = videoId;
	        this.isPlaylist = isPlaylist;
	    }

	    @Override
	    public String toString() {
	        return title;
	    }

	}
	
	final class ListEntryP {

	    public final String title;
	    public final String id;
	    public final boolean isPlaylist;

	    public ListEntryP(String title, String videoId, boolean isPlaylist) {
	        this.title = title;
	        this.id = videoId;
	        this.isPlaylist = isPlaylist;
	    }

	    @Override
	    public String toString() {
	        return title;
	    }

	}

	@Override
	protected Provider getYouTubePlayerProvider() {
		return youtubePlayerView;
	}

	@Override
	public void onAccuracyChanged(Sensor sensor, int accuracy) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void onSensorChanged(SensorEvent event) {
		if (event.sensor == proximitySensor){
			if(playing == true ){
				player.pause();
				playing = false;
				Log.i("Playing = False", " Will pause video via sensor.");
			} else if (playing == false){
				player.play();
				playing = true;
				Log.i("Playing = True", " Will start video via sensor.");
			} else {
				Log.i("Playing = Null", " Will not fire sensor yet.");
			}
		}
	}
}
