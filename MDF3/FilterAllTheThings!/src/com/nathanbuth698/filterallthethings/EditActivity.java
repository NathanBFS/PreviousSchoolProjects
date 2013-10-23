package com.nathanbuth698.filterallthethings;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

import cn.Ragnarok.BitmapFilter;

import com.nathanbuth698.filterallthethings.util.SystemUiHider;

import android.annotation.TargetApi;
import android.app.Activity;
import android.content.Intent;
import android.content.pm.ActivityInfo;
import android.graphics.Bitmap;
import android.graphics.Bitmap.CompressFormat;
import android.graphics.drawable.BitmapDrawable;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.provider.MediaStore;
import android.provider.MediaStore.Images;
import android.util.Log;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.MotionEvent;
import android.view.View;
import android.view.View.MeasureSpec;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

public class EditActivity extends Activity {
	private static final boolean AUTO_HIDE = true;

	private static final int AUTO_HIDE_DELAY_MILLIS = 3000;

	private static final boolean TOGGLE_ON_CLICK = true;

	private static final int HIDER_FLAGS = SystemUiHider.FLAG_HIDE_NAVIGATION;

	private SystemUiHider mSystemUiHider;

	Boolean locked = true;
	Uri imageUri;
	Boolean value;
	final int PIC_CROP = 2;
	ImageView currentImage;
	Bitmap preFilter;
	Bitmap withFilter;
	
	 void handleImage(Intent intent) {
	        imageUri = intent.getParcelableExtra(Intent.EXTRA_STREAM);
	        if (imageUri != null) {
	            Log.i("IMAGEURI", String.valueOf(imageUri));

	            currentImage = (ImageView) findViewById(R.id.chosenImage);
	            currentImage.setImageURI(imageUri);
	            				
	    }
	 }

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		
		//lock orientation to portrait
		this.setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE);
		
		setContentView(R.layout.editactivity);

		 Intent intent = getIntent();
	        String action = intent.getAction();
	        String type = intent.getType();

	        if (Intent.ACTION_SEND.equals(action) && type != null) {
	            if (type.startsWith("image/")) {
	                handleImage(intent);
	                
	                Log.i("Success: ", "Line 62.  Image data found.");
	                
	                TextView noImageText = (TextView) findViewById(R.id.noImage);
	                noImageText.setVisibility(View.GONE);
	                
	                TextView filterText = (TextView) findViewById(R.id.selectFilter);
	                filterText.setVisibility(View.VISIBLE);
	                
	                currentImage = (ImageView) findViewById(R.id.chosenImage);
	                preFilter = ((BitmapDrawable)currentImage.getDrawable()).getBitmap();

	            } else {
	            	Log.i("Error: ", "Line 70.  No image data found.");
	            	
	            	TextView noImageText = (TextView) findViewById(R.id.noImage);
	                noImageText.setVisibility(View.VISIBLE);
	                
	                TextView filterText = (TextView) findViewById(R.id.selectFilter);
	                filterText.setVisibility(View.GONE);
	        
	            }
	        }
		
		final View controlsView = findViewById(R.id.fullscreen_content_controls);
		final View contentView = findViewById(R.id.fullscreen_content);

		mSystemUiHider = SystemUiHider.getInstance(this, contentView,
				HIDER_FLAGS);
		mSystemUiHider.setup();
		mSystemUiHider
				.setOnVisibilityChangeListener(new SystemUiHider.OnVisibilityChangeListener() {
					int mControlsHeight;
					int mShortAnimTime;

					@Override
					@TargetApi(Build.VERSION_CODES.HONEYCOMB_MR2)
					public void onVisibilityChange(boolean visible) {
						if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.HONEYCOMB_MR2) {

							if (mControlsHeight == 0) {
								mControlsHeight = controlsView.getHeight();
							}
							if (mShortAnimTime == 0) {
								mShortAnimTime = getResources().getInteger(
										android.R.integer.config_shortAnimTime);
							}
							controlsView
									.animate()
									.translationY(visible ? 0 : mControlsHeight)
									.setDuration(mShortAnimTime);
						} else {

							controlsView.setVisibility(visible ? View.VISIBLE
									: View.GONE);
						}

						if (visible && AUTO_HIDE) {
							delayedHide(AUTO_HIDE_DELAY_MILLIS);
						}
					}
				});

		contentView.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View view) {
				if (TOGGLE_ON_CLICK) {
					mSystemUiHider.toggle();
				} else {
					mSystemUiHider.show();
				}
			}
		});
		
		findViewById(R.id.orientationLock).setOnTouchListener(
				mDelayHideTouchListener);
	
		Button lockOrientation = (Button) findViewById(R.id.orientationLock);
		
		lockOrientation.setOnClickListener(new View.OnClickListener() {
			
			@Override
			public void onClick(View v) {
				if(locked == true){
					unlock();
					
					Button lockOrientation = (Button) findViewById(R.id.orientationLock);
					lockOrientation.setText("Lock");
				} else if (locked == false) {
					relock();
					
					Button lockOrientation = (Button) findViewById(R.id.orientationLock);
					lockOrientation.setText("Unlock");
				}
			}
		});
		
		Button saveImage = (Button) findViewById(R.id.savePhoto);
				
		saveImage.setOnClickListener(new View.OnClickListener() {
					
			@Override
			public void onClick(View v) {
				//saves image to somewhere on the device.  It is not accessible through the gallery but it is there.
				MediaStore.Images.Media.insertImage(getContentResolver(), withFilter, "After Edits", "Filter Applied");

				/*try{
					File file;
					FileOutputStream ostream = new FileOutputStream(file);
		            withFilter.compress(CompressFormat.JPEG, 90, ostream);
		            ostream.flush();
		            ostream.close();
		            String url = Images.Media.insertImage(getContentResolver(), withFilter, "filteredImage", null);
				} catch(IOException e){
					
				}*/
			}
		});
	}

	@Override
	protected void onPostCreate(Bundle savedInstanceState) {
		super.onPostCreate(savedInstanceState);

		delayedHide(100);
	}

	View.OnTouchListener mDelayHideTouchListener = new View.OnTouchListener() {
		@Override
		public boolean onTouch(View view, MotionEvent motionEvent) {
			if (AUTO_HIDE) {
				delayedHide(AUTO_HIDE_DELAY_MILLIS);
			}
			return false;
		}
	};

	Handler mHideHandler = new Handler();
	Runnable mHideRunnable = new Runnable() {
		@Override
		public void run() {
			mSystemUiHider.hide();
		}
	};

	private void delayedHide(int delayMillis) {
		mHideHandler.removeCallbacks(mHideRunnable);
		mHideHandler.postDelayed(mHideRunnable, delayMillis);
	}
	
	private void unlock(){
		this.setRequestedOrientation( ActivityInfo.SCREEN_ORIENTATION_UNSPECIFIED);
		locked = false;
	}
	
	private void relock(){
		this.setRequestedOrientation( ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE);
		locked = true;
	}
	
	@Override
	  public boolean onCreateOptionsMenu(Menu menu) {
	    MenuInflater inflater = getMenuInflater();
	    inflater.inflate(R.menu.filters, menu);
	    return true;
	  }
	
	@Override
	  public boolean onOptionsItemSelected(MenuItem item) {
	    switch (item.getItemId()) {
	    case R.id.gray:
		      try{			    	
			        withFilter = BitmapFilter.changeStyle(preFilter, BitmapFilter.GRAY_STYLE);
			        Toast.makeText(this, "Your filter is being applied.  Please wait for it to load.", Toast.LENGTH_SHORT)
			          .show();
			        currentImage.setImageBitmap(withFilter);
			    } catch(OutOfMemoryError E) {
			    	Toast.makeText(this, "Your image needs to be smaller for this to work.  Please crop it and then come back.", Toast.LENGTH_SHORT)
			          .show();
			    }
		        break;
	    case R.id.relief:
		      try{			    	
			        withFilter = BitmapFilter.changeStyle(preFilter, BitmapFilter.RELIEF_STYLE);
			        Toast.makeText(this, "Your filter is being applied.  Please wait for it to load.", Toast.LENGTH_SHORT)
			          .show();
			        currentImage.setImageBitmap(withFilter);
			    } catch(OutOfMemoryError E) {
			    	Toast.makeText(this, "Your image needs to be smaller for this to work.  Please crop it and then come back.", Toast.LENGTH_SHORT)
			          .show();
			    }
		        break;
	    case R.id.blur:
		      try{			    	
			        withFilter = BitmapFilter.changeStyle(preFilter, BitmapFilter.BLUR_STYLE);
			        Toast.makeText(this, "Your filter is being applied.  Please wait for it to load.", Toast.LENGTH_SHORT)
			          .show();
			        currentImage.setImageBitmap(withFilter);
			    } catch(OutOfMemoryError E) {
			    	Toast.makeText(this, "Your image needs to be smaller for this to work.  Please crop it and then come back.", Toast.LENGTH_SHORT)
			          .show();
			    }
		        break;
	    case R.id.oil:
		      try{			    	
			        withFilter = BitmapFilter.changeStyle(preFilter, BitmapFilter.OIL_STYLE);
			        Toast.makeText(this, "Your filter is being applied.  Please wait for it to load.", Toast.LENGTH_SHORT)
			          .show();
			        currentImage.setImageBitmap(withFilter);
			    } catch(OutOfMemoryError E) {
			    	Toast.makeText(this, "Your image needs to be smaller for this to work.  Please crop it and then come back.", Toast.LENGTH_SHORT)
			          .show();
			    }
		        break;
	    case R.id.neon:
		      try{			    	
			        withFilter = BitmapFilter.changeStyle(preFilter, BitmapFilter.NEON_STYLE);
			        Toast.makeText(this, "Your filter is being applied.  Please wait for it to load.", Toast.LENGTH_SHORT)
			          .show();
			        currentImage.setImageBitmap(withFilter);
			    } catch(OutOfMemoryError E) {
			    	Toast.makeText(this, "Your image needs to be smaller for this to work.  Please crop it and then come back.", Toast.LENGTH_SHORT)
			          .show();
			    }
		        break;
	    case R.id.pixelate:
		    try{
		        withFilter = BitmapFilter.changeStyle(preFilter, BitmapFilter.PIXELATE_STYLE);
		        Toast.makeText(this, "Your filter is being applied.  Please wait for it to load.", Toast.LENGTH_SHORT)
	            .show();
	        currentImage.setImageBitmap(withFilter);
		    } catch(OutOfMemoryError E) {
		    	Toast.makeText(this, "Your image needs to be smaller for this to work.  Please crop it and then come back.", Toast.LENGTH_SHORT)
		        .show();
		    }
	      break;
	    case R.id.tv:
		      try{			    	
			        withFilter = BitmapFilter.changeStyle(preFilter, BitmapFilter.TV_STYLE);
			        Toast.makeText(this, "Your filter is being applied.  Please wait for it to load.", Toast.LENGTH_SHORT)
			          .show();
			        currentImage.setImageBitmap(withFilter);
			    } catch(OutOfMemoryError E) {
			    	Toast.makeText(this, "Your image needs to be smaller for this to work.  Please crop it and then come back.", Toast.LENGTH_SHORT)
			          .show();
			    }
		        break;
	    case R.id.invert:
		    try{		    	
		        withFilter = BitmapFilter.changeStyle(preFilter, BitmapFilter.INVERT_STYLE);
		        Toast.makeText(this, "Your filter is being applied.  Please wait for it to load.", Toast.LENGTH_SHORT)
		        .show();
		        currentImage.setImageBitmap(withFilter);
		    } catch(OutOfMemoryError E) {
		    	Toast.makeText(this, "Your image needs to be smaller for this to work.  Please crop it and then come back.", Toast.LENGTH_SHORT)
		        .show();
		    }
	        break;
	    case R.id.engraving:
		      try{			    	
			        withFilter = BitmapFilter.changeStyle(preFilter, BitmapFilter.BLOCK_STYLE);
			        Toast.makeText(this, "Your filter is being applied.  Please wait for it to load.", Toast.LENGTH_SHORT)
			          .show();
			        currentImage.setImageBitmap(withFilter);
			    } catch(OutOfMemoryError E) {
			    	Toast.makeText(this, "Your image needs to be smaller for this to work.  Please crop it and then come back.", Toast.LENGTH_SHORT)
			          .show();
			    }
		        break;
	    case R.id.old:
		      try{			    	
			        withFilter = BitmapFilter.changeStyle(preFilter, BitmapFilter.OLD_STYLE);
			        Toast.makeText(this, "Your filter is being applied.  Please wait for it to load.", Toast.LENGTH_SHORT)
			          .show();
			        currentImage.setImageBitmap(withFilter);
			    } catch(OutOfMemoryError E) {
			    	Toast.makeText(this, "Your image needs to be smaller for this to work.  Please crop it and then come back.", Toast.LENGTH_SHORT)
			          .show();
			    }
		        break;
	    case R.id.sharpen:
		      try{			    	
			        withFilter = BitmapFilter.changeStyle(preFilter, BitmapFilter.SHARPEN_STYLE);
			        Toast.makeText(this, "Your filter is being applied.  Please wait for it to load.", Toast.LENGTH_SHORT)
			          .show();
			        currentImage.setImageBitmap(withFilter);
			    } catch(OutOfMemoryError E) {
			    	Toast.makeText(this, "Your image needs to be smaller for this to work.  Please crop it and then come back.", Toast.LENGTH_SHORT)
			          .show();
			    }
		        break;
	    case R.id.light:
		      try{			    	
			        withFilter = BitmapFilter.changeStyle(preFilter, BitmapFilter.LIGHT_STYLE);
			        Toast.makeText(this, "Your filter is being applied.  Please wait for it to load.", Toast.LENGTH_SHORT)
			          .show();
			        currentImage.setImageBitmap(withFilter);
			    } catch(OutOfMemoryError E) {
			    	Toast.makeText(this, "Your image needs to be smaller for this to work.  Please crop it and then come back.", Toast.LENGTH_SHORT)
			          .show();
			    }
		        break;
	    case R.id.lomo:
		      try{			    	
			        withFilter = BitmapFilter.changeStyle(preFilter, BitmapFilter.LOMO_STYLE);
			        Toast.makeText(this, "Your filter is being applied.  Please wait for it to load.", Toast.LENGTH_SHORT)
			          .show();
			        currentImage.setImageBitmap(withFilter);
			    } catch(OutOfMemoryError E) {
			    	Toast.makeText(this, "Your image needs to be smaller for this to work.  Please crop it and then come back.", Toast.LENGTH_SHORT)
			          .show();
			    }
		        break;
	    case R.id.hdr:
		    try{
			    withFilter = BitmapFilter.changeStyle(preFilter, BitmapFilter.HDR_STYLE);
			    Toast.makeText(this, "Your filter is being applied.  Please wait for it to load.", Toast.LENGTH_SHORT)
			    .show();
			    currentImage.setImageBitmap(withFilter);
			} catch(OutOfMemoryError E) {
				Toast.makeText(this, "Your image needs to be smaller for this to work.  Please crop it and then come back.", Toast.LENGTH_SHORT)
			    .show();
	        }
		    break;
	    case R.id.gaussian:
		      try{			    	
			        withFilter = BitmapFilter.changeStyle(preFilter, BitmapFilter.GAUSSIAN_BLUR_STYLE);
			        Toast.makeText(this, "Your filter is being applied.  Please wait for it to load.", Toast.LENGTH_SHORT)
			          .show();
			        currentImage.setImageBitmap(withFilter);
			    } catch(OutOfMemoryError E) {
			    	Toast.makeText(this, "Your image needs to be smaller for this to work.  Please crop it and then come back.", Toast.LENGTH_SHORT)
			          .show();
			    }
		        break;
	    case R.id.glow:
		      try{			    	
			        withFilter = BitmapFilter.changeStyle(preFilter, BitmapFilter.SOFT_GLOW_STYLE);
			        Toast.makeText(this, "Your filter is being applied.  Please wait for it to load.", Toast.LENGTH_SHORT)
			          .show();
			        currentImage.setImageBitmap(withFilter);
			    } catch(OutOfMemoryError E) {
			    	Toast.makeText(this, "Your image needs to be smaller for this to work.  Please crop it and then come back.", Toast.LENGTH_SHORT)
			          .show();
			    }
		        break;
	    case R.id.sketch:
		    try{
		        withFilter = BitmapFilter.changeStyle(preFilter, BitmapFilter.SKETCH_STYLE);
			    Toast.makeText(this, "Your filter is being applied.  Please wait for it to load.", Toast.LENGTH_SHORT)
		        .show();
	     	    currentImage.setImageBitmap(withFilter);
		    } catch(OutOfMemoryError E) {
			    Toast.makeText(this, "Your image needs to be smaller for this to work.  Please crop it and then come back.", Toast.LENGTH_SHORT)
			    .show();
		    }
		    break;
	    default:
	      break;
	    }

	    return true;
	  }
}
