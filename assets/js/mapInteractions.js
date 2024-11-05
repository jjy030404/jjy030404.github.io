const map = L.map('map').setView([40.7128, -74.0060], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

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

function highlightStreet(marker, color) {
    marker.on('mouseover', function() {
        this.getElement().style.color = color;
    });
    marker.on('mouseout', function() {
        this.getElement().style.color = '';
    });
}

locations.forEach(location => {
    const marker = L.marker(location.coords).addTo(map)
        .bindPopup(`<b>${location.name}</b><br>${location.description}<br><a href="${location.link}" target="_blank">Learn more</a>`);

    highlightStreet(marker, 'red');
    marker.on('click', function() {
        this.openPopup();
    });
});