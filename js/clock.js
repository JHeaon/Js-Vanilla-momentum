const clock = document.querySelector('#clock');
// clock.innerText = "Hi"

function sayHello(){
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

var now = new Date();	// 현재 날짜 및 시간
var year = now.getFullYear();	// 연도
var month = now.getMonth();	// 월
var date = now.getDate();	// 일

setInterval(sayHello, 1000)
