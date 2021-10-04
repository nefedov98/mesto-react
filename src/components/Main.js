
import React from 'react';
import Card from './Card.js';

function Main({onEditAvatar, onEditProfile, onAddPlace, userName, userDescription, userAvatar, cards, onCardClick}) {
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__info">
                    <div className="profile__info-button">
                        <img src={userAvatar} className="profile__avatar" alt="Аватар пользователя" />
                        <button onClick={onEditAvatar} type="button" className="profile__avatar-edit-button"></button>
                      </div>
                      <div className="profile__bio">
                        <div className="profile__text">
                            <h1 className="profile__title">{userName}</h1>
                            <p className="profile__subtitle">{userDescription}</p>
                        </div>
                        <button onClick={onEditProfile} className="profile__edit" type="button" aria-label="редактирование" ></button>
                    </div>
                </div>
                <button onClick={onAddPlace} className="profile__add" type="button" aria-label="добавление"></button>
            </section>
            <section className="photos">
                <ul className="photos__list">
                {cards.map((item) => <Card key={item._id}
                    card={item}
                    name={item.name}
                    link={item.link}
                    likes={item.likes.length}
                    onCardClick={onCardClick}
                />)}
                </ul>
            </section>
            <script> </script>
        </main>
    );
  }
  
  export default Main;