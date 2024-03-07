let lottotype
let num
let numadd
let rows
let nummax
let extra=true
let randnum
let nums=""
let extranums=""
let generatednums=[]
let biggestNums
let genloop=0
let data=[]
let numsData=""
let extranumsData=""
let dataJSON

function generate(){
    document.getElementById("outnum").innerHTML=``
    
    for(let y=1;y<=70;y++){generatednums[y]=0}

    if(lottotype==undefined){lottotype=document.getElementById("lotto").value}
    if(num==undefined){num=document.getElementById("num").value}
    if(numadd==undefined){numadd=document.getElementById("numadd").value}
    if(rows==undefined){rows=document.getElementById("rows").value}
    
    extra=true

    if(lottotype=="lotto"){nummax=40;extra=false}
    if(lottotype=="eurojackpot"){nummax=50;extramax=12}
    if(lottotype=="keno"){nummax=70;extra=false}
    if(lottotype=="vikinglotto"){nummax=48;extramax=5}

    for(let i=0;i<rows;i++){
    nums=""
    extranums=""
         for(let j=0;j<num;j++){
            randnum=Math.floor(Math.random()*nummax)+1
            nums+=`<div class='ball'>${randnum}</div>`
            generatednums[randnum]++
            numsData+=`${randnum},`
         }
        if(extra==true){
         for(let l=0;l<numadd;l++){
            randextra=Math.floor(Math.random()*extramax)+1
            extranums+=`<div class='ballextra'>${randextra}</div>`
            extranumsData=`${randextra},`
         }
        }
        document.getElementById("outnum").innerHTML+=`<div class="ballscontainer">${nums + extranums}</div><br>`
    }
    commonNumb()
}

function commonNumb(){
   let numbersSorted=[]
   let top10out = ""
   let loop=parseInt(rows)
   if(loop>10){loop=10}
   for(let f=1;f<=70;f++){
      numbersSorted[f] = generatednums[f]
   }
   numbersSorted.sort()
   numbersSorted.reverse()
   for(let g=1;g<=loop;g++){
      let currentNumb = numbersSorted[g]
      let currentIndex = generatednums.indexOf(currentNumb)
      top10out += `${currentIndex}:${currentNumb} ; `
      generatednums[currentIndex]="null"
   }
   document.getElementById("commonNums").innerHTML=`<h1>Top 10 most common numbers<br>(Not counting extra numbers)</h1><br>${top10out}`
   data[genloop]={"settings":{"lotto":lottotype,"numbers":num,"extraNumbers":numadd,"rows":rows},"stats":{"generatedNumbers":numsData,"generatedExtraNUmbers":extranumsData,"top10":top10out}}
   genloop++
}