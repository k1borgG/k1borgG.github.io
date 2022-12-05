function Summa() {
    let price = document.getElementsByName("cost");
    let count = document.getElementsByName("count");
    let result = document.getElementById("sum");
    // Для price реализация иная в самом HTML
    if (isNaN(count[0].value)) {
        alert('Неверный формат числа');
        result.innerHTML = 0;
    } else {
        result.innerHTML = (Number(price[0].value) * Number(count[0].value));
    }
    return false;
}
document.addEventListener("DOMContentLoaded", Summa);