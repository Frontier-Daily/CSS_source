const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const numberOfParticles = 200;
let particlesArray = [];
const pumpkin = new Image();
pumpkin.src = 'pumpkin1.png';

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 100 + 50;
        this.speed = Math.random() * 5 + 1;
        this.angle = Math.random() * 360;
        this.spin = Math.random() < 0.5 ? -1 : 1;
    }
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle * Math.PI/360 * this.spin);
        ctx.drawImage(pumpkin, 0 - this.size/2, 0 - this.size/2, this.size, this.size);
        ctx.restore();
    }
    update() {
        this.angle += 2;
        if(this.y - this.size > canvas.height) {
            this.y = 0 - this.size;
            this.x = Math.random() * canvas.width;
            this.size = Math.random() * 100 + 50;
            this.speed = Math.random() * 5 + 1;
        }
        this.y += this.speed;
    }
}

const particle1 = new Particle();
function init() {
    for(let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }
}
init();

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].draw();
        particlesArray[i].update();
    }
    requestAnimationFrame(animate);
}
animate();