
// scroll-text
$(document).ready(function() {
    $(window).scroll(function() {

        // 현재 스크롤을 구한다
        const currentScroll = $(this).scrollTop();
        const positionY = window.pageYOffset;

        // translateX
        if (currentScroll > $('#about').offset().top) {
            $(".scroll-text").css("transform", "translateX(" + positionY * -0.5 + "px)");
        }
    })
});