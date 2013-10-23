var x=document.getElementById("text");

function showGeolocation(position){

    $('<div/>').attr('id','mapcanvas').attr('style', 'height:250px;').addClass('map-canvas').appendTo('#mapArea');


    var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var myOptions = {
        zoom: 15,
        center: latlng,
        mapTypeControl: false,
        navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);

    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        title:"We are watching you! (almost.  You are actually located somewhere within "+position.coords.accuracy+" meter radius)"
    });

}

function errors(error){

    $('<div/>').attr('id', 'x').appendTo('#content');
    switch(error.code){

        case error.PERMISSION_DENIED:
            $('#x').html("User decided to not share their location.");
            break;
        case error.POSITION_UNAVAILABLE:
            $('#x').html("Location information is inaccessible.");
            break;
        case error.TIMEOUT:
            $('#x').html("Attempt to grab location information failed due to timeout.");
            break;
        case error.UNKNOWN_ERROR:
            $('#x').html("An unknown error occurred.");
            break;
    }
}

function getGeolocation(){

    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(showGeolocation,errors);
    }
    else{x.innerHTML="Geolocation is not supported by this browser.";}

}

$("#getGeolocationButton").on('click',function(){
    console.log("I am loading?");
    getGeolocation();
});