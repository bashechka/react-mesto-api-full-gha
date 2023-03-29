import React from 'react';
import api from '../utils/Api';
import avatar from '../images/user_JIC.jpeg';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="main-content">
      <section className="profile">
        <div className="profile__wrapper">
          <img src={currentUser.avatar} alt="Аватар пользователя" className="profile__avatar"></img>
          <button className="profile__avatar-edit-button" onClick={props.onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <div className="profile__info-mode">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__job">{currentUser.about}</p>
        </div>
        <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
      </section>
      <section className="photo" >
        <ul className="photo__list">
          {props.cards.map(card => (<Card key={card._id} card={card} onCardClick={props.onCardClick} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete} />))}
        </ul>
      </section>
    </main>
  );
}

export default Main;