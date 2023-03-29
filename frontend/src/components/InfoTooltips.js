import React from 'react';
import tooltip_login from '../images/confirm.png';
import tooltip_fail from '../images/fail.png'

function InfoTooltip(props) {

  const { name, isRegisterOk, isOpen, onClose } = props
  const pic = isRegisterOk ? tooltip_login : tooltip_fail;
  const message = isRegisterOk ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте еще раз.';
  const alt = isRegisterOk ? 'Ок.' : 'Fail.';

  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_open' : ''}`}>
      <div className="popup__container" name="popup-tooltip">
        <button type="button" className="popup__close-icon" onClick={onClose}></button>
        <img className="popup__tooltip_fail" src={pic} alt={alt}/>
        <h2 className="popup__container-heading">{message}</h2>
      </div>
    </div>
  )

}
export default InfoTooltip