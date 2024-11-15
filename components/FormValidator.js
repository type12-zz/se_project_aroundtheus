export default class FormValidator{
    constructor(formSelector, formElement) {
        this._formSelector = formSelector;
        this._formElement = formElement;
        this._inputElements = this._formElement.querySelectorAll("input");
    }

    setEventListeners(formElement, options) {
        const {inputSelector} = options;
        const inputElements = [...formElement.querySelectorAll(inputSelector)];
        const submitButton = formElement.querySelector(options.submitButtonSelector);
        toggleButtonState(inputElements, submitButton, options);
        
        inputElements.forEach(inputElement => {
            inputElement.addEventListener("input", (evt) => {
                // get the input element then check input length
                const submitButton = formElement.querySelector(options.submitButtonSelector);
                const inputTarget = evt.target;
                checkInputValidation(formElement, inputElement, options)
                toggleButtonState(inputElements, submitButton, options);
            })
        })
    }

    _validateFormSubmission() {
        console.log("im in the form submission");
        // fill in later
        this._formElement.addEventListener("submit", () => {
            console.log("im in the submit");
            console.log(this._inputElements);

        });
        console.log(this._formElement)
    }
    
    enableValidation() {
        // fill in later
        console.log("im in the enable validation");
        console.log(this._formElement);
    }
  
    disableValidation() {
        // fill in later
    }
}


function toggleButtonState(inputElements, submitButton, {inactiveButtonClass}) {
    let foundInvalid = false;
    inputElements.forEach(inputElement => {
        if (!inputElement.validity.valid) {
            foundInvalid = true;
            console.log("Found Invalids")
        }
    });
    
        if (foundInvalid){
            submitButton.classList.add(inactiveButtonClass);
            return submitButton.disabled = true;
        } 
        submitButton.classList.remove(inactiveButtonClass);
        submitButton.disabled = false;
        
}

function showInputError(formElement, inputElement, {inputErrorClass, errorClass}) {
    const errorMessageEl = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorMessageEl.textContent = inputElement.validationMessage;
    errorMessageEl.classList.add(errorClass);
};

function hideInputError(formElement, inputElement, {inputErrorClass, errorClass}) {
    const errorMessageEl = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorMessageEl.textContent = inputElement.validationMessage;
    errorMessageEl.classList.remove(errorClass);
};

function checkInputValidation(formElement, inputElement, options) {
    if (!inputElement.validity.valid){
        return showInputError(formElement, inputElement, options)
    }

    hideInputError(formElement, inputElement, options);
    
}

function setEventListeners(formElement, options) {
    const {inputSelector} = options;
    const inputElements = [...formElement.querySelectorAll(inputSelector)];
    const submitButton = formElement.querySelector(options.submitButtonSelector);
    toggleButtonState(inputElements, submitButton, options);
    
    inputElements.forEach(inputElement => {
        inputElement.addEventListener("input", (evt) => {
            // get the input element then check input length
            const submitButton = formElement.querySelector(options.submitButtonSelector);
            const inputTarget = evt.target;
            checkInputValidation(formElement, inputElement, options)
            toggleButtonState(inputElements, submitButton, options);
        })
    })
}


function enableValidation(options) {
    const formElements = [...document.querySelectorAll(options.formSelector)];
    
    //Get all forms in the html
    formElements.forEach((formElement) => {
        formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
        })

        setEventListeners(formElement, options);
        // look for all inputs inside of form
        // loop through all the inputs to see if all are valid
        // if input is not valid
        // get validation message
        // add error class to input
        // display error message
        // disable the button
        // if all inputs are valid 
        // enable the button
        // reset error message
    });
}


// enabling validation by calling enableValidation()
// pass all the settings on call

const config ={
    formSelector: ".modal__form",
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__save",
    inactiveButtonClass: "modal__button_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error_visible"
  };

  enableValidation(config);

// I'M NOT TO SURE IF THIS IS WHAT THE CHECKLIST WAS STATING TO DO