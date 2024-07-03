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


// find the profile elements in the DOM
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const editButton = document.querySelector(".profile__edit");
const addButton = document.querySelector(".profile__add");
const overlay = document.querySelector(".overlay");
const profileFormElement = document.querySelector('.modal__container');
const formElement = document.querySelector('.modal__save');
const modalNameInput = document.querySelector('#modal__input_name');
const modalJobInput = document.querySelector('#modal__input_job');
const modal = document.querySelector(".modal");
const modalName = document.querySelector("#modal__input_name");
const modalJob = document.querySelector("#modal__input_job");
const closeModalBtn = document.querySelector(".modal__close");
const saveButton = document.querySelector(".modal__save");

closeModalBtn.addEventListener('click', closeModal);
editButton.addEventListener('click', openModal );
saveButton.addEventListener('click', handleProfileFormSubmit);


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
    modalNameInput.value = profileName.textContent;
    modalJobInput.value = profileJob.textContent;
  } else {
    closeModal(profileFormElement)
  }
}


// MODAL FORM SUBMISSION
function handleProfileFormSubmit(evt){
  evt.preventDefault();
  profileName.textContent = modalName.value;
  profileJob.textContent = modalJob.value;
  closeModal();
}
