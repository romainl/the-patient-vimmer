function playStop(event) {
    var gif_url = this.href;
    var png_url = "images/gifcast_off.png";
    var images  = document.getElementsByClassName("playing");

    for (var i = 0, len = images.length; i < len; i++) {
        images[i].firstChild.src = png_url;
        images[i].className = "image";
    }

    if (this.className === "image playing") {
        this.firstChild.src = png_url;
        this.className = "image";
    } else {
        this.firstChild.src = gif_url;
        this.className = "image playing";
    }

    event.preventDefault();
}

function overOut(event) {
    if (this.className !== "image playing") {
        if (event.type === "mouseover") {
            this.firstChild.src = "images/gifcast_on.png";
        } else {
            this.firstChild.src = "images/gifcast_off.png";
        }
    }

    event.preventDefault();
}

function openClose(event) {
    var nav = document.getElementById("front");

    if (nav.className !== "open") {
        nav.className = "open";
    } else {
        nav.className = "";
    }

    event.preventDefault();
}

window.addEventListener('load', function() {
    document.title = "The Patient Vimmer — " + document.getElementsByTagName("h1")[0].innerHTML;

    try {
        document.getElementById("open-close").addEventListener('click', openClose, false);
    }
    catch(e) {}

    var images = document.getElementsByClassName("image");
    for (var i = 0, len = images.length; i < len; i++) {
        if (images[i].className === "image") {
            images[i].addEventListener('mouseover', overOut, false);
            images[i].addEventListener('mouseout', overOut, false);
            images[i].addEventListener('click', playStop, false);
        }
    }
}, false);
