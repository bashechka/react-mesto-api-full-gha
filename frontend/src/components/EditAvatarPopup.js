import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditAvatarPopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const avatarRef = React.useRef(currentUser.avatar);

  React.useEffect(() => {
    avatarRef.current.value = '';
  }, [props.isOpen]); 

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar(avatarRef.current.value);
  }

  return (
    <PopupWithForm
      name="update-avatar"
      title="Обновить аватар"
      buttonName="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__container-inputs">
        <input
          type="url"
          id="popup__container_avatar-link"
          name="form__item-avatar-link"
          placeholder="Ссылка на аватар"
          className="popup__container-input popup__container-input_type_avatar-link"
          ref={avatarRef}
          required
        />
        <span className="popup__container popup__container_avatar-link-error"></span>
      </fieldset>
    </PopupWithForm>
  )
}

export default EditAvatarPopup





