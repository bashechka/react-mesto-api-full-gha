import React from "react";
import avatar from '../images/user_JIC.jpeg';

export const CurrentUserContext = React.createContext();

export const defaultCurrentUser = {
    name: 'Мона Лиза',
    about: 'госпожа',
    avatar: avatar,
}
