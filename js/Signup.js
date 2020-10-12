"use strict"

class Signup{
    constructor () {
        this.nameInput = document.querySelector("#name");
        this.emailInput = document.querySelector("#email");
        this.passwordInput = document.querySelector("#password");
        this.repeatPasswordInput = document.querySelector("#repeat-password");
    
        this.buttonInput = document.querySelector("#signup-button");
        this.errorsWrapper = document.querySelector(".message-container");
    
      }
    

    handleEmailInput = (event) => {
        const email = event.target.value;
        validator.validateValidEmail(email);
    
        const errors = validator.getErrors();

        if (!errors.invalidEmailError) {
          validator.validateUniqueEmail(email);
        }
    
        this.setErrorMessages();
        this.checkButton();
    }

    handlePasswordInput = (event) => {
        const password = event.target.value;
        const passwordRepeat = this.repeatPasswordInput.value;
    
        validator.validatePassword(password);
        validator.validatePasswordRepeat(password, passwordRepeat);
    
        this.setErrorMessages();
        this.checkButton();
    }

    handleRepeatPasswordInput = (event) => {
        const passwordRepeat = event.target.value;
        const password = this.passwordInput.value;

        validator.validatePassword(password);
        validator.validatePasswordRepeat(password, passwordRepeat);
    
        this.setErrorMessages();
        this.checkButton();
    }

saveData = (event) => {
//este metodo de event previene el comportamiento por default y no permite cargar la pagina
    event.preventDefault();

    const name = this.nameInput.value;
    const email = this.emailInput.value;
    const password = this.passwordInput.value;
    const repeatPassword = this.repeatPasswordInput.value;

    const newUser = new User(name, email, password);

    db.saveNewUser( newUser );

    //vaciar formulario: 
    this.nameInput.value = "";
    this.emailInput.value = "";
    this.passwordInput.value = "";
    this.repeatPasswordInput.value = "";

    this.showSuccessMessage();
    this.removeMessages();


    validator.resetValidator();
    this.buttonInput.disabled = true;
}


//metodos para cada uno de los inputs
addListeners = () => {
//vincula lo que ocurre en el input
    this.emailInput.addEventListener('input', this.handleEmailInput);
    this.passwordInput.addEventListener('input', this.handlePasswordInput);
    this.repeatPasswordInput.addEventListener('input', this.handleRepeatPasswordInput);

    this.buttonInput.addEventListener('click', this.saveData);
    
}

showSuccessMessage = () => {
    this.errorsWrapper.innerHTML = "";

    const errorsObj = validator.getErrors();
    const errorsStringsArr = Object.values(errorsObj);

    if (errorsStringsArr.length > 1) {
      return;
    }

    const successMessageP = document.createElement('p');
    successMessageP.innerHTML = "La cuenta ha sido creada con exito";
    
    this.errorsWrapper.appendChild(successMessageP);
    
  }

    checkButton = () => {
        const errorsObj = validator.getErrors();
        const errorsArr = Object.values(errorsObj);
        
        if (errorsArr.length > 0) {
            this.buttonInput.disabled = true;
        } else {
            this.buttonInput.disabled = false;
        }
    }

    removeMessages = () => {
        setTimeout( () => {
        this.errorsWrapper.innerHTML = "";
        }, 2000)
    }
    
    setErrorMessages = () => {
        this.errorsWrapper.innerHTML = "";

        const errorsObj = validator.getErrors();

        const errorsStringsArr = Object.values(errorsObj);

        errorsStringsArr.forEach((errorStr)=>{
            const errorMessageP = document.createElement('p');
            errorMessageP.innerHTML = errorStr;

            this.errorsWrapper.appendChild(errorMessageP);
         })

    }
}


const signup = new Signup();

window.addEventListener('load', signup.addListeners);