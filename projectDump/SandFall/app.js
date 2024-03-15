let width=40
let height=50
let innerhtml=""
let filledlist=[]
let color="#D7BC74"

for(let i=1;i<=width;i++){
    for(let l=1;l<=height;l++){
        innerhtml+=`<div class="block" id="${i}-${l}" style="grid-column:${i}; grid-row:${l};" onmouseover="fill(cordx=${i}, cordy=${l})"></div>`
    }  
}

document.getElementById("gridcontainer").innerHTML=innerhtml

function fill(cordx, cordy){
    document.getElementById(cordx+"-"+cordy).style.backgroundColor=color
    filledlist.push(cordx+"-"+cordy)
}

setInterval(() => {
    filledlist.forEach(element => {
        x=(element.split("-")[0])
        y=(element.split("-")[1])
        if(!filledlist.includes(x+"-"+(parseInt(y)+1)) && y!=height){
            document.getElementById(`${x}-${parseInt(y)+1}`).style.backgroundColor=color
            filledlist.push(`${x}-${parseInt(y)+1}`)
            document.getElementById(element).style.backgroundColor="black"
            filledlist=filledlist.filter(item => item !== (element));
        }else{
            if(!filledlist.includes((parseInt(x)+1)+"-"+(parseInt(y)+1)) && y!=height && x!=width && Math.floor(Math.random() * 1)>0.5){
                document.getElementById(`${parseInt(x)+1}-${parseInt(y)+1}`).style.backgroundColor=color
                filledlist.push(`${parseInt(x)+1}-${parseInt(y)+1}`)
                document.getElementById(element).style.backgroundColor="black"
                filledlist=filledlist.filter(item => item !== (element));
            }
            if(!filledlist.includes((parseInt(x)-1)+"-"+(parseInt(y)+1)) && y!=height && x!=1){
                document.getElementById(`${parseInt(x)-1}-${parseInt(y)+1}`).style.backgroundColor=color
                filledlist.push(`${parseInt(x)-1}-${parseInt(y)+1}`)
                document.getElementById(element).style.backgroundColor="black"
                filledlist=filledlist.filter(item => item !== (element));
            }
            if(!filledlist.includes((parseInt(x)+1)+"-"+(parseInt(y)+1)) && y!=height && x!=width){
                document.getElementById(`${parseInt(x)+1}-${parseInt(y)+1}`).style.backgroundColor=color
                filledlist.push(`${parseInt(x)+1}-${parseInt(y)+1}`)
                document.getElementById(element).style.backgroundColor="black"
                filledlist=filledlist.filter(item => item !== (element));
            }
        } 
    });
}, 20);