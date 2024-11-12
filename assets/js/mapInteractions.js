const map = L.map('map').setView([40.7128, -74.0060], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const locations = [
    { name: "3rd Ave", coords: [40.7328, -73.9905], description: "Where hip meets historic. 3rd Ave has everything from cozy coffee spots to tales of the East Village’s gritty past.", link: "3rd_ave.html" },
    { name: "5th Ave", coords: [40.7760, -73.9654], description: "High-end meets high-energy! From iconic shopping spots to skyscrapers, this is where the city glitters brightest.", link: "5th_ave.html" },
    { name: "7th Ave", coords: [40.7644, -73.9770], description: "Fashion, food, and flair! Stroll through the fusion of flavors and style that only 7th Ave can offer.", link: "7th_ave.html" },
    { name: "8th Ave", coords: [40.7648, -73.9930], description: "A lively mix of locals and landmarks. 8th Ave is your gateway to all things bustling and beautiful.", link: "8th_ave.html" },
    { name: "Lexington Ave", coords: [40.7506, -73.9735], description: "Part chic, part quirky. Uptown elegance with Downtown soul—Lexington Ave is a vibe all its own.", link: "lexington_ave.html" },
    { name: "Canal St", coords: [40.7185, -74.0018], description: "The bustling marketplace of dreams! From mysterious trinkets to a gateway into Chinatown's heart.", link: "canal_street.html" },
    { name: "Broadway", coords: [40.7600, -73.9840], description: "Lights, action, Broadway! The stage is set with theaters, bright lights, and dreams ready to come true.", link: "broadway.html" },
    { name: "Madison Ave", coords: [40.7750, -73.9640], description: "Where luxury resides. Madison Ave's upscale boutiques and style set it apart from the ordinary.", link: "madison_ave.html" },
    { name: "Park Ave", coords: [40.7476, -73.9820], description: "Green streets and posh buildings. Park Ave brings nature and elegance together like nowhere else.", link: "park_ave.html" },
    { name: "24th St", coords: [40.7465, -73.9935], description: "Charming cafes, artistic flair, and a taste of NYC’s more relaxed side await you on 24th Street.", link: "24th_street.html" }
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
