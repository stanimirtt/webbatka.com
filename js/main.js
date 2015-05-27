var vid = document.getElementById("bgvid"),
    pauseButton = document.getElementById("vidpause"),
    boxerButton = document.getElementById("vidboxer"),
    showboarderButton = document.getElementById("vidshowboarder");

function vidFade() {
    vid.classList.add("stopfade");
}

function changeVid(videoElement, src) {
    var sources = videoElement.getElementsByTagName('source');

    videoElement.attributes.poster = "posters/" + src + ".jpg";

    sources[0].src = "videos/" + src + ".mp4";
    loader.style.width = "50%";
    loader.style.display = "block";
    videoElement.load();

    toggleVideo();
    vid.classList.remove("stopfade");
}

function toggleVideo() {
    vid.classList.toggle("stopfade");
    
    if (vid.paused) {
        vid.play();
        pauseButton.className = "fa fa-pause";
    } else {
        vid.pause();
        pauseButton.className = "fa fa-play";
    }
}

vid.addEventListener("loadeddata", function() {
    var loader = document.getElementById("loader");
    setTimeout(function () {
        loader.style.width = "100%";
        setTimeout(function () {
            loader.style.display = "none";
        }, 1000);
    }, 1000);
}, false);

vid.addEventListener('ended', function() {
    // only functional if "loop" is removed
    vid.pause();
    // to capture IE10
    vidFade();
});

pauseButton.addEventListener("click", function() {
    toggleVideo();
    return false;
});

boxerButton.addEventListener("click", function() {
    changeVid(vid, "boxing");

    return false;
});

showboarderButton.addEventListener("click", function() {
    changeVid(vid, "snowboarding");

    return false;
});