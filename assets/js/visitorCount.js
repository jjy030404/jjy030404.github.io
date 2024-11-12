const COUNT_API_KEY = "jjy030404_github_button_clicks";

fetch(`https://api.countapi.xyz/hit/${COUNT_API_KEY}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('visitor-count').innerText = `You are visitor number ${data.value} today.`;
    })
    .catch(error => console.error("Error updating click count:", error));

fetch(`https://api.countapi.xyz/get/${COUNT_API_KEY}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('visitor-count').innerText = `Total clicks today: ${data.value}`;
    })
    .catch(error => console.error("Error fetching click count:", error));
