/* AUTO-GENERATED FILE.  DO NOT MODIFY.
 *
 * This class was automatically generated by the
 * aapt tool from the resource data it found.  It
 * should not be modified by hand.
 */

package com.nathanbuth698.filterallthethings;

public final class R {
    public static final class attr {
        /** <p>Must be a reference to another resource, in the form "<code>@[+][<i>package</i>:]<i>type</i>:<i>name</i></code>"
or to a theme attribute in the form "<code>?[<i>package</i>:][<i>type</i>:]<i>name</i></code>".
         */
        public static final int buttonBarButtonStyle=0x7f010001;
        /** <p>Must be a reference to another resource, in the form "<code>@[+][<i>package</i>:]<i>type</i>:<i>name</i></code>"
or to a theme attribute in the form "<code>?[<i>package</i>:][<i>type</i>:]<i>name</i></code>".
         */
        public static final int buttonBarStyle=0x7f010000;
    }
    public static final class color {
        public static final int black_overlay=0x7f050000;
    }
    public static final class drawable {
        public static final int ic_launcher=0x7f020000;
        public static final int test=0x7f020001;
    }
    public static final class id {
        public static final int blur=0x7f080019;
        public static final int button_change_to_block=0x7f080010;
        public static final int button_change_to_gray=0x7f080008;
        public static final int button_change_to_hdr=0x7f080015;
        public static final int button_change_to_invert=0x7f08000e;
        public static final int button_change_to_light=0x7f080013;
        public static final int button_change_to_lomo=0x7f080014;
        public static final int button_change_to_neon=0x7f08000c;
        public static final int button_change_to_oid=0x7f08000b;
        public static final int button_change_to_old=0x7f080011;
        public static final int button_change_to_pixelate=0x7f08000d;
        public static final int button_change_to_relief=0x7f080009;
        public static final int button_change_to_sharpen=0x7f080012;
        public static final int button_change_to_source=0x7f080016;
        public static final int button_change_to_tv=0x7f08000f;
        public static final int button_change_to_vague=0x7f08000a;
        public static final int chosenImage=0x7f080003;
        public static final int engraving=0x7f08001f;
        public static final int fullscreen_content=0x7f080000;
        public static final int fullscreen_content_controls=0x7f080004;
        public static final int gaussian=0x7f080025;
        public static final int glow=0x7f080026;
        public static final int gray=0x7f080017;
        public static final int hdr=0x7f080024;
        public static final int image=0x7f080007;
        public static final int invert=0x7f08001e;
        public static final int light=0x7f080022;
        public static final int lomo=0x7f080023;
        public static final int neon=0x7f08001b;
        public static final int noImage=0x7f080001;
        public static final int oil=0x7f08001a;
        public static final int old=0x7f080020;
        public static final int orientationLock=0x7f080005;
        public static final int pixelate=0x7f08001c;
        public static final int relief=0x7f080018;
        public static final int savePhoto=0x7f080006;
        public static final int selectFilter=0x7f080002;
        public static final int sharpen=0x7f080021;
        public static final int sketch=0x7f080027;
        public static final int tv=0x7f08001d;
    }
    public static final class layout {
        public static final int editactivity=0x7f030000;
        public static final int main=0x7f030001;
    }
    public static final class menu {
        public static final int filters=0x7f070000;
    }
    public static final class string {
        public static final int app_name=0x7f040001;
        public static final int dummy_content=0x7f040003;
        public static final int hello=0x7f040000;
        public static final int orientation=0x7f040002;
    }
    public static final class style {
        /** 
        Base application theme, dependent on API level. This theme is replaced
        by AppBaseTheme from res/values-vXX/styles.xml on newer devices.

    

            Theme customizations available in newer API levels can go in
            res/values-vXX/styles.xml, while customizations related to
            backward-compatibility can go here.

        

        Base application theme for API 11+. This theme completely replaces
        AppBaseTheme from res/values/styles.xml on API 11+ devices.

    
 API 11 theme customizations can go here. 

        Base application theme for API 14+. This theme completely replaces
        AppBaseTheme from BOTH res/values/styles.xml and
        res/values-v11/styles.xml on API 14+ devices.
    
 API 14 theme customizations can go here. 
         */
        public static final int AppBaseTheme=0x7f060000;
        /**  Application theme. 
 All customizations that are NOT specific to a particular API-level can go here. 
         */
        public static final int AppTheme=0x7f060001;
        public static final int ButtonBar=0x7f060003;
        public static final int ButtonBarButton=0x7f060004;
        public static final int FullscreenActionBarStyle=0x7f060005;
        public static final int FullscreenTheme=0x7f060002;
    }
    public static final class styleable {
        /** 
         Declare custom theme attributes that allow changing which styles are
         used for button bars depending on the API level.
         ?android:attr/buttonBarStyle is new as of API 11 so this is
         necessary to support previous API levels.
    
           <p>Includes the following attributes:</p>
           <table>
           <colgroup align="left" />
           <colgroup align="left" />
           <tr><th>Attribute</th><th>Description</th></tr>
           <tr><td><code>{@link #ButtonBarContainerTheme_buttonBarButtonStyle com.nathanbuth698.filterallthethings:buttonBarButtonStyle}</code></td><td></td></tr>
           <tr><td><code>{@link #ButtonBarContainerTheme_buttonBarStyle com.nathanbuth698.filterallthethings:buttonBarStyle}</code></td><td></td></tr>
           </table>
           @see #ButtonBarContainerTheme_buttonBarButtonStyle
           @see #ButtonBarContainerTheme_buttonBarStyle
         */
        public static final int[] ButtonBarContainerTheme = {
            0x7f010000, 0x7f010001
        };
        /**
          <p>This symbol is the offset where the {@link com.nathanbuth698.filterallthethings.R.attr#buttonBarButtonStyle}
          attribute's value can be found in the {@link #ButtonBarContainerTheme} array.


          <p>Must be a reference to another resource, in the form "<code>@[+][<i>package</i>:]<i>type</i>:<i>name</i></code>"
or to a theme attribute in the form "<code>?[<i>package</i>:][<i>type</i>:]<i>name</i></code>".
          @attr name android:buttonBarButtonStyle
        */
        public static final int ButtonBarContainerTheme_buttonBarButtonStyle = 1;
        /**
          <p>This symbol is the offset where the {@link com.nathanbuth698.filterallthethings.R.attr#buttonBarStyle}
          attribute's value can be found in the {@link #ButtonBarContainerTheme} array.


          <p>Must be a reference to another resource, in the form "<code>@[+][<i>package</i>:]<i>type</i>:<i>name</i></code>"
or to a theme attribute in the form "<code>?[<i>package</i>:][<i>type</i>:]<i>name</i></code>".
          @attr name android:buttonBarStyle
        */
        public static final int ButtonBarContainerTheme_buttonBarStyle = 0;
    };
}