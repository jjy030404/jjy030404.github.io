// Initialize the Leaflet map
const map = L.map('map').setView([40.7128, -74.0060], 13);

// Load the tile layer from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Define locations with coordinates, descriptions, and links to their HTML pages
const locations = [
    {
        name: "3rd Ave",
        coords: [40.7328, -73.9925],
        description: "Explore 3rd Ave and its unique vibes.",
        link: "3rd_ave.html"
    },
    {
        name: "8th Ave",
        coords: [40.7638, -73.9918],
        description: "Dynamic and bustling, home to diverse shops and eateries.",
        link: "8th_ave.html"
    },
    {
        name: "24th St",
        coords: [40.7453, -73.9924],
        description: "Charming cafes and quaint spots make this street a gem.",
        link: "24th_street.html"
    },
    {
        name: "Broadway",
        coords: [40.7590, -73.9845],
        description: "Vibrant theater district with bright lights and unforgettable shows.",
        link: "broadway.html"
    }
];

// Define a custom red icon for the markers
const customIcon = L.icon({
    iconUrl: 'https://jjy030404.github.io/marker-icon-2x-red.png', // Direct path to the custom red icon
    iconSize: [25, 41], // Size for the 2x icon
    iconAnchor: [12, 41], // Anchor the icon bottom center
    popupAnchor: [1, -34], // Position the popup above the icon
    shadowUrl: 'marker-shadow.png', // Direct path to the Leaflet shadow image in the root directory
    shadowSize: [41, 41],
    shadowAnchor: [12, 41]
});

// Add markers with custom icon and interactive features
locations.forEach(location => {
    const marker = L.marker(location.coords, { icon: customIcon }).addTo(map)
        .bindPopup(`<b>${location.name}</b><br>${location.description}<br><a href="${location.link}" target="_blank">Learn more</a>`);
    
    // Highlight street on hover
    marker.on('mouseover', function() {
        this.openPopup();
    });

    // Display street details when clicked
    marker.on('click', function() {
        this.openPopup();
    });
});
