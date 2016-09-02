ymaps.ready(function () {
    var map = document.querySelector('.map-canvas');
    var myMap = new ymaps.Map(map, {
            center: [59.938868, 30.322078],
            controls: [],
            zoom: 18
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark([59.938680, 30.323038], {
            hintContent: '',
            balloonContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map-pointer.png',
            // Размеры метки.
            iconImageSize: [231, 190],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-50, -190]
        });

    myMap.geoObjects.add(myPlacemark);
});
