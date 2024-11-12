const map = L.map('map').setView([40.7831, -73.9712], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const locations = [
    { name: "3rd Ave", coords: [40.7328, -73.9925], description: "From quiet cafes to lively bars, 3rd Ave is where Manhattan’s energy buzzes all day and night. A place for everyone!", link: "3rd_ave.html" },
    { name: "8th Ave", coords: [40.7638, -73.9918], description: "8th Ave – where classic NYC grittiness meets endless attractions. The perfect spot for unique stores, street vendors, and unexpected surprises.", link: "8th_ave.html" },
    { name: "24th St", coords: [40.7453, -73.9924], description: "Charming and laid-back, 24th St offers cozy cafes and boutique shops – an escape from the bustling avenues. Ideal for a lazy afternoon stroll!", link: "24th_street.html" },
    { name: "Broadway", coords: [40.7590, -73.9845], description: "Broadway’s lights shine day and night, attracting dreamers and doers alike. Dive into the heart of NYC’s theater district, where every moment is a show!", link: "broadway.html" },
    { name: "5th Ave", coords: [40.7756, -73.9659], description: "5th Ave – New York’s upscale playground. From high-end shopping to world-renowned landmarks, it’s the avenue of dreams and endless possibilities.", link: "5th_ave.html" },
    { name: "Madison Ave", coords: [40.7597, -73.9748], description: "Luxury brands and iconic NYC vibes line Madison Ave, making it a paradise for shoppers and city lovers. The spot for the chic and sophisticated.", link: "madison_ave.html" },
    { name: "Park Ave", coords: [40.7465, -73.9773], description: "Elegant and iconic, Park Ave offers a view of New York’s upscale charm. Expect grand buildings, manicured parks, and a taste of prestige.", link: "park_ave.html" },
    { name: "Lexington Ave", coords: [40.7519, -73.9794], description: "Lexington Ave is full of life – bustling with commuters, cafes, and shops. A true NYC experience for those who love the city's pulse.", link: "lexington_ave.html" },
    { name: "7th Ave", coords: [40.7622, -73.9822], description: "7th Ave: a blend of history and modern flair. From Times Square’s energy to quiet blocks, it’s quintessential New York wrapped into one street.", link: "7th_ave.html" },
    { name: "West End Ave", coords: [40.7883, -73.9813], description: "Residential and historical, West End Ave is Manhattan’s quieter side. Beautiful buildings and a calm vibe make it a local favorite.", link: "west_end_ave.html" }
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
    const marker = L.marker(location.coords, { icon: customIcon }).addTo(map)
        .bindPopup(`<b>${location.name}</b><br>${location.description}<br><a href="${location.link}" target="_blank">Learn more</a>`);
    
    marker.on('mouseover', function() {
        this.openPopup();
    });

    marker.on('click', function() {
        this.openPopup();
    });
});
