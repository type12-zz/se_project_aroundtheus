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

let editButton = document.querySelector(".profile__edit");
let addButton = document.querySelector(".profile__add");
let overlay = document.querySelector(".overlay");
let modal = document.querySelector(".modal");
let closeModal = document.querySelector(".modal__close");
let saveButton = document.querySelector(".modal__save");

editButton.addEventListener('click', openModal );
closeModal.addEventListener('click', openModal );

function openModal() {
  if (!modal.classList.contains("modal__opened")){
    modal.classList.add("modal__opened");
    overlay.classList.add("modal__opened");
  } else {
    modal.classList.remove("modal__opened");
    overlay.classList.remove("modal__opened");
  }

}