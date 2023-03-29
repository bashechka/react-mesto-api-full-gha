import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {

  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState(currentUser.name);
  const [description, setDescription] = React.useState(currentUser.about);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }
  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="update-profile"
      title="Редактировать профиль"
      buttonName="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__container-inputs">
        <input
          onChange={handleChangeName}
          type="text"
          id="popup__container_name"
          name="form__item-name"
          placeholder="Имя"
          className="popup__container-input popup__container-input_type_name"
          minLength="2"
          maxLength="40"
          value={name}
          required />

        <span className="popup__container popup__container_name-error"></span>
        <input
          onChange={handleChangeDescription}
          type="text"
          id="popup__container_job"
          name="form__item-job"
          placeholder="О себе"
          className="popup__container-input popup__container-input_type_job"
          value={description}
          minLength="2"
          maxLength="200"
          required />

        <span className="popup__container popup__container_job-error"></span>
      </fieldset>
    </PopupWithForm>
  )

}

export default EditProfilePopup