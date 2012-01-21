function translate_status(status) {
    return status ? "yes" : "no";
}

function checkVideo() {
    if (!!document.createElement('video').canPlayType) {
	var v_test, ogg_playable, webm_playable, h264_playable;
	var msg_preamble;
	var msg_postamble;

	v_test = document.createElement("video");

	ogg_playable = v_test.canPlayType('video/ogg; codecs="theora, vorbis"');
	h264_playable = v_test.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
	webm_playable = v_test.canPlayType('video/webm; codecs="vp8, vorbis"');

	msg_preamble = "<p>Here is your video support result: <ul> ";
	msg_postamble = "<input type='button' value='Reload Page' onclick='window.location.reload()'>";

	document.getElementById("checkVideoResult").innerHTML =
	    msg_preamble +
	    "<li>Ogg (Theora/Vorbis)= " + translate_status(ogg_playable) + ".</li> " +
	    "<li>H.264 (AVC/AAC)= " + translate_status(h264_playable) + ".</li> " +
	    "<li>WebM (VP8/Vorbis)= " + translate_status(webm_playable) + ".</li> " +
	    "</ul> </p>" +
	    msg_postamble;
    } else {
	var msg_sorry = "<p>Sorry. No video support at all.</p>" + msg_postamble;
	document.getElementById("checkVideoResult").innerHTML = msg_sorry;
    }
}


function getLocation() {
    var x = document.getElementById("geoloc");
    var msg_postamble = "<input type='button' value='Reload Page' onclick='window.location.reload()'>";

    function showPosition(position) {
	x.innerHTML =
	    "<p>Latitude: " +
	    position.coords.latitude +
	    "<br />Longitude: " + position.coords.longitude + "</p>" +
	    msg_postamble;
    }

    if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(showPosition);
    } else {
	x.innerHTML = "<p>Geolocation is not supported by this browser.</p>" +
            msg_postamble;
    }
}
