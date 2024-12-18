import "./index.css";
import { initialCards, config } from "../utils/constants.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";

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

const editProfileFormValidator = new FormValidator(config, editProfileForm);
const addCardFormValidator = new FormValidator(config, addCardForm);
const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  jobSelector: ".profile__job",
});

const imageModalPopup = new PopupWithImage(".modal_type_image");
const addCardModalPopup = new PopupWithForm(".modal_type_add", (formData) => {
  addCardForm.addEventListener("submit", handleAddCardFormSubmit);
});

const profileModalPopup = new PopupWithForm(
  ".modal_type_profile",
  (formData) => {
    userInfo.setUserInfo(formData);
  }
);

profileModalPopup.setEventListeners();
addCardModalPopup.setEventListeners();
imageModalPopup.setEventListeners();

editProfileFormValidator.enableValidation();
addCardFormValidator.enableValidation();

// **********JAVASCRIPT FUNCTIONS*********

// OPEN MODAL
function openEditProfileModal() {
  profileModalPopup.open();
  const userData = userInfo.getUserInfo();
  modalName.value = userData.name;
  modalJob.value = userData.job;
}

function openAddCardModal() {
  addCardModalPopup.open();
}

function openImageModal(data) {
  imageModalPopup.open(data);
}

//  FILL PROFILE FORM
function fillProfileForm() {
  const userData = userInfo.getUserInfo();
  userData.name;
  userData.job;
}

// MODAL FORM SUBMISSION
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const { name, job } = userInfo.getUserInfo();
  userInfo.setUserInfo(modalName, modalJob);

  console.log(`handle profile: ${modalName.value} ${modalJob.value}`);
  console.log(`handle profile w/ data: ${name} ${job}`);

  evt.target.reset();
}

// MODAL ADD CARD FORM SUBMISSION
function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const newCardData = {
    name: addModalCardTitle.value,
    link: addModalCardUrl.value,
  };

  renderCard(newCardData);

  addCardModalPopup.close();
  evt.target.reset();
  addCardFormValidator.disableButton();
}

// LIKE CARD FUNCTION
function handleLikeCard(evt) {}

//DELETE CARD FUNCTION
function handleDeleteCard(evt) {
  const cardElement = evt;
}

// CREATE CARDS

// RENDER CARDS
function renderCard(data) {
  const cardInstance = new Card(
    data,
    "#cardTemplate",
    openImageModal,
    handleDeleteCard,
    handleLikeCard
  );
  const cardElement = cardInstance.getCardElement();
  cardSection.addItem(cardElement);
}

// CALLING FUNCTIONS
const cardSection = new Section(
  {
    items: initialCards,
    renderer: renderCard,
  },
  ".cards__list"
);
cardSection.renderItems(initialCards);

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
