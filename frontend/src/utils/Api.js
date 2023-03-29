class Api {
  constructor(options) {
    this._options = options;
  }

  getCards() {
    const promise = fetch(`${this._options.baseUrl}/cards`, {
      method: 'GET',
      headers: this._options.headers
    })
    return this._checkResponse(promise);
  }

  getUserInfo() {
    const promise = fetch(`${this._options.baseUrl}/users/me`, {
      method: 'GET',
      headers: this._options.headers
    })
    return this._checkResponse(promise);
  }

  updateUserInfo(userData) {
    const promise = fetch(`${this._options.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._options.headers,
      body: JSON.stringify(userData)
    })
    return this._checkResponse(promise);
  }

  createNewCard(data) {
    const promise = fetch(`${this._options.baseUrl}/cards`, {
      method: 'POST',
      headers: this._options.headers,
      body: JSON.stringify(data)
    })
    return this._checkResponse(promise);
  }

  changeLikeStatus(cardId, isLiked) {
    if (isLiked) {
      return this.setLike(cardId);
    } else {
      return this.deleteLike(cardId);
    }
  }

  setLike(cardId) {
    const promise = fetch(`${this._options.baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._options.headers
    })
    return this._checkResponse(promise);
  }

  deleteLike(cardId) {
    const promise = fetch(`${this._options.baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._options.headers
    })
    return this._checkResponse(promise);
  }

  updateUserAvatar(avatarLink) {
    const promise = fetch(`${this._options.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._options.headers,
      body: JSON.stringify({
        avatar: avatarLink
      })
    })
    return this._checkResponse(promise);
  }

  deleteCard(cardId) {
    const promise = fetch(`${this._options.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._options.headers
    })
    return this._checkResponse(promise);
  }

  setToken(token) {
    this._options.headers.Authorization = `Bearer ${token}`;
  }

  _checkResponse(promise) {
    return promise.then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

}

const api = new Api({
  baseUrl: 'https://api.bashechka.nomoredomains.work',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

export default api;
