// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});


// Now we need to run the code that will be executed only for About page.

myApp.onPageInit('ecotel-tv', function(page) {
    if (Hls.isSupported()) {
        var video = document.getElementById('video');
        var hls = new Hls();
        hls.loadSource('https://5b38ce71f1f00.streamlock.net:443/8344/8344/playlist.m3u8');
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function() {
            video.play();
        });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = 'https://5b38ce71f1f00.streamlock.net:443/8344/8344/playlist.m3u8';
        video.addEventListener('canplay', function() {
            video.play();
        });
    }
})

/*==================================================================
=            Identificar la orientación del dispositivo            =
==================================================================*/

window.addEventListener("orientationchange", function() {
    var stateOrientation = screen.orientation.type;
    var contenedorMenu = document.getElementById('menu-ecotel');

    if (stateOrientation == "landscape-primary") {
        contenedorMenu.style.display = "block";
    } else {
        contenedorMenu.style.display = "flex";
    }
});