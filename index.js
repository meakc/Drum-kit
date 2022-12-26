var len=document.querySelectorAll('.drum').length;
for( var i=0;i<len;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonClass = this.innerHTML;
    makeSound(buttonClass);    

    buttonAnimation(buttonClass);
}
);


document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key)
{
    switch (key) {
        case 'w':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case 'a':
            var kick  = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case 's':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case 'd':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case 'j':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case 'k':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case 'l':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
            
        
        default:
            break;
    }


}


function buttonAnimation(eventKey)
{
    var activebutton = document.querySelector("."+eventKey);
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },100);
}

}
function createBubble(){
    const section = document.querySelector('section');
    const createElement = document.createElement('span');
    var size = Math.random()*60;

    createElement.style.width =20 + size + 'px';
    createElement.style.height = 20 + size + 'px';
    createElement.style.left=Math.random()*innerWidth +'px';
    section.appendChild(createElement);

    setTimeout(()=>{
        createElement.remove();
    },4000)

}
setInterval(createBubble,50);
