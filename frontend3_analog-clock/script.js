
setInterval(() => {
    let time = new Date();
    let degree = time.getSeconds();
    degree = degree * 6;
    let a = document.querySelector(".container1");
    a.style.transform = `rotateZ(${degree}deg)`;
}, 1000);

setInterval(() => {
    let time = new Date();
    let degree = time.getMinutes();
    degree = degree * 6;
    let a = document.querySelector(".container2");
    a.style.transform = `rotateZ(${degree}deg)`;
}, 1000);

setInterval(() => {
    let time = new Date();
    let degree = time.getHours();
    if (degree > 12) {
        degree = degree - 12;
    }
    degree = degree * 30;
    let a = document.querySelector(".container3");
    a.style.transform = `rotateZ(${degree}deg)`;
}, 1000);
