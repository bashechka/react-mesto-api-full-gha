import React from 'react';

function PopupWithForm(props) {
  return (
    <div className={
      props.isOpen
        ? `popup popup_type_${props.name} popup_open`
        : `popup popup_type_${props.name} `
    }
    >
      <form name={props.name} className="popup__container popup__form" onSubmit={props.onSubmit}>
        <button type="button" className="popup__close-icon" onClick={props.onClose}></button>
        <h2 className="popup__container-heading">{props.title}</h2>
        {props.children}
        <button type="submit" className="popup__button popup__container-save-button">{props.buttonName}</button>
      </form>
    </div>
  );
}

export default PopupWithForm;