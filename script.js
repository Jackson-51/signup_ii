let inputPassword = document.querySelector(".password input");

document.querySelector(".password span").addEventListener("click", (e) => {
    inputPassword.type = (inputPassword.type === 'password')? 'text' : 'password';
    e.currentTarget.classList.toggle('hidden');
});