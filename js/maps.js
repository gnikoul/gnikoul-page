const map = L.map('map').setView([40.6432, 22.9312], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

L.marker([40.6432, 22.9312]).addTo(map).openPopup();