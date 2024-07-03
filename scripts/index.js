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

// ELEMENTS
const cardList = document.querySelector(".cards__list");
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const editButton = document.querySelector(".profile__edit");
const addButton = document.querySelector(".profile__add");
const overlay = document.querySelector(".overlay");
const profileFormElement = document.querySelector('.modal__container');
const modalNameInput = document.querySelector('#modal__input_name');
const modalJobInput = document.querySelector('#modal__input_job');
const modal = document.querySelector(".modal");
const modalName = document.querySelector("#modal__input_name");
const modalJob = document.querySelector("#modal__input_job");
const closeModalBtn = document.querySelector(".modal__close");
const formSaveButton = document.querySelector(".modal__save");

//EVENT HANDLERS
closeModalBtn.addEventListener('click', closeModal);
editButton.addEventListener('click', openModal );
formSaveButton.addEventListener('click', handleProfileFormSubmit);

// MAPPING ITEMS
const firstWords = initialCards.map(card => card.name.split(' ')[0]);

// **********JAVASCRIPT FUNCTIONS*********

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


for (let item=0; item < initialCards.length; item++){
  // loop through initalCard
  let profileCard = `
    <li class="card">
      <img
        src="${initialCards[item].link}"
        alt="image of ${firstWords[item]}"
        class="card__image"
      />
      <div class="card__description">
        <h2 class="card__title">${initialCards[item].name }</h2>
        <button type="button" class="card__like"></button>
      </div>
    </li>
  `
  const newCard = document.createElement("li");
  newCard.innerHTML = profileCard;

  // Place newly created card in cardList
  cardList.appendChild(newCard);
}



