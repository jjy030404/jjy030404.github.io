const visitCountUrl = "https://api.countapi.xyz/hit/jjy030404.github.io/visits";

function updateVisitorCount() {
    fetch(visitCountUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('visitor-count').innerText = `You are visitor number ${data.value}.`;
        })
        .catch(error => {
            console.error("Error fetching visitor count: ", error);
        });
}

document.addEventListener('DOMContentLoaded', updateVisitorCount);
