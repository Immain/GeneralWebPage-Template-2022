/* Animation for Navigation Menu */
$(document).ready(function () {
    $("ul.nav li a[href^='#']").click(function () {
        $("html, body").stop().animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 400);
    });
});

/* Other Javascript */