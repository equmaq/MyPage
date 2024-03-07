let fruits = ["🍇","🍇","🍈","🍈","🍉","🍉","🍊","🍊","🍊","🍋","🍋","🍌","🍌","🍍","🥭","🥭","🍎","🍎","🍏","🍏","🍐","🍑","🍑","👑"] // Some emojis are repeated for increased randomness
// was i supposed to use images, i feel like i was... oh well!
let pointsArrFruit = ["🍇","🍈","🍉","🍊","🍋","🍌","🍍","🥭","🍎","🍏","🍐","🍑","👑"] 
let pointsArr = [1,2,3,7,8,9,9,10,11,12,13,16,18]
let b1
let b2
let b3
let points = 0
let random
let winrandom
let effectcount = 0
const spinsound = document.getElementById("spin")
const win = document.getElementById("win")
const bigwin = document.getElementById("bigwin")

function spineffect(){ // this function is started by the spin button
    // basically moves the fruits one row donw and generates new ones for the top row
    // This is all just for show
    spinsound.play()
    document.getElementById("8").innerHTML=document.getElementById("5").innerText
    document.getElementById("7").innerHTML=document.getElementById("4").innerText
    document.getElementById("6").innerHTML=document.getElementById("3").innerText

    document.getElementById("5").innerHTML=document.getElementById("2").innerText
    document.getElementById("4").innerHTML=document.getElementById("1").innerText
    document.getElementById("3").innerHTML=document.getElementById("0").innerText

    for(let j=0;j < 3;j++){
        document.getElementById(j).innerHTML=fruits[(Math.random() * 12).toFixed(0)]
    } 

    // The function is repeated 10 times on a 70ms interval and starts spin() after is is done running
    effectcount++
    if(effectcount < 10){
    setTimeout(spineffect, 70)
    } else {
        spin()
    }
}

function spin(){
    spinsound.play()
    for(let i=0;i < 8;i++){ // sets each of the 9 squares to a random emoji
        document.getElementById(i).innerHTML=fruits[(Math.random() * 12).toFixed(0)] 
      spinsound.play()  
    }
    spinsound.play()
    if((Math.random() * 30).toFixed(0) == 3){ // Gives a random fruitX3 win 1/30 of the time
            random = fruits[(Math.random() * 12).toFixed(0)]
            document.getElementById("3").innerHTML=random
            document.getElementById("4").innerHTML=random
            document.getElementById("5").innerHTML=random
    } else if ((Math.random() * 100).toFixed(0) == 1){ // gives the 3xcrown big win 1/100 of the time
            document.getElementById("3").innerHTML=fruits[24]
            document.getElementById("4").innerHTML=fruits[24]
            document.getElementById("5").innerHTML=fruits[24]
    }
    // three variables are set to the inner thex of the three middle emojis
    b1 = document.getElementById("3").innerText
    b2 = document.getElementById("4").innerText
    b3 = document.getElementById("5").innerText
    if(b1 == b2 && b2 == b3){ // Check if the three middle emojis match and awards points if true
        points += (pointsArr[(pointsArrFruit.indexOf(b1))] * 2) // pointsArr is cross referenced with pointsArrFruit to determine the amout of points the player should get
        document.getElementById("points").innerHTML=points // Point counter is updated
        
        if (b1 == "👑"||b2 == "👑"||b3 == "👑"){ // check if win was big win
            bigwin.play() // plays big win sound
        } else { // else palys normal win sound
            win.play()
        }
    } else if (b1 == b2 ||b2 == b3){ // Checks if palyer got FruitX2win but works the same as the FruitX3 win check exept it does not give dubble points
        points += (pointsArr[(pointsArrFruit.indexOf(b1))])
        document.getElementById("points").innerHTML=points
        if (b1 == "👑"||b2 == "👑"||b3 == "👑"){ // check if win was big win
            bigwin.play() // plays big win sound
        } else { // else palys normal win sound
            win.play()
        }
    }
} 


