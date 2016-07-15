let map: any

function initMap() {
    let sw: any = new google.maps.LatLng(15.908019, 69.489511)
    let ne: any = new google.maps.LatLng(33.203363, 85.325566)
    let bo: any = new google.maps.LatLngBounds()
    bo.extend(sw)
    bo.extend(ne)

    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 15,
        mapTypeControl: false,
        streetViewControl: false
    })
}

$(document).ready(function() {
    $("#searchInput").keydown(function(event) {
        if(event.which == '13') {
            map.data.forEach(function(feature) {
                map.data.remove(feature)
            });
            let queryParam: string = $(this).val()
            $.get('search',{ q: queryParam }, function(data) {
                let bo: any = new google.maps.LatLngBounds()
                data.geometry.coordinates[0].forEach(function(e,i) {
                    let thisPoint = new google.maps.LatLng(e[1], e[0])
                    bo.extend(thisPoint)
                    // console.log(e[0]+" "+e[1])
                })
                map.fitBounds(bo)
                map.data.addGeoJson(data)
            })
        }
    })
})
