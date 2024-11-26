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
    { name: "10th Ave", coords: [40.746439, -74.007394], description: "A perfect mix of urban serenity and stunning views.", link: "10th_ave.html" },
    { name: "Broadway", coords: [40.759256, -73.984482], description: "Theater district lights and unforgettable shows.", link: "broadway.html" },
    { name: "Madison Ave", coords: [40.774290, -73.963634], description: "High-end shops with an elegant touch.", link: "madison_ave.html" },
    { name: "Park Ave", coords: [40.753011, -73.978020], description: "Greenery meets glam on this storied avenue.", link: "park_ave.html" },
    { name: "24th St", coords: [40.742124, -73.992866], description: "Charming cafes and quaint spots make this street a gem.", link: "24th_street.html" }
];

const customIcon = L.icon({
    iconUrl: 'https://jjy030404.github.io/marker-icon-2x-red.png',
    iconSize: [30, 50],
    iconAnchor: [15, 50],
    popupAnchor: [0, -45]
});

const bounds = [];
const offsetValues = [[0, 0], [0.0001, 0.0001], [-0.0001, -0.0001], [0.0002, 0], [0, -0.0002]]; 

locations.forEach((location, index) => {
    const offset = offsetValues[index % offsetValues.length]; 
    const adjustedCoords = [location.coords[0] + offset[0], location.coords[1] + offset[1]];
    
    const marker = L.marker(adjustedCoords, { icon: customIcon }).addTo(map);
    marker.bindPopup(`<b>${location.name}</b><br>${location.description}<br><a href="${location.link}" target="_blank" style="color: #00b4d8;">Learn more</a>`, { maxWidth: 350 });
    bounds.push(adjustedCoords);
});

map.fitBounds(bounds, { padding: [70, 70] });
