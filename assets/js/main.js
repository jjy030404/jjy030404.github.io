// Initialize the Leaflet map
const map = L.map('map').setView([40.7128, -74.0060], 13);

// Load the tile layer from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Define locations with coordinates and descriptions
const locations = [
    {
        name: "8th Ave",
        coords: [40.7638, -73.9918],
        description: "Dynamic and bustling, home to diverse shops and eateries."
    },
    {
        name: "5th Ave",
        coords: [40.7754, -73.9656],
        description: "The luxury avenue lined with flagship stores and iconic landmarks."
    },
    {
        name: "24th St",
        coords: [40.7453, -73.9924],
        description: "Charming cafes and quaint spots make this street a gem."
    },
    {
        name: "Broadway",
        coords: [40.7590, -73.9845],
        description: "Vibrant theater district with bright lights and unforgettable shows."
    }
];

// Add markers for each location with a popup
locations.forEach(location => {
    L.marker(location.coords).addTo(map)
        .bindPopup(`<b>${location.name}</b><br>${location.description}`)
        .openPopup();
});

// Zoom interaction prompt
map.on('zoomend', function() {
    if (map.getZoom() < 12) {
        alert("Zoom in to explore NYC streets in detail!");
    }
});

// Log coordinates of map clicks
map.on('click', function(e) {
    console.log("Clicked location:", e.latlng);
});

