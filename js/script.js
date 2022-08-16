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

function ibg() {
    $.each($('.ibg'), function (index, val) {
        if ($(this).find('img').length > 0) {
            $(this).css(
                'background-image',
                'url("' + $(this).find('img').attr('src') + '")'
            );
        }
    });
}
ibg();

// function map(n) {
//     google.maps.Map.prototype.setCenterWithOffset = function (
//         lating,
//         offsetX,
//         offsetY
//     ) {
//         var map = this;
//         var ov = new google.maps.OverlayView();
//         ov.onAdd = function () {
//             var proj = this.getProjection();
//             var aPoint = proj.fromLatLngToContainerPixel(lating);
//             aPoint.x = aPoint.x + offsetX;
//             aPoint.y = aPoint.y + offsetY;
//             map.panTo(proj.fromLatLngToContainerPixelToLatLng(aPoint));
//         };
//         ov.draw = function () {};
//         ov.setMap(this);
//     };
//     var markers = new Array();
//     var infowindow = new google.maps.Infowindow({});
//     var location = [[new google.maps.LatLng(53.819055, 27.8813694)]];
//     var options = {
//         zoom: 10,
//         panControl: false,
//         mapTypeControl: false,
//         center: location[0][0],
//         scrollwheel: false,
//         mapTypeId: google.maps.mapTypeId.ROADMAP,
//     };
//     var map = new google.maps.Map(document.getElementById('map'), options);
//     var icon = {
//         url: '/primeOne/img/1384.png',
//         scaledSize: new google.maps.Size(18, 20),
//         anchor: new google.maps.Point(9, 10),
//     };
//     for (var i = 0; i < location.length; i++) {
//         var marker = new google.maps.Marker({
//             position: location[i][0],
//             map: map,
//         });
//         markers.push(marker);
//     }
// }
// if ($('#map').length > 0) {
//     map();
// }

let map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
}

window.initMap = initMap;
