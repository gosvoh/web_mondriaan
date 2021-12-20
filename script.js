let modal = document.querySelector(".modal-container");
let btn = document.querySelector(".button");
let closeBtn = document.querySelector(".close-btn")

btn.onclick = function(){
    modal.style.display = "flex"
}

closeBtn.onclick = function () {
    modal.style.display = "none"
}

window.onclick = function(e){
    if(e.target === modal){
        modal.style.display = "none"
    }
}

let images = document.querySelector('.images').children;
for (let i = 0; i < images.length; i++) {
    images[i].style.backgroundImage = 'url(./img/' + i + '.jpg)';
    images[i].style.backgroundSize = 'cover';
    images[i].style.backgroundPosition = 'center';
}