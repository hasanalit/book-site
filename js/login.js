"use strict"

const elForm = document.querySelector(".form")
const elUsernameInput = document.querySelector(".input-username")
const elPasswordInput = document.querySelector(".input-password")
const elError = document.querySelector(".error")

elForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const usernameInput = elUsernameInput.value;
    const passwordInput = elPasswordInput .value;

    fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            "email": usernameInput,
            "password": passwordInput,
        }),
    }).then((res) => res.json()).then((data) => {
        if(data.token){
            window.localStorage.setItem("token", data.token)

            window.location.replace("index.html")
        }else {
            let newDesc = document.createElement('p')

            newDesc.setAttribute('class', 'login-desc')

            newDesc.textContent = "Error"

            elError.appendChild(newDesc)
        }
    });
})