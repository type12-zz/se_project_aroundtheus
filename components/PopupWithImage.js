import Popup from "../components/Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector){
        super({popupSelector});
        this._popupImage = this._popupElement.querySelector('.modal__image');
        this._popupImageTitle = this._popupElement.querySelector('.modal__image-title');
    }

    open(data) {
        this._popupImage.src = data.link;
        this._popupImage.alt = data.name;
        this._popupImageTitle.textContent = data.name;
        super.open();
    }

}