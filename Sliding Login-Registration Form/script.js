const signinBtn = document.querySelector('.signinBtn');
const signupBtn = document.querySelector('.signupBtn');
const formBx = document.querySelector('.formBx');
const body = document.querySelector('body');

signupBtn.onclick = () => {
    formBx.classList.add('active');
    body.classList.add('active');
}

signinBtn.onclick = () => {
    formBx.classList.remove('active');
    body.classList.remove('active');
}