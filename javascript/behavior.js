function playStop(event) {
    var gif_url = $(this).attr("href");
    var png_url = "images/gifcast_off.png";
    var image = $(this).find("img");

    if ($(this).data("playing") === 1) {
        image.attr("src", png_url).load();
        $(this).data("playing", 0);
    } else {
        image.attr("src", gif_url).load();
        $(this).data("playing", 1);
    }

    event.preventDefault();
}
function enterLeave(event) {
    var image = $(this).find("img");

    if ($(this).data("playing") === 0) {
        if (event.type === "mouseenter") {
            image.attr("src", "images/gifcast_on.png").load();
        } else {
            image.attr("src", "images/gifcast_off.png").load();
        }
    }

    event.preventDefault();
}

$(document).ready(function() {
    $("body a.image").data("playing", 0).hover(enterLeave).click(playStop);
});
