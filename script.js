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