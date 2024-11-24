export default class Card {
  constructor(data, cardSelector, handleImageClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }

  _setEventListeners() {
    this._cardImage.addEventListener("click", () => {
      this._handleImageClick({ name: this._name, link: this._link });
    });

    this._likeButton.addEventListener("click", (event) => {
      event.stopPropagation();
      this._likeCard();
    });

    this._deleteButton.addEventListener("click", () => {
      this._deleteCard();
    });
  }

  _likeCard() {
    this._likeButton.classList.toggle("card__like_active");
  }

  _deleteCard() {
    this._cardElement.remove();
    this._deleteButton = null;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card");
    // return document.querySelector("#cardTemplate").content.querySelector(".card");
  }

  getCardElement() {
    this._cardElement = this._getTemplate().cloneNode(true);
    this._cardImage = this._cardElement.querySelector(".card__image");
    this._cardTitle = this._cardElement.querySelector(".card__title");
    this._imageTitle = this._cardElement.querySelector(".modal__image-title");

    this._likeButton = this._cardElement.querySelector(".card__like");
    this._deleteButton = this._cardElement.querySelector(".card__trash_image");
    this._firstWords = this._name.split("  ");
    this._cardImage.src = this._link;
    this._cardImage.alt = `image of ${this._firstWords}`;
    this._cardTitle.textContent = this._name;
    this._setEventListeners();
    return this._cardElement;
  }
}
