const popup = document.getElementById("popup");
const popup_btn = document.getElementsByClassName("popup_btn")[0];
const popup_close_btn = document.querySelector(".popup_close_btn");
const popup_area = document.querySelector(".popup_area");

document.addEventListener("DOMContentLoaded", ()=>{history.pushState(false, null, "#")});

popup_btn.onclick = function() {
    popup.classList.add("open");
    history.pushState(true, null, "#form")
}
popup_close_btn.onclick = function() {
    popup.classList.remove("open");
    history.pushState(false, null, "#");
}
window.onclick = function(e){
    if (e.target == popup_area) {
        popup.classList.remove("open");
        history.pushState(false, null, "#");
    }
}

updateState = function(){
    var state = location.hash.slice(1);
    if (state!="form") {
        popup.classList.remove("open");
    } else {
        popup.classList.add("open");
    }
}
window.addEventListener("hashchange", updateState);
