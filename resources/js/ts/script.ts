let map: any;

function initMap() {
    let sw: any = new google.maps.LatLng(15.908019, 69.489511);
    let ne: any = new google.maps.LatLng(33.203363, 85.325566);
    let bo: any = new google.maps.LatLngBounds();
    bo.extend(sw);
    bo.extend(ne);

    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 15,
        mapTypeControl: false,
        streetViewControl: false
    });
}
