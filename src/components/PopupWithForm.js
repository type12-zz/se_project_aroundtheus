import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._submitButton = this._popupForm.querySelector(".modal__save");
    this._inputList = this._popupForm.querySelectorAll(".modal__input");
  }

  _getInputValues() {
    // returns an object with the values of the input fields
    const inputValues = {};
    this._inputList.forEach((input) => {
      inputValues[input.name] = input.value.trim();
    });
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  }

}