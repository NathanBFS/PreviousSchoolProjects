package com.nathanbuth.minimaldegrees;

import com.nathanbuth.minimaldegrees.R;

import android.app.Activity;
import android.app.Fragment;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.ListView;

public class FormFragment extends Fragment {
	
	private formListener listener;

    public interface formListener {
        public void getWeather();
        public void daySelected(Integer i);
    }
    
    @Override
    public void onAttach(Activity activity) {
        super.onAttach(activity);

        try {
            listener = (formListener) activity;
        } catch (ClassCastException e) {
            throw new ClassCastException(activity.toString() + "Attempt to attach MainActivity failed.  FormFragment.java, Line 28");
        }
    }
    
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        //Allows items to work in ActionBar
        setHasOptionsMenu(true);
    }
    
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        super.onCreateView(inflater, container, savedInstanceState);

        LinearLayout view = (LinearLayout)inflater.inflate(R.layout.mainpage, container, false);

        Button searchButton = (Button) view.findViewById(com.nathanbuth.minimaldegrees.R.id.submitSearchButton);

        searchButton.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View view) {
                listener.getWeather();
            }
        });

        // Attach list adapter
        ListView listView = (ListView) view.findViewById(R.id.weatherList);


        // OnItemClickListener
        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
                listener.daySelected(i);
            }
        });

        return view;
    }


    @Override
    public void onCreateOptionsMenu(Menu menu, MenuInflater inflater) {
        inflater.inflate(R.menu.main, menu);

    }

}
