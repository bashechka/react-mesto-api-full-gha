import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name,
      link,
    });
  }

  React.useEffect(() => {
    setName('');
    setLink('');
  }, [props.isOpen]);

  return (
    <PopupWithForm
      name="add-pic"
      title="Новое место"
      buttonName="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onAddPlace={props.onAddPlace}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__container-inputs">
        <input
          onChange={handleNameChange}
          type="text"
          id="popup__container_place"
          name="form__item-place"
          placeholder="Название"
          className="popup__container-input popup__container-input_type_place"
          value={name}
          minLength="2"
          maxLength="30"
          required
        />
        <span className="popup__container popup__container_place-error"></span>
        <input
          onChange={handleLinkChange}
          type="url"
          id="popup__container_link"
          name="form__item-link"
          placeholder="Ссылка на картинку"
          className="popup__container-input popup__container-input_type_link"
          value={link}
          required
        />
        <span className="popup__container popup__container_link-error"></span>
      </fieldset>
    </PopupWithForm>
  )
}

export default AddPlacePopup