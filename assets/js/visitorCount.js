const apiKey = "ba75df87969e4317845092a817a697b3";
const visitCountUrl = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`;

function updateVisitorCount() {
    let visitorCount = localStorage.getItem("visitorCount");

    if (!visitorCount) {
        fetch(visitCountUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                visitorCount = 1;
                localStorage.setItem("visitorCount", visitorCount);
                document.getElementById('visitor-count').innerText = `You are visitor number ${visitorCount}.`;
            })
            .catch(error => {
                console.error("Error fetching visitor count: ", error);
                document.getElementById('visitor-count').innerText = "Visitor count is unavailable at the moment.";
            });
    } else {
        visitorCount = parseInt(visitorCount) + 1;
        localStorage.setItem("visitorCount", visitorCount);
        document.getElementById('visitor-count').innerText = `You are visitor number ${visitorCount}.`;
    }
}

document.addEventListener('DOMContentLoaded', updateVisitorCount);
