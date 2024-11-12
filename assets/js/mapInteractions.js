const map = L.map('map').setView([40.7128, -74.0060], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const locations = [
    { name: "3rd Ave", coords: [40.7328, -73.9925], description: "Where every corner is a chance to witness a coffee-fueled debate on art or avocado toast superiority. Perfect for hipster sightings.", link: "#3rd_ave" },
    { name: "8th Ave", coords: [40.7638, -73.9918], description: "Here, you’re likely to dodge street performers, food trucks, and at least one guy trying to sell you a used 'genuine' Rolex. Hold onto your wallet.", link: "#8th_ave" },
    { name: "24th St", coords: [40.7453, -73.9924], description: "Quaint by NYC standards, 24th Street offers a slower vibe – perfect for when you need a quick escape from the city’s caffeine-fueled chaos. But only for a minute!", link: "#24th_street" },
    { name: "Broadway", coords: [40.7590, -73.9845], description: "Home to bright lights, big dreams, and more tourists than locals – Broadway is where aspiring stars and relentless haggling for theater tickets meet.", link: "#broadway" },
    { name: "5th Ave", coords: [40.775, -73.963], description: "Luxury central! Stroll by in casual attire if you want judgmental looks from people dressed to the nines. Window shopping here feels like a workout for your credit card.", link: "#5th_ave" },
    { name: "6th Ave", coords: [40.760, -73.984], description: "Tall buildings, bustling suits, and a continuous stream of taxis trying to out-honk each other. Classic New York in all its high-stakes, high-rise glory.", link: "#6th_ave" },
    { name: "7th Ave", coords: [40.758, -73.985], description: "Between endless food choices and the sound of music leaking from every door, 7th Ave is like New York’s party playlist on repeat. Dive in if you dare.", link: "#7th_ave" },
    { name: "Madison Ave", coords: [40.775, -73.976], description: "The avenue of power suits and high fashion – Madison is where ad execs plot your next favorite jingle while sipping espressos worth their weight in gold.", link: "#madison_ave" },
    { name: "Park Ave", coords: [40.752, -73.976], description: "Sleek, polished, and bustling – Park Avenue has the kind of sidewalks that make you want to walk a little taller. It’s the Hollywood of NYC streets.", link: "#park_ave" },
    { name: "Lexington Ave", coords: [40.757, -73.969], description: "Diverse eats and eclectic boutiques – Lexington is where New Yorkers go when they want culture, a bargain, and a chance to overhear dramatic subway stories.", link: "#lexington_ave" }
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
        .bindPopup(`<b>${location.name}</b><br>${location.description}`, { maxWidth: 300 });
});
