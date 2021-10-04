import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

import {api} from '../utils/Api.js';

import Card from './Card.js';



function App() {

    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

    const [selectedCard, setIsSelectedCard ] = React.useState(null)

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true); 
      }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true); 
      }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true); 
      }
    
    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false)
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setIsSelectedCard(null)
    }

    function handleCardClick(card) {
        setIsSelectedCard(card)
    } 

  return (
    <div className="page">
        <Header /> 
        <Main 
            onEditAvatar ={handleEditAvatarClick} 
            onEditProfile ={handleEditProfileClick} 
            onAddPlace ={handleAddPlaceClick}
            onCardClick={handleCardClick}
             />
        <Footer /> 
        <PopupWithForm name={'avatar'} title={'Обновить аватар'} buttonText={'Сохранить'} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
            <input type="text" className="form__input form__input_title" placeholder="Ссылка на аватар" defaultValue="" minLength="2" maxLength="30" required="" />
                <span className="form__input-error"></span>
        </ PopupWithForm >
        <PopupWithForm name={'edit'} title={'Редактировать профиль'} buttonText={'Подтвердить'} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
            <input type="text" className="form__input form__input_title" placeholder="Имя" defaultValue="" minLength="2" maxLength="30" required="" />
                <span className="form__input-error"></span>
            <input type="url" className="form__input form__input_link" placeholder="О себе" name="image-place" id ='link' defaultValue="" required="" />
                <span className="form__input-error"></span>
        </ PopupWithForm >
        <PopupWithForm name={'add'} title={'Новое место'} buttonText={'Добавить'} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
            <input type="text" className="form__input form__input_title" placeholder="Название" defaultValue="" minLength="2" maxLength="30" required="" />
                <span className="form__input-error"></span>
            <input type="url" className="form__input form__input_link" placeholder="Ссылка на картинку" name="image-place" id ='link' defaultValue="" required="" />
                <span className="form__input-error"></span>
        </ PopupWithForm >
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}


export default App;
