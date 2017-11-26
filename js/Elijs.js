$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},2000);

            }
            
        }); 
    
    });
});



$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scrollme').fadeIn(); 
        } else { 
            $('#scrollme').fadeOut(); 
        } 
    }); 
    $('#scrollme').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});
 

//***********ELi_Danmu_JS***********//
// Define 0-99 comment index
// Define danmu div
// Defin danmu content
var danmucount = 0;
var danmudiv = [];
var danmucontent =[];
var danmuleft = [];
var danmuleftwithpix = [];
var danmutop = [];

function preset(){
    for (i = 0; i < 100; i++){
        // danmuleft[i]=0;  
        danmudiv[i]="div"+i;
    }
    
}
window.onload = preset;

function danmufun(){

    //Max danmu No.=99
    if (danmucount>99)
    {
        danmucount=10;
    }
    
    //Define paragraph id as "div+index"
    //Assign input to damnucontent
     
     danmucontent[danmucount]=document.getElementById("Eli_danmuinput").value;
     
     // Define text paragraph
     // Define text node to host damnuconent
     var elidiv=document.createElement("div");
     var elitext=document.createTextNode(danmucontent[danmucount]);
     
     // Assign danmu id
     elidiv.id=danmudiv[danmucount];

     // Load paragraph back to html under Eli_damnucontainer division
     elidiv.appendChild(elitext);
     document.getElementById("Eli_danmucontainer").appendChild(elidiv);

     //Assign fix class 
     elidiv.style.color = '#008CBA';
     elidiv.style.height = '30px';
     elidiv.style.Width = '500px';
     elidiv.style.margin = '0px 0px 0px 0px';
     elidiv.style.fontFamily = '"A1_kimi"';
     elidiv.style.fontSize = '1.7rem';
     elidiv.style.left = $(window).width()+10;

     //Assign random class 

     //Assign random starting point
     var offsets = document.getElementById('Eli_danmucontainer').getBoundingClientRect();
     var offsettop_abs = document.getElementById('Eli_danmucontainer').offsetTop;
     danmutop[danmucount] = offsettop_abs+ Math.floor(((Math.random() * (offsets.bottom-offsets.top-50)) + 1)/10)*10 + "px";
     danmuleft[danmucount] = $(window).width()-20;
     danmuleftwithpix[danmucount] = danmuleft[danmucount] +"px";
    
     elidiv.style.position= 'absolute';
     elidiv.style.left= danmuleftwithpix[danmucount];
     elidiv.style.top= danmutop[danmucount];
  

      console.log(danmucontent[danmucount]);
      console.log(danmutop[danmucount]);


     danmucount++;
     document.getElementById("Eli_danmuinput").value = " "
     return false; 
}   

setInterval(function danmu_fly(){
    /// call your function here
    for (i = 0; i < 100; i++){
     danmuleft[i]=danmuleft[i]-1;
     danmuleftwithpix[i] = danmuleft[i] +"px";
     document.getElementById(danmudiv[i]).style.left=danmuleftwithpix[i];
     
     if ((0-danmuleft[i])>$(window).width() )
     {
        danmuleft[i] = $(window).width()-20;
     }


    }
    console.log(danmuleftwithpix[0]);
}, 10);

// setInterval(function(){
//     console.log("A");
// },1000);






