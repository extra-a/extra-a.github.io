$.get("https://raw.githubusercontent.com/extra-a/sauer-sdl2-bins/master/VERSION").then(function(data) {
    $("#version").html(data.results[0]);
});
