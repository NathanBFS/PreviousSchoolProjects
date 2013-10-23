var takeAndroidPhoto = function (imageData) {
    var image = $('#myAndroidImage');
    image.attr("src", "data:image/jpeg;base64," + imageData);
    image.height('50%');
    image.width('60%');
    image.css("display","block");
    image.css("margin-left","auto");
    image.css("margin-right","auto");
};
var failedTakeAttempt = function (message) {
    alert('Failed because: ' + message);
};

$('#takeAndroidPicture').bind("click", function(){
    navigator.camera.getPicture(takeAndroidPhoto, failedTakeAttempt, { quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        saveToPhotoAlbum: true
    });
});

var takeiOSPhoto = function (imageData) {
    var image = $('#myiOSImage');
    image.attr("src", "data:image/jpeg;base64," + imageData);
    image.height('50%');
    image.width('60%');
    image.css("display","block");
    image.css("margin-left","auto");
    image.css("margin-right","auto");
};
var failedTakeAttempt = function (message) {
    alert('Failed because: ' + message);
};

$('#takeiOSPicture').bind("click", function(){
    navigator.camera.getPicture(takeiOSPhoto, failedTakeAttempt, { quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        saveToPhotoAlbum: true
    });
});