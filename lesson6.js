const prices =[
    price_tovar = [500, 10000, 5000],
    price_option = [2500, 3000],
    price_check = [5000],
]
const s = document.getElementsByName("my_select");
const sel = s[0];
const rez = document.getElementById("sum");
var sum = 0;
const check_box = document.getElementById("checkboxes");
const opt_rad = document.getElementById("radios");
var checkbox = document.getElementsByName("check_1");
var isChecked = false;
const option_names = document.getElementsByName("opt_names");
var r;
var count = 0;
const cost = document.getElementsByName("count");

cost[0].addEventListener('change', (e)=>{
    count = e.target.value;
})

function main() {
    var sum_extra = 0;
    if (sel.value == "3") {
        check_box.style.display = "block";
        sum = prices[0][Number(sel.value)-1];
        if (isChecked == true){
            sum_extra+=prices[2][0];
        }
    } else {
        check_box.style.display = "none";
    }
    if (sel.value == "2") {
        opt_rad.style.display = "block";
        sum = prices[0][Number(sel.value)-1];
        if (r == "opt_1"){
            sum_extra+=prices[1][0];
        }
        if (r == "opt_2"){
            sum_extra+=prices[1][1];
        }
    } else {
        opt_rad.style.display = "none";
    }
    if (sel.value == "1")
        sum = prices[0][Number(sel.value)-1];
    rez.innerHTML = sum * count + sum_extra;
}

checkbox[0].addEventListener('change',(element)=>{
    isChecked=element.target.checked;
})

option_names.forEach(function(radio) {
    radio.addEventListener("change", function(event) {
        r = event.target.value;
    });
});

window.addEventListener("change", main)