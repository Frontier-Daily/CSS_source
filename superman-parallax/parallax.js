// superman
let layer2 = document.querySelector(".layer2");
scroll = window.pageYOffset;
document.addEventListener("scroll", (i) => {
    const offset = window.pageYOffset;
    scroll = offset;
    layer2.style.height = (scroll/1.5) + '%';
});

// left cloud
let clayer1 = document.querySelector("#clayer1 div");
scroll = window.pageYOffset;
document.addEventListener("scroll", (i) => {
    const offset = window.pageYOffset;
    scroll = offset;
    clayer1.style.left = -(scroll/10)+7 + '%';
});

// right cloud
let clayer2 = document.querySelector("#clayer2 div");
scroll = window.pageYOffset;
document.addEventListener("scroll", (i) => {
    const offset = window.pageYOffset;
    scroll = offset;
    clayer2.style.left = (scroll/10)+54 + '%';
});

// moon
let moon = document.querySelector(".moon");
scroll = window.pageYOffset;
document.addEventListener("scroll", (i) => {
    const offset = window.pageYOffset;
    scroll = offset;
    moon.style.left = (-scroll/9)+20 + '%';
    moon.style.top = (-scroll/9)+15 + '%';
});
