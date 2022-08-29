const slider = document.querySelector(".slides").children;
const slides = slider.length
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
const duration = 6000;

let index = 0;

prev.onclick = function(){
    slide("prev")
}

next.onclick = function(){
    slide("next")
}

function slide(direction){
    progress()
    if(direction == 'next'){
        if(index==slides-1){
            index=0;
        }
        else{
            index++;
        }
    }
    if(index == 'prev'){
        if(index == 0){
            index = slides-1
        }
        else{
            index--;
        }
    }
    for(let i = 0; i<slides; i++){
        slider[i].classList.remove("activeSlide")
    }
    slider[index].classList.add("activeSlide");
}


function progress(){
    document.querySelector(".meter").innerHTML = '';
    const div = document.createElement("div");
    div.style.height = "5px";
    div.style.width = "0px";
    div.style.position = "absolute";
    div.style.left = "0px";
    div.style.top = "0px";
    div.style.backgroundColor = "blue";
    div.id = "meter";
    div.style.animation = "progress "+ duration/1000 + "s linear";
    document.querySelector(".meter").appendChild(div);
}
progress()

function autoslide(){
    slide("next");
}
let timer = setInterval(autoslide, duration);