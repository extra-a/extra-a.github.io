
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
    $.get("https://api.github.com/repos/extra-a/sauer-sdl2-bins/tags").then(function(data) {
        $("#version").text("version: " + data[0].name);
    });
});
