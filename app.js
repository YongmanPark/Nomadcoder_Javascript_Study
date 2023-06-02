const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

//const link = document.querySelector("a");

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    console.log(username);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleLinkClick(){
    alert('click');
}

loginForm.addEventListener("submit", onLoginSubmit);
//link.addEventListener("click", handleLinkClick);
