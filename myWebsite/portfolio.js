

// Кнопка вызова бокового меню
$('.menu-btn').on('click', function (e) {
    e.preventDefault();
    $('.main-nav').toggleClass('main-nav_active');
})


//Замена надписи
$('.clickme').click(function () {
    if (!$(this).data('status')) {
        $(this).html('CLOSE');
        $(this).data('status', true);
    }
    else {
        $(this).html('MENU');
        $(this).data('status', false);
    }
});

//for the animation
$('.social').hide(function () {
    $(this).delay(12000).fadeIn(800);
});

$('.rw-sentence')
    .delay(10000)
    .fadeOut(400);