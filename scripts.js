
function versioncmp (a, b) {
    var pa = a.name.split('.');
    var pb = b.name.split('.');
    for (var i = 0; i < 3; i++) {
        var na = Number(pa[i]);
        var nb = Number(pb[i]);
        if (na > nb) return 1;
        if (nb > na) return -1;
        if (!isNaN(na) && isNaN(nb)) return 1;
        if (isNaN(na) && !isNaN(nb)) return -1;
    }
    return 0;
};

jQuery(document).ready(function ($) {
    var options = { $AutoPlay: true ,
                    $BulletNavigatorOptions: {
                        $Class: $JssorBulletNavigator$,
                        $ChanceToShow: 2,
                        $AutoCenter: 1
                    },
                    $CaptionSliderOptions: {
                        $Class: $JssorCaptionSlider$,
                        $CaptionTransitions: []
                    }
                  };
    var jssor_slider1 = new $JssorSlider$('slider1_container', options);
    var offset = 200;
    var duration = 250;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.scroll_beg').fadeIn(duration);
        } else {
            jQuery('.scroll_beg').fadeOut(duration);
        }
    });
    jQuery('.scroll_beg').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
    jQuery('.scroll_beg').hide();
    // $.get("https://api.github.com/repos/extra-a/sauer-sdl2-bins/tags").then(function(data) {
    //    data.sort(versioncmp);
    //    var v = data[data.length-1].name
    //    var l = data[data.length-1].zipball_url
    //    $("#version").text("version: " + v);
    //    $("#download-button").attr('href', l);
    // });
});
