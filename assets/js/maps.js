// <!-- API KEY
//     AIzaSyDyT8HWo2ykuG_IVoDY0bgl8pPTYji_I7s -->

function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: {
      lat: 40.785091,
      lng: -73.968285
    }
  });
  const infoWindow = new google.maps.InfoWindow({
    content: "",
    disableAutoPan: true,
  });

  // Create an array of alphabetical characters used to label the markers.
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Add some markers to the map
  const markers = locations.map((position, i) => {
    const label = labels[i % labels.length];
    const marker = new google.maps.Marker({
      position,
      label,
    });

    // markers can only be keyboard focusable when they have click listeners
    // open info window when marker is clicked
    marker.addListener("click", () => {
      infoWindow.setContent(label);
      infoWindow.open(map, marker);
    });
    return marker;
  });

  const markerCluster = new markerClusterer.MarkerClusterer({
    map,
    markers
  });

};

var locations = [{
    lat: 40.785091,
    lng: -73.968285
  },
  {
    lat: 41.084045,
    lng: -73.874245
  },
  {
    lat: 40.754932,
    lng: -73.984016
  }
];

