"use strict"

class Login{
    constructor(){
        this.emailInput = document.querySelector("#email")
        this.passwordInput = document.querySelector("#password")
        this.loginButtonInput = document.querySelector("#login-button")
        this.messageContainer = document.querySelector(".message-container")
    }

    submit = (event) =>{
        event.preventDefault();

        const usersDB = db.getAllUsers();

        const email = this.emailInput.value;
        const password = this.passwordInput.value;

        const user = usersDB.find( (userObj) => {
            if (userObj.email === email && userObj.password === password) {
              return true;
            }
          })
        this.showMessages(user)
    }

    showMessages = (user) =>{
        this.messageContainer.innerHTML = "";
        const message = document.createElement('p')

        if(user){
            message.innerHTML = `Hola ${user.name}`;
            message.classList.add('correct-message')
        }else{
            message.innerHTML = "El email i/o password son incorrectos"
        }

        this.messageContainer.appendChild(message)


        if (user) this.redirect();
    }
  
    redirect = () => {
      setTimeout( ()=> location.assign('index.html'), 2000);
    }
  
  }
  


const login = new Login()

login.loginButtonInput.addEventListener('click', login.submit);