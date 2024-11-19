const map = L.map('map');

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const locations = [
    { name: "3rd Ave", coords: [40.733820, -73.986697], description: "The pulse of East Village with cafes and history.", link: "3rd_ave.html" },
    { name: "5th Ave", coords: [40.774010, -73.965368], description: "Famous for its shopping and iconic landmarks.", link: "5th_ave.html" },
    { name: "7th Ave", coords: [40.761937, -73.982155], description: "Blending fashion, food, and flair.", link: "7th_ave.html" },
    { name: "8th Ave", coords: [40.759990, -73.991562], description: "Dynamic and bustling with vibrant culture.", link: "8th_ave.html" },
    { name: "Lexington Ave", coords: [40.751881, -73.973268], description: "Boutiques and a mix of Uptown-Downtown vibes.", link: "lexington_ave.html" },
    { name: "Canal St", coords: [40.719254, -74.000952], description: "A bustling street, gateway to Chinatown.", link: "canal_street.html" },
    { name: "Broadway", coords: [40.759256, -73.984482], description: "Theater district lights and unforgettable shows.", link: "broadway.html" },
    { name: "Madison Ave", coords: [40.774290, -73.963634], description: "High-end shops with an elegant touch.", link: "madison_ave.html" },
    { name: "Park Ave", coords: [40.753011, -73.978020], description: "Greenery meets glam on this storied avenue.", link: "park_ave.html" },
    { name: "24th St", coords: [40.742124, -73.992866], description: "Charming cafes and quaint spots make this street a gem.", link: "24th_street.html" }
];

const customIcon = L.icon({
    iconUrl: 'https://jjy030404.github.io/marker-icon-2x-red.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
});

const bounds = [];

locations.forEach(location => {
    const marker = L.marker(location.coords, { icon: customIcon }).addTo(map);
    marker.bindPopup(`<b>${location.name}</b><br>${location.description}<br><a href="${location.link}" target="_blank">Learn more</a>`, { maxWidth: 300 });
    bounds.push(location.coords);
});

// Adjust map to show all markers
map.fitBounds(bounds, { padding: [50, 50] });
