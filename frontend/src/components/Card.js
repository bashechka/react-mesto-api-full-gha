import React from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = props.card.owner._id === currentUser._id;

  // Создаём переменную, которую после зsададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = (
    `photo__delete-button ${isOwn ? 'photo_delete-button_visible' : 'photo__delete-button_hidden'}`
  );

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = props.card.likes.some(i => i === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = (
    `photo__like-button ${isLiked ? 'photo__like-button_active' : ''}`
  )

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <li className="photo__list-item">
      <button type="button" className={cardDeleteButtonClassName} onClick={() => handleDeleteClick()}></button>
      <img className="photo__list-image" src={props.card.link} alt={props.card.name} onClick={() => props.onCardClick(props.card)} />
      <div className="photo__wrapper">
        <h2 className="photo__title">{props.card.name}</h2>
        <div className="photo__like-wrapper">
          <button type="button" className={cardLikeButtonClassName} onClick={() => handleLikeClick()}></button>
          <span className="photo__like-count" name="photo__like-count">{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card
