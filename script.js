
const head=document.getElementById('heading')
let number=document.getElementById('num')
let result1=document.getElementById('result')

let user=parseInt(prompt("Guess Your NUmber"))

let a=Math.floor(Math.random()*100)

let ch1=head.innerHTML=a
let ch2=number.innerHTML=user

 if(ch1!=ch2)
result1.innerHTML='Incorrect'

 if(ch1==ch2){
    result1.innerHTML='correct'
 }