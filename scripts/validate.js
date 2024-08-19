// function closeOverlay(){
//     const overlay = document.querySelector(".modal_opened");
//     console.log("Start")
//     if (overlay) {
//          overlay.addEventListener("click", (evt) => {
//         if (evt.target === overlay) {
//             console.log("I clicked")
//             evt.target.classList.remove("modal_opened");
//         }
//         console.log("no overlay closed");
    
//     })
//     }
   
// }

function closeOverlay() {
    // Add a click event listener to the entire document or a parent container
    document.addEventListener("click", (evt) => {
        const overlay = document.querySelector(".modal_opened");

        if (overlay && evt.target === overlay) {
            console.log("I clicked");
            overlay.classList.remove("modal_opened");
        } else {
            console.log("No overlay closed");
        }
    });
}

function closeOverlayWithEscapeKey() {
    // Add a click event listener to the entire document or a parent container
    document.addEventListener("keydown", (evt) => {
        const overlay = document.querySelector(".modal_opened");
       
        if (overlay && evt.key === "Escape") {
            console.log("I clicked");
            overlay.classList.remove("modal_opened");
        } else {
            console.log("No overlay closed");
        }
    });
}

closeOverlay()
closeOverlayWithEscapeKey()

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
    
    inputElements.forEach(inputElement => {
        inputElement.addEventListener("input", (evt) => {
            // get the input element then check input length
            const submitButton = formElement.querySelector(".modal__save");
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
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
  };

  enableValidation(config);