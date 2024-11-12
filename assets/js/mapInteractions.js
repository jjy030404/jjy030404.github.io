const map = L.map('map').setView([40.7128, -74.0060], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const locations = [
    { name: "3rd Ave", coords: [40.7328, -73.9925], description: "The pulse of East Village with cafes and history.", link: "3rd_ave.html" },
    { name: "5th Ave", coords: [40.7750, -73.9654], description: "Famous for its shopping and iconic spots.", link: "5th_ave.html" },
    { name: "7th Ave", coords: [40.7644, -73.9786], description: "Blending fashion, food, and flair.", link: "7th_ave.html" },
    { name: "Lexington Ave", coords: [40.7516, -73.9732], description: "Boutiques and a mix of Uptown-Downtown vibes.", link: "lexington_ave.html" },
    { name: "Canal St", coords: [40.7194, -74.0018], description: "A bustling street, gateway to Chinatown.", link: "canal_street.html" },
    { name: "Broadway", coords: [40.7590, -73.9845], description: "Theater district lights and unforgettable shows.", link: "broadway.html" },
    { name: "Madison Ave", coords: [40.7741, -73.9651], description: "High-end shops with an elegant touch.", link: "madison_ave.html" },
    { name: "Park Ave", coords: [40.7486, -73.9829], description: "Greenery meets glam on this storied avenue.", link: "park_ave.html" }
];

const customIcon = L.icon({
    iconUrl: 'https://jjy030404.github.io/marker-icon-2x-red.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'marker-shadow.png',
    shadowSize: [41, 41],
    shadowAnchor: [12, 41]
});

locations.forEach(location => {
    L.marker(location.coords, { icon: customIcon }).addTo(map)
        .bindPopup(`<b>${location.name}</b><br>${location.description}<br><a href="${location.link}" target="_blank">Learn more</a>`, { maxWidth: 300 });
});
