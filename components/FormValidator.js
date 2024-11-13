export default class FormValidator{
    constructor(formSelector, formElement) {
        this._formSelector = formSelector;
        this._formElement = formElement;
        this._inputElements = this._formElement.querySelectorAll("input");
    }

    _validateFormSubmission() {
        // console.log("im in the form submission");
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


// I'M NOT TO SURE IF THIS IS WHAT THE CHECKLIST WAS STATING TO DO