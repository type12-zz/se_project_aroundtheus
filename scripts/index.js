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
const addCardModalFormElement = addCardModal.querySelector(".modal__form");

const addModalCardTitle = addCardModalFormElement.querySelector(
  "#modal__input_title"
);
const addModalCardUrl =
  addCardModalFormElement.querySelector("#modal__input_url");

const modalName = document.querySelector("#modal__input_name");
const modalJob = document.querySelector("#modal__input_job");
const imageModal = document.querySelector(".modal_type_image");
const closeImageModalBtn = document.querySelector(".modal__close");
const imageModalContainer = document.querySelector(".modal__image_containter");
const imageModalImage = document.querySelector(".modal__image");
const imageTitle = document.querySelector(".modal__image_title");

//EVENT HANDLERS

editButton.addEventListener("click", openEditProfileModal);
addButton.addEventListener("click", openAddCardModal);
profileModal
  .querySelector(".modal__form")
  .addEventListener("submit", handleProfileFormSubmit);

addCardModalFormElement.addEventListener("submit", handleAddCardFormSubmit);

// **********JAVASCRIPT FUNCTIONS*********

// CLOSE MODAL

closeModalBtns.forEach((button) => {
  const popup = button.closest(".modal");
  button.addEventListener("click", () => closePopup(popup));
});

function openPopup(popup) {
  popup.classList.add("modal_opened");
}

function closePopup(popup) {
  popup.classList.remove("modal_opened");
}

// OPEN MODAL
function openEditProfileModal() {
  openPopup(profileModal);
  fillProfileForm();
}

function openAddCardModal() {
  openPopup(addCardModal);
}

function openImageModal(evt) {
  openPopup(imageModal);
  const cardImage = evt.target;
  const cardTitle = cardImage.closest(".card").querySelector(".card__title");
  const imageTitle = cardImage.closest(".card").querySelector(".card__title");

  imageModalImage.src = cardImage.src;
  imageModalImage.alt = cardImage.alt;
  imageTitle.textContent = cardTitle.textContent;

  console.log(`${imageModalImage.src} card was clicked`);
}

//  FILL PROFILE FORM
function fillProfileForm() {
  console.log("I was called in the profile form");
  modalNameInput.value = profileName.textContent;
  modalJobInput.value = profileJob.textContent;
}

// MODAL FORM SUBMISSION
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = modalName.value;
  profileJob.textContent = modalJob.value;
  closePopup(profileModal);
  evt.target.reset();
}

// MODAL ADD CARD FORM SUBMISSION
function handleAddCardFormSubmit(evt) {
  console.log("Hello");
  evt.preventDefault();
  const newCardData = {
    name: addModalCardTitle.value,
    link: addModalCardUrl.value,
  };

  const cardElement = createCard(newCardData);
  cardsList.prepend(cardElement);
  closePopup(addCardModal);
  evt.target.reset();
}

// LIKE CARD FUNCTION
function handleLikeCard(evt) {
  evt.target.classList.toggle("card__like_active");
}

//DELETE CARD FUNCTION
function handleDeleteCard(evt) {
  const cardElement = evt.target.closest(".card");
  cardElement.remove();
}

// CREATE CARDS
function createCard(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");

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
  const cardElement = createCard(data);
  cardsList.prepend(cardElement);
}

// CALLING FUNCTIONS
initialCards.forEach((card) => {
  renderCard(card);
});
