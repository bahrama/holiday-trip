var map = L.map('mapContainer', {
    center: [35.62,51.42],
    zoom: 13
});
var OSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }
).addTo(map);

var myIcon = L.icon({
    iconUrl: '/Images/marker-icon.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: 'my-icon-shadow.png',
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
});

var plc1= L.marker([35.62,51.42],{
    icon: myIcon,
    title:"My Position",
    draggable: true
}).addTo(map);

var plc2 = L.marker([35.62,55.42],{
    icon: myIcon,
    title:"My Position",
    draggable: true
}).addTo(map);

var distnce = plc1.getLatLng().distanceTo(plc2.getLatLng());
console.log(Math.round(distnce/1000) + "km");

var circ = L.circle([35.62,51.42], {radius: 200}).addTo(map);

plc1.on('dragend', ()=>{
    alert("Salam" + plc1.getLatLng());
})

var buttZoom = document.querySelector('#tttt');
buttZoom.addEventListener('click' , ()=>{
   map.setView( [35.62,52.42],13);
})

var inputext = document.querySelector('#intext');
inputext.addEventListener("input", (e)=>{
    console.log(e.target.value);
});

