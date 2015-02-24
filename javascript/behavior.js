function toggleGif(event) {
    var gif_url = $(this).attr("href");
    var png_url = "images/gifcast_off.png";
    var image = $(this).find("img");

    if (image.attr("src") === gif_url) {
        image.attr("src", png_url).load();
    } else if (image.attr("src") === png_url) {
        image.attr("src", gif_url).load();
    }

    event.preventDefault();
}

$(document).ready(function() {
    $("body").on("click", "a.image", toggleGif);
});
