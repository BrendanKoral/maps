var map;

function initialize() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 9,
        center: new google.maps.LatLng(41.8951062,-87.9787952),
        mapTypeId: 'terrain'
    });

    map.data.loadGeoJson('data/data.json');

}