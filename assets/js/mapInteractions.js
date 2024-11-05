// Initialize the Leaflet map
const map = L.map('map').setView([40.7128, -74.0060], 13);

// Load OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Location data with exact street coordinates
const locations = [
    { name: "3rd Ave", coords: [40.7328, -73.9925], description: "Vibrant and lively.", link: "3rd_ave.html" },
    { name: "8th Ave", coords: [40.7638, -73.9918], description: "Bustling with shops.", link: "8th_ave.html" },
    { name: "24th St", coords: [40.7453, -73.9924], description: "Quaint cafes and spots.", link: "24th_street.html" },
    { name: "Broadway", coords: [40.7590, -73.9845], description: "Bright lights of the theater district.", link: "broadway.html" }
];

// Custom icon settings
const customIcon = L.icon({
    iconUrl: 'https://jjy030404.github.io/marker-icon-2x-red.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'marker-shadow.png',
    shadowSize: [41, 41],
    shadowAnchor: [12, 41]
});

// Add markers with adjusted street positions
locations.forEach(location => {
    L.marker(location.coords, { icon: customIcon }).addTo(map)
        .bindPopup(`<b>${location.name}</b><br>${location.description}<br><a href="${location.link}" target="_blank">Learn more</a>`, { maxWidth: 300 });
});
