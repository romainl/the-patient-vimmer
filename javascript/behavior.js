function playStop(event) {
    var gif_url    = $(this).attr("href");
    var png_url    = "images/gifcast_off.png";
    var this_image = $(this).find("img");

    if ($(this).data("playing") === 1) {
        this_image.attr("src", png_url).load();
        $(this).data("playing", 0);
    } else {
        this_image.attr("src", gif_url).load();
        $(this).data("playing", 1);
    }

    event.preventDefault();
}

function enterLeave(event) {
    var this_image = $(this).find("img");

    if ($(this).data("playing") === 0) {
        if (event.type === "mouseenter") {
            this_image.attr("src", "images/gifcast_on.png").load();
        } else {
            this_image.attr("src", "images/gifcast_off.png").load();
        }
    }

    event.preventDefault();
}

$(document).ready(function() {
    document.title = "The Patient Vimmer — " + $("h1").html();
    $("a.image").data("playing", 0).hover(enterLeave).click(playStop);
});
