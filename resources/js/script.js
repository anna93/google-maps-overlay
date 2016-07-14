var map;
function initMap() {
    var sw = new google.maps.LatLng(15.908019, 69.489511);
    var ne = new google.maps.LatLng(33.203363, 85.325566);
    var bo = new google.maps.LatLngBounds();
    bo.extend(sw);
    bo.extend(ne);
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 15,
        mapTypeControl: false,
        streetViewControl: false
    });
}
