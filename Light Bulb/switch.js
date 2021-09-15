let btn = document.querySelector('.btn');
let body = document.querySelector('body');
btn.onclick = () => {
    body.classList.toggle('on');
    audio.play();
}