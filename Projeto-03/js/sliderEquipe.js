$(function(){
    var delay = 3000;
    var curIndex = 0;
    var amt;

    function initSlider(){
        amt = $('.sobre-author').length;
        var sizeContainer = 100 * amt;
        var sizeBoxSingle = 100 / amt;
        $('.sobre-author').css('width', sizeBoxSingle + '%');
        $('.scroll-wraper').css('width', sizeContainer + '%');

        for (let i = 0; i < amt; i++) {
            if (i === 0) {
                $('.slider-bullets').append('<span style="background-color: rgb(170, 170, 170);"></span>');
            } else {
                $('.slider-bullets').append('<span></span>');
            }
        }
    }

    function autoPlay(){
        setInterval(function(){
            curIndex++;
            if (curIndex === amt)
                curIndex = 0;
            goToSlider(curIndex);
        }, delay);
    }

    function goToSlider(curIndex){
        var offSetX = $('.sobre-author').eq(curIndex).offset().left - $('.scroll-wraper').offset().left;
        $('.slider-bullets span').css('background', 'rgb(200,200,200');
        $('.slider-bullets span').eq(curIndex).css('background', 'rgb(170,170,170');

        $('.scrollEquipe').animate({
            'scrollLeft': offSetX+'px'
        });
    }
    initSlider();
    autoPlay();
})