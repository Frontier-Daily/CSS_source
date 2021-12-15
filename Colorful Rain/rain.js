function rain() {
    let amount = 200, body = document.querySelector('body'), i = 0;

    while(i < amount) {
        let drop = document.createElement('i'), size = Math.random() * 5,
        posX = Math.floor(Math.random() * window.innerWidth),
        delay = Math.random() * -20, duration = Math.random() * 5;

        drop.style.width = 0.2 + size + 'px';
        drop.style.left = posX + 'px';
        drop.style.animationDelay = delay + 's';
        drop.style.animationDuration = 1 + duration + 's';
        body.appendChild(drop);
        i++;
    }
}

rain();