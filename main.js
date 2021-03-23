// let cityouter=document.querySelector(".city-outer");
let cityouter=document.getElementById("city-outer");
let car1=document.querySelector(".car");
let inner_city_select=document.querySelector(".city-inner");
let cloud_select=document.querySelector(".cloud");
let countdow=document.getElementById("second");
let time=6;
 code = setInterval(countdown,1000);
 function countdown(){
     if(time>1){
            time--;
           countdow.innerHTML=time;
     }
    else{
        clearInterval(code);
        car1.classList.toggle("car1");
        document.querySelector(".time").style.display="none";
        inner_city_select.classList.toggle("city-inner1");
   cloud_select.classList.toggle("cloud1"); 
    }
  
     
 }

setInterval(function(){
    
    cityouter.classList.toggle("day_to_night");
},8000);

let light=true;
let lightarr=["lights-off.png","lights-on.png"];
let my_audio=document.getElementById("my_song");
let audio=true;
document.addEventListener("keypress",animation_control);

function animation_control(e){
if(e.keyCode==32){
   car1.classList.toggle("car1");
   inner_city_select.classList.toggle("city-inner1");
   cloud_select.classList.toggle("cloud1")
}
if(e.keyCode==108){
   if(light){
       car1.setAttribute("src",lightarr[1]);
       light=false;
   }
   else{
    car1.setAttribute("src",lightarr[0]);
    light=true;
   }
}
if(e.keyCode==109)
{
  if(audio){
      my_audio.play();
      audio=false;
    }
      else
      {
          my_audio.pause();
          audio=true;
      } 
}
}