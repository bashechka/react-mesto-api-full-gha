import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as auth from '../utils/auth.js';
// import './styles/Register.css';

function Register(props) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onRegister(email, password);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="form__title">{props.title}</h1>
      <fieldset className="form__container-inputs">
        <input
          onChange={handleChangeEmail}
          type="text"
          name="form__item-email"
          placeholder="Email"
          className="form__container-input form__container-input_type_email"
          minLength="2"
          maxLength="40"
          value={email}
          required />

        <span className="form__container form__container_email-error"></span>
        <input
          onChange={handleChangePassword}
          type="password"
          name="form__item-password"
          placeholder="Пароль"
          className="form__container-input form__container-input_type_password"
          minLength="2"
          maxLength="200"
          value={password}
          required />

        <span className="form__container form__container_password-error"></span>

      </fieldset>
      <div className="form__wrapper">
        <button type="submit" className="form__submit-button">{props.buttonText}</button>
        <div className="form__caption-wrapper">
        <p className="form__caption">Уже зарегистрированы?</p>
        <Link to="sign-in" className="form__login-link">Войти</Link>
        </div>
        
      </div>

    </form>
  );


}

export default withRouter(Register);