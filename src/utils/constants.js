const lagoDiBraiesImage = new URL("../images/lago.jpg", import.meta.url);
const yosemiteVallyImage = new URL("../images/yosemite.jpg", import.meta.url);
const lakeLouiseImage = new URL("../images/lake-louise.jpg", import.meta.url);
const baldMountainsImage = new URL("../images/bald-mountains.jpg", import.meta.url);
const latemarImage = new URL("../images/latemar.jpg", import.meta.url);
const vanoiseNationalParkImage = new URL("../images/vanoise.jpg", import.meta.url);

export const initialCards = [
    {
      name: "Yosemite Valley",
      link: yosemiteVallyImage,
    },
  
    {
      name: "Lake Louise",
      link: lakeLouiseImage,
    },
  
    {
      name: "Bald Mountains",
      link: baldMountainsImage,
    },
  
    {
      name: "Latemar",
      link: latemarImage,
    },
  
    {
      name: "Vanoise National Park",
      link: vanoiseNationalParkImage,
    },
  
    {
      name: "Lago di Braies",
      link: lagoDiBraiesImage,
    },
  ];

  export const config = {
    formSelector: ".modal__form",
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__save",
    inactiveButtonClass: "modal__button_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error_visible",
  };