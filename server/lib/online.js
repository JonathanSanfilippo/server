// Copyright (C) 2022 Jonathan Sanfilippo <jonathansanfilippo.uk@gmail.com>


function online() {
    var online = navigator.onLine;
    console.log(navigator.onLine);
    if (online == false){
        document.getElementById("rete").innerHTML = '<span>Server Off </span><span class="circle2" style="color:#fd4949;"> <i class="fa-solid fa-circle"></i></span> ';
        document.getElementById("check").innerHTML = '<span class="circle" style="color:#fd4949;"> <i class="fa-solid fa-circle"></i></span> ';
        document.getElementById("ip").innerHTML = ' --' ;
        document.getElementById("adv").innerHTML = '<span class="adv">No Internet!</span>' ;
        document.title = "Disconnected! ";
    } else {
        document.getElementById("rete").innerHTML = '<span>Server On </span><span class="circle2" style="color:limegreen;"> <i class="fa-solid fa-circle"></i></span>';
        document.getElementById("check").innerHTML = '<span class="circle" style="color:limegreen"> <i class="fa-solid fa-circle"></i></span> ';
        document.getElementById("adv").innerHTML = '' ;
        document.title = "Server v3.0 ";
        
    }
    
}
setInterval(online, 1000);

    
   