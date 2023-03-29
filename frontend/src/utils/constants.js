export const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
  
export const popupPhoto = document.querySelector('.popup_type_open-pic');
export const pic = document.querySelector('.popup__photo');
export const caption = document.querySelector('.popup__photo-caption');

export const mainContent = document.querySelector('.main-content');
//const photoItemTemplate = document.querySelector('#photo__list-item').content;
export const photoList = document.querySelector('.photo__list');
export const photoListSelector = '.photo__list';
export const popups = document.querySelectorAll('.popup');
//popup_type_profile
export const popupProfile = document.querySelector('.popup_type_profile');
export const editButton = mainContent.querySelector('.profile__edit-button');
//const popupProfileCloseIcon = popupProfile.querySelector('.popup__close-icon');
export const profileFormElement = popupProfile.querySelector('.popup__container');
export const nameInput = popupProfile.querySelector('.popup__container-input_type_name');
export const jobInput = popupProfile.querySelector('.popup__container-input_type_job');
export const profileNameElement = mainContent.querySelector('.profile__name');
export const profileJobElement = mainContent.querySelector('.profile__job');
//popup_type_add-pic
export const popupAddPic = document.querySelector('.popup_type_add-pic');
export const addPicFormElement = popupAddPic.querySelector('.popup__container');


export const addPicButtonElement = document.querySelector('.popup__container-create-button');
//const popupAddPicCloseIcon = popupAddPic.querySelector('.popup__close-icon');
export const placeInput = popupAddPic.querySelector('.popup__container-input_type_place');
export const linkInput = popupAddPic.querySelector('.popup__container-input_type_link');
export const profileButtonElement = document.querySelector('.profile__add-button');
export const image = document.querySelector('#photo__list-item').content.querySelector('.photo__list-item').querySelector('.photo__list-image');
export const avatarEditButtonElement = document.querySelector('.profile__avatar-edit-button');
export const avatarInput = document.querySelector('.popup__container-input_type_avatar-link');


export const settings = {  
  formSelector: '.popup__form',
  inputSelector: '.popup__container-input',
  submitButtonSelector: '.popup__button',
  inputErrorClass: 'popup__container-input_type_error',
  inputErrorActiveClass: 'popup__container-input_error-active',
  submitButtonInactiveClass: 'popup__button_inactive'
}