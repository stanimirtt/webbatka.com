(function () { 
    var vid = document.getElementById("bgvid"),
    pauseButton = document.getElementById("vidpause"),
    boxerButton = document.getElementById("vidboxer"),
    snowboarderButton = document.getElementById("vidsnowboarder"),
    coderButton = document.getElementById("vidcoder");

    function vidFade() {
        vid.classList.add("stopfade");
    }

    function changeVid(videoElement, src) {
        var sources = videoElement.getElementsByTagName('source');

        videoElement.poster = "posters/" + src + ".jpg";

        if (sources.length) {
            // I love JavaScript! :)))
            sources[0].src = "videos/" + src + ".mp4";
            sources[1].src = "videos/" + src + ".webm";
            sources[2].src = "videos/" + src + ".ogv";

            loader.style.width = "50%";
            loader.style.display = "block";
            videoElement.load();

            toggleVideo();
            vid.classList.remove("stopfade");
        }
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
                if (vid.paused) {
                    vidFade();
                    pauseButton.className = "fa fa-play";
                }
            }, 1000);
        }, 1000);
    }, false);

    vid.addEventListener('ended', function() {
        // only functional if "loop" is removed
        vid.pause();
        // to capture IE10
        vidFade();
    });

    pauseButton.addEventListener("click", function(ev) {
        ev.preventDefault();

        toggleVideo();
        
        return false;
    });

    boxerButton.addEventListener("click", function(ev) {
        ev.preventDefault();

        changeVid(vid, "boxing");

        return false;
    });

    snowboarderButton.addEventListener("click", function(ev) {
        ev.preventDefault();

        changeVid(vid, "snowboarding");

        return false;
    });

    coderButton.addEventListener("click", function(ev) {
        ev.preventDefault();

        changeVid(vid, "coding");

        return false;
    });
}());