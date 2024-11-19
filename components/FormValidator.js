// export default class FormValidator{
//     constructor(formSelector, formElement) {
//         this._formSelector = formSelector;
//         this._formElement = formElement;
//         // this._inputElements = this._formElement.querySelectorAll("input");
//         this._inputElements = this._formElement.querySelectorAll(inputSelector);
//     }

//     // _setEventListeners() {
//     // // setEventListeners(formElement, options) {
//     //     const {inputSelector} = options;
//     //     const inputElements = [...this._formElement.querySelectorAll(inputSelector)];
//     //     const submitButton = this._formElement.querySelector(submitButtonSelector);
//     //     // const submitButton = this._formElement.querySelector(options.submitButtonSelector);
//     //     _toggleButtonState(this._inputElements, submitButton, options);
        
//     //     inputElements.forEach(inputElement => {
//     //         inputElement.addEventListener("input", (evt) => {
//     //             // get the input element then check input length
//     //             // const submitButton = formElement.querySelector(options.submitButtonSelector);
//     //             const inputTarget = evt.target;
//     //             this._checkInputValidation(formElement, inputElement, options)
//     //             this._toggleButtonState(inputElements, submitButton, options);
//     //         })
//     //     })
//     // }

//     // _validateFormSubmission() {
//     //     console.log("im in the form submission");
//     //     // fill in later
//     //     this._formElement.addEventListener("submit", () => {
//     //         console.log("im in the submit");
//     //         console.log(this._inputElements);

//     //     });
//     //     console.log(this._formElement)
//     // }
    
// //     enableValidation() {
// //         // fill in later
// //         console.log("im in the enable validation");
// //         console.log(this._formElement);
// //         setEventListeners();
// //     }
  
// //     disableValidation() {
// //         // fill in later
// //     }
// // }


// toggleButtonState(inputElements, submitButton, {inactiveButtonClass}) {
//     let foundInvalid = false;
//     inputElements.forEach(inputElement => {
//         if (!inputElement.validity.valid) {
//             foundInvalid = true;
//             console.log("Found Invalids")
//         }
//     });
    
//         if (foundInvalid){
//             submitButton.classList.add(inactiveButtonClass);
//             return submitButton.disabled = true;
//         } 
//         submitButton.classList.remove(inactiveButtonClass);
//         submitButton.disabled = false;
        
// }

// showInputError(formElement, inputElement, {inputErrorClass, errorClass}) {
//     const errorMessageEl = formElement.querySelector(`#${inputElement.id}-error`);
//     inputElement.classList.add(inputErrorClass);
//     errorMessageEl.textContent = inputElement.validationMessage;
//     errorMessageEl.classList.add(errorClass);
// };

// hideInputError(formElement, inputElement, {inputErrorClass, errorClass}) {
//     const errorMessageEl = formElement.querySelector(`#${inputElement.id}-error`);
//     inputElement.classList.remove(inputErrorClass);
//     errorMessageEl.textContent = inputElement.validationMessage;
//     errorMessageEl.classList.remove(errorClass);
// };

// checkInputValidation(formElement, inputElement, options) {
//     if (!inputElement.validity.valid){
//         return showInputError(formElement, inputElement, options)
//     }

//     hideInputError(formElement, inputElement, options);
    
// }

// setEventListeners(formElement, options) {
//     const {inputSelector} = options;
//     const inputElements = [...formElement.querySelectorAll(inputSelector)];
//     const submitButton = formElement.querySelector(options.submitButtonSelector);
//     toggleButtonState(inputElements, submitButton, options);
    
//     inputElements.forEach(inputElement => {
//         inputElement.addEventListener("input", (evt) => {
//             // get the input element then check input length
//             const submitButton = formElement.querySelector(options.submitButtonSelector);
//             const inputTarget = evt.target;
//             checkInputValidation(formElement, inputElement, options)
//             toggleButtonState(inputElements, submitButton, options);
//         })
//     })
// }


// enableValidation(options) {
//     const formElements = [...document.querySelectorAll(options.formSelector)];
    
//     //Get all forms in the html
//     formElements.forEach((formElement) => {
//         formElement.addEventListener("submit", (evt) => {
//             evt.preventDefault();
//         })

//         setEventListeners(formElement, options);
//         // look for all inputs inside of form
//         // loop through all the inputs to see if all are valid
//         // if input is not valid
//         // get validation message
//         // add error class to input
//         // display error message
//         // disable the button
//         // if all inputs are valid 
//         // enable the button
//         // reset error message
//     });
// }


// // enabling validation by calling enableValidation()
// // pass all the settings on call

// const config ={
//     formSelector: ".modal__form",
//     inputSelector: ".modal__input",
//     submitButtonSelector: ".modal__save",
//     inactiveButtonClass: "modal__button_disabled",
//     inputErrorClass: "modal__input_type_error",
//     errorClass: "modal__error_visible"
//   };

//   // Destructuring config
//   const {formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass} = config;

//   enableValidation(config);

// I'M NOT TO SURE IF THIS IS WHAT THE CHECKLIST WAS STATING TO DO



export default class FormValidator {
    constructor(options) {
        const {
            formSelector,
            inputSelector,
            submitButtonSelector,
            inactiveButtonClass,
            inputErrorClass,
            errorClass
        } = options;

        this._options = options;
        this._formSelector = formSelector;
        this._inputSelector = inputSelector;
        this._submitButtonSelector = submitButtonSelector;
        this._inactiveButtonClass = inactiveButtonClass;
        this._inputErrorClass = inputErrorClass;
        this._errorClass = errorClass;
    }

    // Toggles the state of the submit button
    _toggleButtonState(inputElements, submitButton) {
        const hasInvalidInput = inputElements.some(inputElement => !inputElement.validity.valid);
        if (hasInvalidInput) {
            submitButton.classList.add(this._inactiveButtonClass);
            submitButton.disabled = true;
        } else {
            submitButton.classList.remove(this._inactiveButtonClass);
            submitButton.disabled = false;
        }
    }

    // Displays an input error
    _showInputError(formElement, inputElement) {
        const errorMessageEl = formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorMessageEl.textContent = inputElement.validationMessage;
        errorMessageEl.classList.add(this._errorClass);
    }

    // Hides an input error
    _hideInputError(formElement, inputElement) {
        const errorMessageEl = formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorMessageEl.textContent = "";
        errorMessageEl.classList.remove(this._errorClass);
    }

    // Checks if the input is valid and handles errors accordingly
    _checkInputValidation(formElement, inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(formElement, inputElement);
        } else {
            this._hideInputError(formElement, inputElement);
        }
    }

    // Adds event listeners to input fields and the submit button
    _setEventListeners(formElement) {
        const inputElements = [...formElement.querySelectorAll(this._inputSelector)];
        const submitButton = formElement.querySelector(this._submitButtonSelector);

        this._toggleButtonState(inputElements, submitButton);

        inputElements.forEach(inputElement => {
            inputElement.addEventListener("input", () => {
                this._checkInputValidation(formElement, inputElement);
                this._toggleButtonState(inputElements, submitButton);
            });
        });
    }

    // Enables validation on all forms matching the selector
    enableValidation() {
        const formElements = [...document.querySelectorAll(this._formSelector)];

        formElements.forEach(formElement => {
            formElement.addEventListener("submit", (evt) => evt.preventDefault());
            this._setEventListeners(formElement);
        });
    }
}

// Usage example:
const config = {
    formSelector: ".modal__form",
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__save",
    inactiveButtonClass: "modal__button_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error_visible"
};

const formValidator = new FormValidator(config);
formValidator.enableValidation();
