// Copyright (C) 2022 Jonathan Sanfilippo <jonathansanfilippo.uk@gmail.com>

// recupero ip
function ip() {
$.getJSON('https://api.ipify.org?format=jsonp&callback=?', function(data) {
  
let dati = (JSON.stringify(data,null,2));
const myArray = dati.split('"');
document.getElementById("ip").innerHTML = myArray[3];


});
}
setInterval(ip, 5000);