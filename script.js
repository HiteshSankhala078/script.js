// js start code
$(document).ready(function() {

});

// number count 
var flag = 1;
var pos = $(".section--pricing").offset().top + 200;
$(window).scroll(function() {
    var windowpos = $(window).scrollTop();
    // console.log(windowpos + '--' + pos) -scroll height count
    if (windowpos >= pos) {
        if (flag == 1) {
            $('.count').each(function() {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 5000,
                    easing: 'swing',
                    step: function(now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
            flag++;
        }
    }
});

// scroll animation 
$(window).scroll(function() {
    var PosintionTop = $(document).scrollTop();
    console.log(PosintionTop);

    if ((PosintionTop > 1100) && (PosintionTop < 1400)) {
        $('.card-1').addClass('animated slideInLeft');
        $('.card-2').addClass('animated slideInDown');
        $('.card-3').addClass('animated slideInRight');
    };

});