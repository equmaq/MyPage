let filled=false
let filling=false
let temperature=21
let boil=false

function fill(){
    if(filled==false){
    filling=true
    document.getElementById("fill").play()
    setTimeout(() => {
        document.getElementById("water").classList.add("animation")
    }, 4500);
    setTimeout(() => {
        temperature=12
        document.getElementById("display").innerHTML=`${temperature.toFixed(0)}°C`
    }, 4900);
    setTimeout(() => {
        filled=true
        filling=false
    }, 16000);
 }
}

function boilfun(){
    if(boil==false && filled==true){boil=true}
    else if(boil==true){boil=false}
}

const boilInterval = setInterval(() => {
    if(boil==true){
        temperature+=temperature/250
        if(temperature>100){temperature=100}
        document.getElementById("display").innerHTML=`${temperature.toFixed(0)}°C`
    }
    if(boil==false && temperature>21){
        //temperature-=0.03
        document.getElementById("display").innerHTML=`${temperature.toFixed(0)}°C`
    }
    if(boil==true && temperature>=96){
        for(let h=1;h<=6;h++){
         document.getElementById(`b${h}`).classList.add("bubbleanimation")
        }
        for(let b=1;b<=4;b++){
          document.getElementById(`wb${b}`).style.marginTop="0px"
        }
        setTimeout(() => {
         boil=false     
        }, 7000);
    }
    if(temperature<95&&boil==false){
        for(let g=1;g<=6;g++){
            document.getElementById(`b${g}`).classList.remove("bubbleanimation")   
           }
        for(let c=1;c<=4;c++){
            document.getElementById(`wb${c}`).style.marginTop="100px"
        }
    }
}, 70);

setInterval(() => {
  if (temperature >= 25 && temperature < 35) {
    document.getElementById("display").style.borderColor = "rgb(0, 183, 255)";
  } else if (temperature >= 35 && temperature < 45) {
    document.getElementById("display").style.borderColor = "rgb(238, 255, 0)";
  } else if (temperature >= 45 && temperature < 65) {
    document.getElementById("display").style.borderColor = "rgb(255, 196, 0)";
  } else if (temperature >= 65 && temperature < 80) {
    document.getElementById("display").style.borderColor = "rgb(255, 153, 0)";
  } else if (temperature >= 80 && temperature < 90) {
    document.getElementById("display").style.borderColor = "rgb(255, 102, 0)";
  } else if (temperature >= 90) {
    document.getElementById("display").style.borderColor = "red";
  }
}, 100);