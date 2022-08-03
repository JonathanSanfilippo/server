// Copyright (C) 2022 Jonathan Sanfilippo <jonathansanfilippo.uk@gmail.com>


function isp(){
$.getJSON('https://json.geoiplookup.io/?callback=?', function(data) {
  

  
let dati = (JSON.stringify(data,null,2));
const myArray = dati.split('"');
document.getElementById("country").innerHTML = '<i class="fa-duotone fa-location-check"></i> ' + myArray[35];


let dati2 = (JSON.stringify(data,null,2));
const myArray2 = dati2.split('"');
document.getElementById("isp").innerHTML = '<i class="fa-regular fa-satellite-dish"></i> ' + myArray2[7];



const vpn = myArray[35];
if (vpn === "United Kingdom"){
    document.getElementById("vpn").innerHTML = '<span style="">IP</span> ';
} else {
    document.getElementById("vpn").innerHTML = '<span style="color:orange;">VPN</span> ';
    document.title = "VPN Mode! ";
}


});

}
setInterval(isp, 5000);


