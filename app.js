var player=0;
var computer=0;
const p=document.getElementsByClassName("p");
const c=document.getElementsByClassName("c");
const e=document.getElementById("result");
const rk=document.getElementsByClassName("rock");
const papr=document.getElementsByClassName("paper");
const scsor=document.getElementsByClassName("scissor");
const button=document.querySelector(".but");
rk[0].addEventListener("click",rock);
papr[0].addEventListener("click",paper);
scsor[0].addEventListener("click",scissor);
button.addEventListener("click",()=>{
    computer=0;
    player=0
    p[0].innerHTML=player;
    c[0].innerHTML=computer;
    e.innerHTML="Click to start";
})
function generate(){
    const c=['r','p','s'];
    var i=Math.floor(Math.random()*3);
    return c[i];
}
function rock(){
    const val='r'+generate();
    result(val);
}
function paper(){
    const val='p'+generate();
    result(val);
}
function scissor(){
    const val='s'+generate();
    result(val);
}
function result(a){
    switch(a){
        case 'rs':
        case 'pr':
        case 'sp':
            player++;
            p[0].innerHTML=player;
            console.log(`Player=${player}`);
            e.innerHTML="You win!!";
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            computer++;
            console.log(`Computer=${computer}`)
            c[0].innerHTML=computer;
            e.innerHTML="You Loose!!!";
            break;
        default:
            e.innerHTML="Draw !!!!";
            break;
    }
}