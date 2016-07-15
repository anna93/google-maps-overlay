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
$(document).ready(function () {
    $("#searchInput").keydown(function (event) {
        if (event.which == '13') {
            map.data.forEach(function (feature) {
                map.data.remove(feature);
            });
            var queryParam = $(this).val();
            $.get('search', { q: queryParam }, function (data) {
                var bo = new google.maps.LatLngBounds();
                data.geometry.coordinates[0].forEach(function (e, i) {
                    var thisPoint = new google.maps.LatLng(e[1], e[0]);
                    bo.extend(thisPoint);
                    // console.log(e[0]+" "+e[1])
                });
                map.fitBounds(bo);
                map.data.addGeoJson(data);
            });
        }
    });
});
