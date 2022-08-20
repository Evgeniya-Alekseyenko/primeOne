// For burger-menu
$('.header-menu__icon').click(function (event) {
    $(this).toggleClass('active');
    $('.header-menu').toggleClass('active');
    if ($(this).hasClass('active')) {
        $('body').data('scroll', $(window).scrollTop());
    }
    $('body').toggleClass('lock');
    if (!$(this).hasClass('active')) {
        $('body,html').scrollTop(parseInt($('body').data('scroll')));
    }
});

$('.wrapper').addClass('loaded');

// function ibg() {
//     $.each($('.ibg'), function (index, val) {
//         if ($(this).find('img').length > 0) {
//             $(this).css(
//                 'background-image',
//                 'url("' + $(this).find('img').attr('src') + '")'
//             );
//         }
//     });
// }
// ibg();

let map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
}

window.initMap = initMap;
