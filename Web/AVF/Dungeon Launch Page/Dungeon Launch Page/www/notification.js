function onDeviceReady() {

    alert("Cordova is ready!");

}

function alertNotification() {
    if (!navigator.notification) {
        alert('Notifications meant for mobile devices.  Come back and click on a phone or tablet.');
    } else {
        navigator.notification.alert(
            'Somebody set us up the bomb!',
            alertNotificationDismissed,
            'Main screen turn on',
            'All your base are belong to us!'
        );
    }
}
function alertNotificationDismissed() {

}

// process the confirmation dialog result
function onConfirm(button) {
}

// Show a custom confirmation dialog
function confirmNotification() {
    if (!navigator.notification) {
        alert('Notifications meant for mobile devices.  Come back and click on a phone or tablet.');
    } else {
        navigator.notification.confirm(
            'You have no chance to survive make your time',
            onConfirm,
            'Move ZIG',
            'AYBABTU,For great justice!'
        );
    }
}

function beepNotification() {
    if (!navigator.notification) {
        alert('Notifications meant for mobile devices.  Come back and click on a phone or tablet.');
    } else {
        navigator.notification.beep(3);
    }
}

function vibrateNotification() {
    if (!navigator.notification) {
        alert('Notifications meant for mobile devices.  Come back and click on a phone or tablet.');
    } else {
        navigator.notification.vibrate(2000);
    }
}

document.addEventListener("deviceready", onDeviceReady, false);

$("#alertNotificationButton").on('click', function() {
    alertNotification();
});

$("#confirmNotificationButton").on('click', function() {
    confirmNotification();
});

$("#beepNotificationButton").on('click', function() {
    beepNotification();
});

$("#vibrateNotificationButton").on('click', function() {
    vibrateNotification();
});