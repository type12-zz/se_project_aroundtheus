let initialCards = [
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

const profileFormElement = document.querySelector('.modal__container');
const formElement = document.querySelector('.modal__save');
const nameInput = document.querySelector('#modal__input_name');
const jobInput = document.querySelector('#modal__input_job');

// find the profile elements in the DOM
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

let editButton = document.querySelector(".profile__edit");
let addButton = document.querySelector(".profile__add");
let overlay = document.querySelector(".overlay");
let modal = document.querySelector(".modal");
let modalName = document.querySelector("#modal__input_name");
let modalJob = document.querySelector("#modal__input_job");
let closeModalBtn = document.querySelector(".modal__close");
let saveButton = document.querySelector(".modal__save");

closeModalBtn.addEventListener('click', closeModal);
editButton.addEventListener('click', openModal );


// CLOSE MODAL
function closeModal(){
  modal.classList.remove("modal__opened");
  overlay.classList.remove("modal__opened");
}

// OPEN MODAL
function openModal() {
  if (!modal.classList.contains("modal__opened")){
    modal.classList.add("modal__opened");
    overlay.classList.add("modal__opened");
    modalName.value = profileName.textContent;
    modalJob.value = profileJob.textContent;
  } else {
    closeModal(profileFormElement)
  }
}


// MODAL FORM SUBMISSION
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = modalName.value;
  console.log(profileName.value)
  profileJob.textContent = modalJob.value;
  console.log(profileJob.textContent, modalName.value)
}

formElement.addEventListener('submit', handleProfileFormSubmit);