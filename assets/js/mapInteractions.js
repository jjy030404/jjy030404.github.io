// Initialize the Leaflet map with correct settings
const map = L.map('map').setView([40.7128, -74.0060], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const locations = [
    {
        name: "3rd Ave",
        coords: [40.7328, -73.9925],
        description: "Welcome to 3rd Ave, where every step feels like a surprise! From quirky cafes to vintage shops, it’s a street that’s as unpredictable as your Monday morning coffee order. Whether you’re here for the food or the people-watching, this avenue promises to keep you on your toes!",
        link: "3rd_ave.html"
    },
    {
        name: "8th Ave",
        coords: [40.7638, -73.9918],
        description: "Step onto 8th Ave, the bustling artery of NYC, where every block feels like its own episode of a drama series. Here, shops compete for your attention, and the smell of street food is so alluring, you might just forget where you’re headed. A lively mix of everything that makes New York, well, New York!",
        link: "8th_ave.html"
    },
    {
        name: "24th St",
        coords: [40.7453, -73.9924],
        description: "24th Street: a hidden gem among NYC’s busy avenues. Known for its charming little cafes and cozy spots where the baristas practically know your order before you even say it, 24th is the street that makes you feel like you’ve just stumbled upon a secret. Just don’t tell too many people — it’s our little secret.",
        link: "24th_street.html"
    },
    {
        name: "Broadway",
        coords: [40.7590, -73.9845],
        description: "Welcome to Broadway, the street that needs no introduction. With lights brighter than your future (at least, that’s how it feels after a cup of coffee), Broadway is a chaotic mix of theater magic, neon signs, and tourists who’ve probably never seen a show but are here for the Instagram photos anyway. Take a stroll and soak in the electric vibes!",
        link: "broadway.html"
    },
    {
        name: "6th Ave",
        coords: [40.7417, -73.9944],
        description: "6th Ave: part office buildings, part street food haven, and fully alive. This street’s got everything — from quick bites to corporate suits, all in a perfectly chaotic New York blend. It’s the kind of street where you’ll spot a hot dog cart next to a serious business meeting, and nobody’s batting an eye.",
        link: "6th_ave.html"
    },
    {
        name: "7th Ave",
        coords: [40.7462, -73.9878],
        description: "7th Ave: a street that never sleeps, even when the city’s supposed to be winding down. With bustling bars, quirky shops, and a general atmosphere of ‘let’s see what happens next’, this avenue is perfect for those who thrive on chaos... and the occasional late-night slice of pizza.",
        link: "7th_ave.html"
    },
    {
        name: "5th Ave",
        coords: [40.7487, -73.9857],
        description: "5th Ave is where luxury meets landmarks. From upscale shops that make your wallet weep to towering buildings that make you feel like a very tiny ant, this avenue is both a shopping paradise and a tourist’s dream. Just don’t forget your sunglasses, because the glam factor is blinding.",
        link: "5th_ave.html"
    },
    {
        name: "Madison Ave",
        coords: [40.7484, -73.9817],
        description: "Madison Ave: Where fashion and sophistication collide. This avenue is the epicenter of advertising, high-end fashion, and the occasional celebrity sighting. If you’ve ever wanted to feel like you’ve just walked into a movie scene, Madison’s the place to be — just don’t forget to check if your outfit’s on point first!",
        link: "madison_ave.html"
    },
    {
        name: "Park Ave",
        coords: [40.7416, -73.9765],
        description: "Park Ave: a street that’s as elegant as it is peaceful. Lined with impressive office buildings, swanky restaurants, and a park that’s actually relaxing (imagine that!), this street is the perfect place to take a moment, reflect, and probably wonder why you don’t live here yet. It’s that kind of place.",
        link: "park_ave.html"
    },
    {
        name: "Lexington Ave",
        coords: [40.7405, -73.9798],
        description: "Lexington Ave is NYC’s true all-rounder. Whether you're here to grab a coffee, shop for the latest trends, or just to get lost in the ever-flowing hustle and bustle, this street has you covered. It’s where the city’s fast pace meets its warm, welcoming heart. Plus, the street vendors have the best pretzels in town. Seriously.",
        link: "lexington_ave.html"
    }
];

// Adds interactivity to each marker
locations.forEach(location => {
    const marker = L.marker(location.coords).addTo(map)
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
