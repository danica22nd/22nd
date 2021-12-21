

$(".giftGif").click(musicPlay);


var startMan = false;

function musicPlay() {
  $(".overlay").fadeOut();
  if(!startMan){
    var musicStart = new Audio("ikawLang.mp3");
    musicStart.play();
    startMan = true;
    document.removeEventListener('click', musicPlay);
    }
}

$(window).scroll(function() {
    musicPlay();
    $('.fade-in').each(function() {
        var top_of_element = $(this).offset().top;
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) && !$(this).hasClass('is-visible')) {
            $(this).addClass('is-visible');
        }
    });
});
