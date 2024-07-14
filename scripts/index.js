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

const modal = document.querySelector(".modal");
const profileFormElement = document.querySelector(".modal__container");
const clickedModalInputs = document.querySelectorAll(".modal__input");
const modalNameInput = document.querySelector("#modal__input_name");
const modalJobInput = document.querySelector("#modal__input_job");
const closeModalBtn = document.querySelector(".modal__close");
const formSaveButton = document.querySelector(".modal__save");


const addCardModal = document.querySelector(".add_modal");
const addCardFormContainerElement = document.querySelector(".add_modal__container");
const closeAddCardModalBtn = document.querySelector(".add_modal__close");
const addCardModalFormElement = document.querySelector(".add_modal__form");
const clickedAddModalFormCardInputs = document.querySelectorAll(".add_modal__input");
const addModalCardTitle = addCardModalFormElement.querySelector("#add_modal__input_title");
const addModalCardUrl = addCardModalFormElement.querySelector("#add_modal__input_url");
const formCardSaveButton = addCardModalFormElement.querySelector(".modal__save");

const likeCardButton = document.querySelector(".card__like");
const deleteCardButton = cardsList.querySelector(".card__trash_image");


const modalName = document.querySelector("#modal__input_name");
const modalJob = document.querySelector("#modal__input_job");

//EVENT HANDLERS
closeModalBtn.addEventListener("click", closeModal);
closeAddCardModalBtn.addEventListener("click", closeAddCardModal);
editButton.addEventListener("click", openEditProfileModal);
addButton.addEventListener("click", openAddCardModal);
formSaveButton.addEventListener("click", handleProfileFormSubmit);
formCardSaveButton.addEventListener("click", handleAddCardFormSubmit);
cardsList.addEventListener("click", handleLikeCard);
cardsList.addEventListener("click", handleDeleteCard);
// cardsList.addEventListener("click", () => {
//   console.log(`${data.name} card was clicked`);
// });

// **********JAVASCRIPT FUNCTIONS*********

// CLOSE MODAL
function closeModal() {
  modal.classList.remove("modal_opened");
}

function closeAddCardModal() {
  addCardModal.classList.remove("add_modal_opened");
}

// OPEN MODAL
function openEditProfileModal() {
  if (!modal.classList.contains("modal_opened")) {
    modal.classList.add("modal_opened");
    fillProfileForm();
  }
}

function openAddCardModal() {
  if (!addCardModal.classList.contains("add_modal_opened")) {
    addCardModal.classList.add("add_modal_opened");
    fillCardForm();
  }
}

//  FILL PROFILE FORM
function fillProfileForm() {
  modalNameInput.value = profileName.textContent;
  modalJobInput.value = profileJob.textContent;
}

//  FILL CARD FORM
function fillCardForm() {
  addModalCardTitle.value = addModalCardTitle.textContent;
  addModalCardUrl.value = addModalCardUrl.textContent;
}

// MODAL FORM SUBMISSION
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = modalName.value;
  profileJob.textContent = modalJob.value;
  closeModal();
}

// MODAL ADD CARD FORM SUBMISSION
function handleAddCardFormSubmit(evt) {
  console.log("Hello")
  evt.preventDefault();
  const newCardData = {
    name: addModalCardTitle.value,
    link: addModalCardUrl.value,
  };

  initialCards.push(newCardData);
  const cardElement = createCard(newCardData)
  cardsList.prepend(cardElement);
  closeAddCardModal();
}

// CLEAR MODAL INPUT FIELDS
function clearModalInputField(evt) {
  const target = evt.target;
  if (target.type === "text") {
    target.value = "";
  }
}

// LIKE CARD FUNCTION
function handleLikeCard(evt) {
  evt.preventDefault();
  const cardElement = evt.target.closest(".card");
  if (cardElement) {
    if (evt.target.classList.contains("card__like")) {
      const likeButton = cardElement.querySelector(".card__like")
      likeButton.classList.toggle("card__like_active");
      console.log("I activated");
    }
  }
}

//DELETE CARD FUNCTION
function handleDeleteCard(evt) {
  evt.preventDefault();
  const cardElement = evt.target.closest(".card");
  if (cardElement) {
    if(evt.target.classList.contains("card__trash_image")) {
      const cardElement = evt.target.closest(".card");
      cardsList.removeChild(cardElement);
    }
  }
}

// CREATE CARDS
function createCard(data) {
  // console.log("I am in Create Card");
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTrashImage = cardElement.querySelector(".card__trash_image");
  const cardTitle = cardElement.querySelector(".card__title");
  const firstWords = data.name.split("  ");
  cardImage.src = data.link;
  cardTrashImage.src = "../images/active-trash.svg";
  cardImage.alt = `image of ${firstWords}`;
  cardTitle.textContent = data.name;

  return cardElement;
}

// RENDER CARDS
function renderCard(data, firstWords) {
  const cardElement = createCard(data, firstWords);
  cardsList.prepend(cardElement);
}

// CALLING FUNCTIONS
initialCards.forEach((card) => {
  renderCard(card);
});
