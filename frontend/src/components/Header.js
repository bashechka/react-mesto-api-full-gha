import React from "react";

import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

function Header(props) {
  return (
    <header className="header">
      <div className="header__logo"></div>
      <Switch>
        <Route exact path="/">
          <div className="header__nav">
            <p className="header__login">{props.email}</p>
            <button onClick={props.signOut} className="header__button-exit">Выйти</button>
          </div>
        </Route>
        <Route path="/sign-in">
          <Link to="/sign-up" className="header__link">Регистрация</Link>
        </Route>
        <Route path="/sign-up">
          <Link to="/sign-in" className="header__link">Войти</Link>
        </Route>
      </Switch>
    </header>
  );
}

export default Header;

