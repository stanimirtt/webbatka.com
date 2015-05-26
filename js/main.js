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

function loaded()
{
    var r = vid.buffered;
    var total = vid.duration;

    var start = r.start(0);
    var end = r.end(0);

   console.log((end/total)*100);      
}   

vid.addEventListener('progress', function() {
    loaded();
});

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