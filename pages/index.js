import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },

  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },

  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },

  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },

  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },

  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

// Usage example:
const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

//FORMS
const editProfileForm = document.forms.editProfileForm;
const addCardForm = document.forms.addCardForm;

// ELEMENTS
const cardsList = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#cardTemplate").content;
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const editButton = document.querySelector(".profile__edit");
const addButton = document.querySelector(".profile__add");
const cardImage = cardTemplate.querySelector(".card__image");

const profileModal = document.querySelector(".modal_type_profile");
const modalNameInput = document.querySelector("#modal__input_name");
const modalJobInput = document.querySelector("#modal__input_job");
const closeModalBtns = document.querySelectorAll(".modal__close");
const formSaveButton = document.querySelector(".modal__save");

const addCardModal = document.querySelector(".modal_type_add");
const addCardFormContainerElement = document.querySelector(".modal__container");
const closeAddCardModalBtn = document.querySelector(".modal__close");
const addModalCardTitle = addCardForm.querySelector("#modal__input_title");
const addModalCardUrl = addCardForm.querySelector("#modal__input_url");

const modalName = document.querySelector("#modal__input_name");
const modalJob = document.querySelector("#modal__input_job");
const imageModal = document.querySelector(".modal_type_image");
const closeImageModalBtn = document.querySelector(".modal__close");
const imageModalContainer = document.querySelector(".modal__image-containter");
const imageModalImage = document.querySelector(".modal__image");
const imageTitle = document.querySelector(".modal__image-title");

//EVENT HANDLERS

editButton.addEventListener("click", openEditProfileModal);
addButton.addEventListener("click", openAddCardModal);

// editProfileForm.addEventListener("submit", handleProfileFormSubmit);
// addCardForm.addEventListener("submit", handleAddCardFormSubmit);

const editProfileFormValidator = new FormValidator(config, editProfileForm);
const addCardFormValidator = new FormValidator(config, addCardForm);
const userInfo = new UserInfo({nameSelector:'.profile__name', jobSelector:'.profile__job'});

const imageModalPopup = new PopupWithImage(".modal_type_image");
// const addCardModalPopup = new PopupWithForm(addCardModal, handleFormSubmit);
const addCardModalPopup = new PopupWithForm(".modal_type_add", (formData) => {
  addCardForm.addEventListener("submit", handleAddCardFormSubmit);
});
// const profileModalPopup = new PopupWithForm(".modal_type_profile", handleFormSubmit);

const profileModalPopup = new PopupWithForm(".modal_type_profile", (formData) => { 
  userInfo.setUserInfo(formData);
  profileModalPopup.close()
  // userInfo.getUserInfo();
});

profileModalPopup.setEventListeners();
addCardModalPopup.setEventListeners();
imageModalPopup.setEventListeners();

// userInfo.getUserInfo();
console.log(`${userInfo.name} ${userInfo.job}`);


console.log(editProfileFormValidator);
editProfileFormValidator.enableValidation();
addCardFormValidator.enableValidation();
console.log(addCardFormValidator);

// addCardModalFormElement.addEventListener("submit", handleAddCardFormSubmit);

// **********JAVASCRIPT FUNCTIONS*********

// CLOSE MODAL

// closeModalBtns.forEach((button) => {
//   const popup = button.closest(".modal");
//   button.addEventListener("click", () => closePopup(popup));
// });

// function openPopup(popup) {
//   popup.classList.add("modal_opened");
//   popup.addEventListener("click", closeOverlay);
//   document.addEventListener("keydown", closeOverlayWithEscapeKey);
// }

// function closePopup(popup) {
//   popup.classList.remove("modal_opened");
//   popup.removeEventListener("click", closeOverlay);
//   document.removeEventListener("keydown", closeOverlayWithEscapeKey);
// }

// OPEN MODAL
function openEditProfileModal() {
  profileModalPopup.open();
  const userData =  userInfo.getUserInfo();
}

function openAddCardModal() {
  addCardModalPopup.open()
}

function openImageModal(data) {
  imageModalPopup.open(data);
}

//  FILL PROFILE FORM
function fillProfileForm() {
  const userData =  userInfo.getUserInfo();
  userData.name
  userData.job
}

// MODAL FORM SUBMISSION
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  // profileName.textContent = modalName.value;
  // profileJob.textContent = modalJob.value;
  const {name, job} = userInfo.getUserInfo();
  userInfo.setUserInfo(modalName, modalJob);
  // userInfo.setUserInfo(name, job);
  console.log(`handle profile: ${modalName.value} ${modalJob.value}`);
  console.log(`handle profile w/ data: ${name} ${job}`);
  // if (evt.key === "Enter") {
  //   closePopup(profileModal);
  // }

  // closePopup(profileModal);
  evt.target.reset();
}

// MODAL ADD CARD FORM SUBMISSION
function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const newCardData = {
    name: addModalCardTitle.value,
    link: addModalCardUrl.value,
  };

  // const cardElement = createCard(newCardData);
  // cardsList.prepend(cardElement);
  renderCard(newCardData);
  // if (evt.key === "Enter") {
  //   closePopup(addCardModal);
  // }
  // closePopup(addCardModal);
  addCardModalPopup.close();
  evt.target.reset();
  addCardFormValidator.disableButton();
  // evt.addCardForm.classList.add("modal__save_disabled");
}

// LIKE CARD FUNCTION
function handleLikeCard(evt) {
  // evt.target.classList.toggle("card__like_active");
}

//DELETE CARD FUNCTION
function handleDeleteCard(evt) {
  // const cardElement = evt.target.closest(".card");
  const cardElement = evt;
  // cardElement.remove();
}

// CREATE CARDS
function createCard(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const imageTitle = document.querySelector(".modal__image-title");

  const likeButton = cardElement.querySelector(".card__like");
  const deleteButton = cardElement.querySelector(".card__trash_image");
  const firstWords = data.name.split("  ");
  cardImage.src = data.link;
  cardImage.alt = `image of ${firstWords}`;
  cardTitle.textContent = data.name;
  imageTitle.textContent = data.name;

  likeButton.addEventListener("click", handleLikeCard);
  deleteButton.addEventListener("click", handleDeleteCard);
  cardImage.addEventListener("click", openImageModal);

  return cardElement;
}

// RENDER CARDS
function renderCard(data) {
  //const cardElement = createCard(data);
  const cardInstance = new Card(
    data,
    "#cardTemplate",
    openImageModal,
    handleDeleteCard,
    handleLikeCard
  );
  const cardElement = cardInstance.getCardElement();
  cardsList.prepend(cardElement);
}

// CALLING FUNCTIONS
initialCards.forEach((card) => {
  renderCard(card);
});

// ---------FORM FUNCTIONS--------------
//--------------------------------------

function closeOverlay(evt) {
  // Add a click event listener to the event using target
  if (evt.target.classList.contains("modal_opened")) {
    closePopup(evt.target);
  }
}

function closeOverlayWithEscapeKey(evt) {
  console.log("debug");
  // Add a click event listener to the entire document or a parent container
  if (evt.key === "Escape") {
    const modal = document.querySelector(".modal_opened");
    closePopup(modal);
  }
}
