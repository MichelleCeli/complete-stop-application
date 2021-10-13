calcOrderSection();

function calcOrderSection(){

    var window_width = window.innerWidth; 
    var window_height = window.innerHeight;
    
    
    var header_height;
    var info_height;
    
    header_height = document.getElementById("header-container").offsetHeight;
    info_height = document.getElementById("information-container").offsetHeight;
 
     document.getElementById("orders-section").style.height = window_height - header_height - info_height + 'px'; 
    
    }
    /* 
     document.getElementById("navbar").style.backgroundSize = "cover"; 
     document.getElementById("navbar").style.backgroundPosition = "left"; 
    
     */


      window.addEventListener('resize', function () { 
        "use strict";
        window.location.reload(); 
        console.log("resized");
        calcHeaderValues();
    }); 
     
    