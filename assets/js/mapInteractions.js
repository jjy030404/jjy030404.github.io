const map = L.map('map').setView([40.7831, -73.9712], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const locations = [
    { name: "3rd Ave", coords: [40.7328, -73.9925], description: "From quiet cafes to lively bars, 3rd Ave is where Manhattan’s energy buzzes all day and night. A place for everyone!", link: "3rd_ave.html" },
    { name: "8th Ave", coords: [40.7638, -73.9918], description: "8th Ave – where classic NYC grittiness meets endless attractions. The perfect spot for unique stores, street vendors, and unexpected surprises.", link: "8th_ave.html" },
    { name: "14th St", coords: [40.7348, -73.9922], description: "Lively 14th St is where downtown meets uptown. Home to unique shops, bustling markets, and a diverse crowd.", link: "14th_st.html" },
    { name: "23rd St", coords: [40.7410, -73.9897], description: "A hub of creativity, 23rd St offers galleries, eateries, and a slice of NYC life between east and west.", link: "23rd_st.html" },
    { name: "24th St", coords: [40.7453, -73.9924], description: "Charming and laid-back, 24th St offers cozy cafes and boutique shops – an escape from the bustling avenues.", link: "24th_street.html" },
    { name: "Broadway", coords: [40.7590, -73.9845], description: "Broadway’s lights shine day and night, attracting dreamers and doers alike. Dive into the heart of NYC’s theater district!", link: "broadway.html" },
    { name: "5th Ave", coords: [40.7756, -73.9659], description: "5th Ave – New York’s upscale playground. From high-end shopping to world-renowned landmarks, it’s the avenue of dreams.", link: "5th_ave.html" },
    { name: "Madison Ave", coords: [40.7597, -73.9748], description: "Luxury brands and iconic NYC vibes line Madison Ave, making it a paradise for shoppers and city lovers alike.", link: "madison_ave.html" },
    { name: "Houston St", coords: [40.7280, -74.0038], description: "Spanning east to west, Houston St embodies NYC’s cultural diversity and is a gateway to both SoHo and the East Village.", link: "houston_st.html" },
    { name: "Delancey St", coords: [40.7183, -73.9881], description: "Delancey St – where Lower Manhattan comes to life. Packed with character, charm, and a vibrant atmosphere.", link: "delancey_st.html" }
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
