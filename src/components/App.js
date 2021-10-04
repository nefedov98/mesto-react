import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
// import './App.css';

import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

import {api} from '../utils/Api.js';

import Card from './Card.js';



function App() {

    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);

    const [currentUser, setCurrentUser] = React.useState({})
    const [cards, setCards ] = React.useState([])

    const [selectedCard, setSelectedCard ] = React.useState(null)

    function handleEditAvatarClick() {
        setEditAvatarPopupOpen(true); 
      }

    function handleEditProfileClick() {
        setEditProfilePopupOpen(true); 
      }

    function handleAddPlaceClick() {
        setAddPlacePopupOpen(true); 
      }
    
    function closeAllPopups() {
        setEditAvatarPopupOpen(false)
        setEditProfilePopupOpen(false)
        setAddPlacePopupOpen(false)
        setSelectedCard(false)
    }

    function handleCardClick(card) {
        setSelectedCard(card)
    } 

    React.useEffect(() => {
        api.getUserInfoApi()
          .then((data) => {
            setCurrentUser(data)
          })
          .catch((err) => console.log(err))
      }, [])

      React.useEffect(() => {
        api.getInitialCards()
          .then((data) => {
            setCards(data)
            console.log(data)
          })
          .catch((err) => console.log(err))
      }, [])

  return (
    <div className="page">
        <Header /> 
        <Main 
            onEditAvatar ={handleEditAvatarClick} 
            onEditProfile ={handleEditProfileClick} 
            onAddPlace ={handleAddPlaceClick}
            userName = {currentUser.name}
            userDescription ={currentUser.about}
            userAvatar ={currentUser.avatar}
            cards = {cards}
            onCardClick={handleCardClick}
             />
        <Footer /> 
        <PopupWithForm name={'avatar'} title={'Обновить аватар'} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
        <PopupWithForm name={'edit'} title={'Редактировать профиль'} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
        <PopupWithForm name={'add'} title={'Новое место'} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        {/* <div className="popup popup_edit">
            <div className="popup__container">
                <h2 className="popup__title">Редактировать профиль</h2>
                <form className="form form_edit" name="form-name" id ="editForm" novalidate>
                    <fieldset className="form__container">
                        <input type="text" className="form__input form__input_name " placeholder="Ваше имя" name="name" id ='name' value="" minlength="2" maxlength="40" required="" />
                        <span className="form__input-error"></span>
                        <input type="text" className="form__input form__input_job " placeholder="Краткое описание" name="job" id ='job' value="" minlength="2" maxlength="200" required="" />
                        <span className="form__input-error"></span>
                        <button disabled type="submit" className="popup__save popup__save_edit popup__save_invalid" aria-label="сохранить">Сохранить</button>
                    </fieldset>
                </form>
                <button className="popup__close" type="button" aria-label="закрыть"></button>
            </div>
        </div>
        <div className="popup popup_add">
            <div className="popup__container">
                <h2 className="popup__title">Новое место</h2>
                <form className="form form_add" name="form-place" id ="addForm"  novalidate>
                    <fieldset className="form__container">
                        <input type="text" className="form__input form__input_title" placeholder="Название" name="name-place" id ='nameAdd' value="" minlength="2" maxlength="30" required="" />
                        <span className="form__input-error"></span>
                        <input type="url" className="form__input form__input_link" placeholder="Ссылка на картинку" name="image-place" id ='link' value="" required="" />
                        <span className="form__input-error"></span>
                        <button disabled type="submit" className="popup__save popup__save_image popup__save_invalid" aria-label="сохранить">Создать</button>
                    </fieldset>
                </form>
                <button className="popup__close" type="button" aria-label="закрыть"></button>
            </div>
        </div>
        <div className="popup popup_delete">
            <div className="popup__container popup__delete-container">
                <form className="form" name="form-place" id ="deleteForm" novalidate>
                    <h2 className="popup__title popup__title_delete">Вы уверены?</h2>
                    <button type="submit" className="popup__save popup__save_delete" aria-label="сохранить">Да</button>
                </form>
            </div>
            <button className="popup__close popup__close_delete" type="button" aria-label="закрыть"></button> 
        </div>
        <div className="popup popup_avatar">
            <div className="popup__container popup__avatar-container">
                <h2 className="popup__title popup__title_delete">Обновить аватар</h2>
                <form className="form form_avatar" name="form-place" id ="avatarForm"  novalidate>
                    <fieldset className="form__container">
                        <input type="url" className="form__input form__input_link" placeholder="Ссылка на картинку" name="image-place" id ='linkAvatar' value="" required="" />
                        <span className="form__input-error"></span>
                        <button type="submit" className="popup__save popup__save_delete" aria-label="сохранить">Сохранить</button>
                    </fieldset>
                </form>
            </div>
            <button className="popup__close popup__close_delete" type="button" aria-label="закрыть"></button> 
        </div> */}
    </div>
  );
}


export default App;
