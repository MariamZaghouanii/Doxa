$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    $('.section-one').css({
        filter: "blur(" + (scroll/60) + "px)"
    })
})

$("button").click(function() {
    $('html,body').animate({
        scrollTop: $(".second-section").offset().top},
        'slow');
});