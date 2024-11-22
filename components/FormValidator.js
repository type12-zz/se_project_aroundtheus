export default class FormValidator {
  constructor(options, formElement) {
    const {
      formSelector,
      inputSelector,
      submitButtonSelector,
      inactiveButtonClass,
      inputErrorClass,
      errorClass,
    } = options;

    this._options = options;
    this._form = formElement;
    this._submitButton = this._form.querySelector(submitButtonSelector);
    this._inputElements = this._form.querySelectorAll(inputSelector);
    this._formSelector = formSelector;
    this._inputSelector = inputSelector;
    this._submitButtonSelector = submitButtonSelector;
    this._inactiveButtonClass = inactiveButtonClass;
    this._inputErrorClass = inputErrorClass;
    this._errorClass = errorClass;
  }

  // Toggles the state of the submit button
  _toggleButtonState() {
    const hasInvalidInput = Array.from(this._inputElements).some(
      (inputElement) => !inputElement.validity.valid
    );
    if (hasInvalidInput) {
      this.disableButton();
    } else {
      this.enableButton();
    }
  }

  disableButton() {
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.disabled = true;
  }

  enableButton() {
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.disabled = false;
  }

  // Displays an input error
  _showInputError(inputElement) {
    const errorMessageEl = this._form.querySelector(
      `#${inputElement.id}-error`
    );

    inputElement.classList.add(this._inputErrorClass);
    errorMessageEl.textContent = inputElement.validationMessage;
    errorMessageEl.classList.add(this._errorClass);
  }

  // Hides an input error
  _hideInputError(inputElement) {
    const errorMessageEl = this._form.querySelector(
      `#${inputElement.id}-error`
    );

    inputElement.classList.remove(this._inputErrorClass);
    errorMessageEl.textContent = "";
    errorMessageEl.classList.remove(this._errorClass);
  }

  // Checks if the input is valid and handles errors accordingly
  _checkInputValidation(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  // Adds event listeners to input fields and the submit button
  _setEventListeners() {
    this._toggleButtonState();

    this._inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidation(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}
