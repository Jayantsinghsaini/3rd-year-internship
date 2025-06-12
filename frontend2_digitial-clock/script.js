
let darkMode = document.querySelector("#darkModeID");
darkMode.addEventListener("click", () => {
    document.body.classList.toggle("toggle");
    darkMode.classList.toggle("btnToggle");


})

setInterval(() => {
    let time = new Date();
    let a = time.getSeconds();

    let x = time.getHours();;
    let y = time.getMinutes();;

    let c = time.getDate();;
    let d = time.getMonth() + 1;;
    let e = time.getDay();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayName = days[e].toUpperCase();
    if (a < 10) {
        a = "0" + a;

    }
    if (x < 10) {
        x = "0" + x;
    }
    if (y < 10) {
        y = "0" + y;
    }
    if (c < 10) {
        c = "0" + c;
    }
    if (d < 10) {
        d = "0" + d;
    }
    let b = x + ":" + y;
    document.querySelector(".second").innerHTML = `${a}`;
    document.querySelector(".hours").innerHTML = `${b}`;
    document.querySelector(".date").innerHTML = `${d}-${c}`;
    document.querySelector(".day").innerHTML = `${dayName}`;
}, 1000);

