
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
    $.get("https://raw.githubusercontent.com/extra-a/sauer-sdl2-bins/master/VERSION").then(function(data) {
        $("#version").html($(data.results[0], "p").text());
    });
});
