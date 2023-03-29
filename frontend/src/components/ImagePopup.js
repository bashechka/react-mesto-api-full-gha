import React from 'react';

function ImagePopup(props) {
  return (
    <div className={ 
      `popup popup_type_${props.name} ${props.isOpen ? "popup_open" : ""}` 
    }
    >
      <div name="popup-open-pic" className="popup__container">
        <button type="button" className="popup__close-icon" onClick={props.onClose}></button>
        <img className="popup__photo" src={props.card.link} alt={props.card.name}></img>
        <p className="popup__photo-caption">{props.card.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;