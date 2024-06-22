function showNavigator() {
    alert("appName: " + navigator.appName + "\nproduct: " + navigator.product + "\nappVersion: " + navigator.appVersion + "\nuserAgent: " + navigator.userAgent + "\nplatform: " + navigator.platform + "\nlanguage: " + navigator.language);
}

function showWindow() {
    alert("innerHeight: " + window.innerHeight + "\ninnerWidth: " + window.innerWidth);
}

function showScreen() {
    alert("width: " + screen.width + "\nheight: " + screen.height + "\navailWidth: " + screen.availWidth + "\navailHeight: " + screen.availHeight + "\ncolorDepth: " + screen.colorDepth + "\npixelDepth: " + screen.pixelDepth);
}

function showLocation() {
    alert("href: " + location.href + "\nhostname: " + location.hostname + "\npathname: " + location.pathname + "\nprotocol: " + location.protocol);
}

function showGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            alert("Latitude: " + position.coords.latitude + "\nLongitude: " + position.coords.longitude);
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}
