function initMap() {
      var myLatLng = { lat: 20.705551, lng: -103.391372 };

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 17,
            center: myLatLng,
            zoomControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.RIGHT_CENTER
            },
            scaleControl: true,
            streetViewControl: true,
            streetViewControlOptions: {
                position: google.maps.ControlPosition.LEFT_TOP
            },
            scrollwheel: false,
            //draggable: !("ontouchend" in document),
        });

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'TaiChi Colomos',
            url: "https://www.google.com.mx/maps/place/20%C2%B042'20.0%22N+103%C2%B023'28.9%22W/@20.705551,-103.3935607,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d20.705551!4d-103.391372?hl=es-419"
        });

        google.maps.event.addListener(marker, 'click', function() {
            window.open(marker.url, 'blank');
        });

}