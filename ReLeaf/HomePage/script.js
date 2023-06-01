// Map
var greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
  
var map = L.map('map').setView([0, 0], 2); // Center the map over the globe



L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var locations = [
    {name: "Reforestation 1", latitude: 39.0742, longitude: 21.8243, image: "Images/reforastation1.jpg"},
    {name: "Reforestation 2", latitude: 39.8742, longitude: 22.8243, image: "Images/reforastation2.jpg"},
    {name: "Reforestation 3", latitude: 38.2742, longitude: 23.8243, image: "Images/reforastation3.jpg"}
];

for (var i = 0; i < locations.length; i++) {
    var marker = L.marker([locations[i].latitude, locations[i].longitude], {icon: greenIcon}).addTo(map)
        .bindPopup("<h3>" + locations[i].name + "</h3><div style='width: 200px; height: 200px; overflow: hidden;'><img src='" + locations[i].image + "' style='width: 100%; height: 100%; object-fit: cover;'></div>");
    if (i === 0) {
        marker.openPopup();
    }
}

// smooth Scrolling redirect
$(document).ready(function(){
    $('button').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});



window.addEventListener('load', function() {
    setTimeout(function() {
        var loadingScreen = document.getElementById('loading-screen');
        loadingScreen.style.display = 'none';
    }, 0000); // delay in milliseconds
});




//owl carousel 
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        autoplay : 5000,
        loop: true,
        margin: 10,
        nav: false, // This will hide the navigation arrows
        dots: true, // This will show the dots
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });
});

