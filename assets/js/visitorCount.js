// API 키를 설정합니다.
const apiKey = "ba75df87969e4317845092a817a697b3";
const visitCountUrl = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`;

function updateVisitorCount() {
    // LocalStorage에서 방문자 수를 가져옵니다.
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
                // 방문자 수가 없는 경우 1로 시작하여 LocalStorage에 저장
                visitorCount = 1;
                localStorage.setItem("visitorCount", visitorCount);
                document.getElementById('visitor-count').innerText = `You are visitor number ${visitorCount}.`;
            })
            .catch(error => {
                console.error("Error fetching visitor count: ", error);
                document.getElementById('visitor-count').innerText = "Visitor count is unavailable at the moment.";
            });
    } else {
        // LocalStorage에 방문자 수가 있는 경우
        visitorCount = parseInt(visitorCount) + 1;
        localStorage.setItem("visitorCount", visitorCount);
        document.getElementById('visitor-count').innerText = `You are visitor number ${visitorCount}.`;
    }
}

document.addEventListener('DOMContentLoaded', updateVisitorCount);
