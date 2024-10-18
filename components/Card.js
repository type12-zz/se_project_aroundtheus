export default class Card {
    constructor(data, cardSelector, handleImageClick) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleImageClick = handleImageClick;
        
    }

    _setEventListeners() {
        this._cardImage.addEventListener("click", () => {
            this._handleImageClick(this);
        });
    }

    // _likeCard() {
    //     this._likeButton.classList.toggle("card__like_active");
    // }

    // _deleteCard() {
    //     this._card.remove();
    //     this._card = null;
    // }

    _getTemplate() {
        return document.querySelector("#cardTemplate").content
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
        // this._imageTitle.textContent = this._name;

        this._likeButton.addEventListener("click", this._handleLikeCard);
        // this._deleteButton.addEventListener("click", handleDeleteCard);
        // this._cardImage.addEventListener("click", openImageModal);

        // call this._setEvenetListeners()
        return this._cardElement
    }
}