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

const editButton = document.querySelector(".profile__edit");
const addButton = document.querySelector(".profile__add");
const addModalCardTitle = addCardForm.querySelector("#modal__input_title");
const addModalCardUrl = addCardForm.querySelector("#modal__input_url");

const modalName = document.querySelector("#modal__input_name");
const modalJob = document.querySelector("#modal__input_job");

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
  const newCardData = {
    name: formData.title,
    link: formData.link,
  };

  renderCard(newCardData);
  addCardForm.reset();
  addCardFormValidator.disableButton();
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

// MODAL ADD CARD FORM SUBMISSION
function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const newCardData = {
    name: addModalCardTitle.trim(),
    link: addModalCardUrl.trim(),
  };

  renderCard(newCardData);

  addCardModalPopup.close();
  evt.target.reset();
  addCardFormValidator.disableButton();
}

// CREATE CARDS

// RENDER CARDS
function renderCard(data) {
  const cardElement = createCard(data);
  cardSection.addItem(cardElement);
}

// CREATE CARDS
function createCard(item) {
  const cardInstance = new Card(item, "#cardTemplate", openImageModal);
  return cardInstance.getCardElement();
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
