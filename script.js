/* Blur on scroll */

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    $('.section-one').css({
        filter: "blur(" + (scroll/100) + "px)"
    })
})

/* Scroll to activities */

$("button").click(function() {
    $('html,body').animate({
        scrollTop: $(".second-section").offset().top},
        'slow');
});

/* change icon */

let img = document.querySelector('img');
    let start = img.src;
    let hover = img.getAttribute('data-hover');

    img.onmouseover = () => { img.src = hover; }
    img.onmouseout = () => { img.src = start; }