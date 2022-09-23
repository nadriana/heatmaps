let map, heatmap, polygon;

function goToGdl() {
    map.setCenter({ lat: 20.6597, lng: -103.3496 });
    map.setZoom(13)
}

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: { lat: 23.6345, lng: -102.5528 },
        mapTypeId: "roadmap",
    });
    heatmap = new google.maps.visualization.HeatmapLayer({
        data: getPoints(),
        map: map,
        gradient: ["rgba(124, 252, 0, 0)",
            "rgba(60, 179, 113, 1)",
            "rgba(34, 139, 34, 1)",
            "rgba(0, 128, 0, 1)",
            "rgba(0, 100, 255, 1)",
        ]
    });

    // Create GDL001 Polygon
    GDL001 = new google.maps.Polygon({
        paths: GDL001Coords,
        strokeColor: "blue",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "lightblue",
        fillOpacity: 0.35,
        map: map
    });

    // Create GDL002 Polygon
    GDL002 = new google.maps.Polygon({
        paths: GDL002Coords,
        strokeColor: "blue",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "lightblue",
        fillOpacity: 0.35,
        map: map
    });

    // Create GDL003 Polygon
    GDL003 = new google.maps.Polygon({
        paths: GDL003Coords,
        strokeColor: "blue",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "lightblue",
        fillOpacity: 0.35,
        map: map
    });

    // Create GDL004 Polygon
    GDL004 = new google.maps.Polygon({
        paths: GDL004Coords,
        strokeColor: "blue",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "lightblue",
        fillOpacity: 0.35,
        map: map
    });

    // Create GDL005 Polygon
    GDL005 = new google.maps.Polygon({
        paths: GDL005Coords,
        strokeColor: "blue",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "lightblue",
        fillOpacity: 0.35,
        map: map
    });

    // Create GDL006 Polygon
    GDL006 = new google.maps.Polygon({
        paths: GDL006Coords,
        strokeColor: "blue",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "lightblue",
        fillOpacity: 0.35,
        map: map
    });

    // Create GDL007 Polygon
    GDL007 = new google.maps.Polygon({
        paths: GDL007Coords,
        strokeColor: "blue",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "lightblue",
        fillOpacity: 0.35,
        map: map
    });

    // Create GDL009 Polygon
    GDL009 = new google.maps.Polygon({
        paths: GDL009Coords,
        strokeColor: "blue",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "lightblue",
        fillOpacity: 0.35,
        map: map
    });

    GDL001.setMap(map)
    GDL002.setMap(map)
    GDL003.setMap(map)
    GDL004.setMap(map)
    GDL005.setMap(map)
    GDL006.setMap(map)
    GDL007.setMap(map)
    GDL009.setMap(map)

    goToGdl()

}


