// Loading Screen
$(window).on('load', function () {
    var counter = 0;
    var c = 0;
    var i = setInterval(function () {

        $("#loading-page .counter h1").html(c + "%");
        counter++;
        c++;
        if (counter == 101) {
            clearInterval(i);
            $("#loading-page").animate({ 'opacity': '0' }, 1000, function () {
                $(this).css({ 'display': 'none' });
            });
        }
    }, 50);
});


// 

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('#header').addClass('newClass');
    } else {
        $('#header').removeClass('newClass');
    }
});
