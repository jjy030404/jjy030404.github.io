document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('start-button');
  const mapContainer = document.getElementById('map-container');
  const map = document.getElementById('manhattan-map');
  let zoomLevel = 1;
  let translateX = 0;
  let translateY = 0;

  // Start button transition to main page
  startButton.addEventListener('click', () => {
    document.body.innerHTML = `<object data="main.html" width="100%" height="100%"></object>`;
  });

  // Mouse drag for map movement
  let isDragging = false;
  let startX, startY;

  mapContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX - translateX;
    startY = e.clientY - translateY;
  });

  mapContainer.addEventListener('mousemove', (e) => {
    if (isDragging) {
      translateX = e.clientX - startX;
      translateY = e.clientY - startY;
      map.style.transform = `translate(${translateX}px, ${translateY}px) scale(${zoomLevel})`;
    }
  });

  mapContainer.addEventListener('mouseup', () => {
    isDragging = false;
  });

  mapContainer.addEventListener('mouseleave', () => {
    isDragging = false;
  });

  // Scroll for zoom in/out
  mapContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    zoomLevel += e.deltaY * -0.01;
    zoomLevel = Math.min(Math.max(.5, zoomLevel), 3); // Limit zoom
    map.style.transform = `translate(${translateX}px, ${translateY}px) scale(${zoomLevel})`;
  });

  // Click to navigate to street content
  document.querySelectorAll('.street').forEach(street => {
    street.addEventListener('click', () => {
      const streetName = street.getAttribute('data-street');
      window.location.href = `${streetName}.html`;
    });
  });
});
