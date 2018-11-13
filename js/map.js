function initialize() {
    var myLatlng = new google.maps.LatLng(35.074164,129.089097);
    var mapOptions = {
        zoom: 17,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
    var marker= new google.maps.Marker({
        position:myLatlng,
        map:map,
        title:"Wakers"
    })
    var infowindow = new google.maps.InfoWindow(
        {
            content: "<h4>Room 608</h4>",
            maxWidth: 50
        }
    );
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });
}
