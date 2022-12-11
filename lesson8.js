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
window.addEventListener("hashchange", function(){ //функция updateState
    var state = location.hash.slice(1);
    if (state!="form") {
        popup.classList.remove("open");
    } else {
        popup.classList.add("open");
    }});
   
let names = document.getElementById('name');
let email = document.getElementById('mail');
let msg = document.getElementById('text');
let cb = document.getElementById('confirm');
function save() {
    localStorage.setItem('Имя', names.value);
    localStorage.setItem('Почта', email.value);
    localStorage.setItem('Сообщение', msg.value);
    if (cb.checked) {
    localStorage.setItem('Чекбокс', 1);
    } else {
    localStorage.setItem('Чекбокс', 0);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    names.value = localStorage.getItem('Имя');
    email.value = localStorage.getItem('Почта');
    msg.value = localStorage.getItem('Сообщение');
    let checkBox = localStorage.getItem('Чекбокс');
    if (checkBox == 1) {
      cb.checked = true;
    } else if (checkBox == 0) {
      cb.checked = false;
    }
  
    names.oninput = save;
    email.oninput = save;
    msg.oninput = save;
    cb.oninput = save;
    $(function () {
      $("#form").submit(function (e) {
        e.preventDefault();

        var href = $(this).attr("action");
        $.ajax({
          type: "POST",
          dataType: "json",
          url: href,
          data: $(this).serialize(),
          success: function (response) {
            if ((cb.checked == true) && (response.status == "success")) {
              alert("Форма отправлена");
              localStorage.removeItem('Имя');
              localStorage.removeItem('Почта');
              localStorage.removeItem('Сообщение');
              localStorage.removeItem('Чекбокс');
              names.value = localStorage.getItem('Имя');
              email.value = localStorage.getItem('Почта');
              msg.value = localStorage.getItem('Сообщение');
              cb.checked = false;
              popup.classList.remove("open");
              history.pushState(false, null, "#");
            } else {
              alert("Подтвердите согласие");
            }
          }
        });
      });
    });
  });
