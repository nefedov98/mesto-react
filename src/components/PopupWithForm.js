function PopupWithForm({name, title, isOpen, onClose}) {
    return (
    <div className={`popup popup_${name} ${isOpen ? 'popup_active' : ''}`}>
        <div className="popup__container">
            <h2 className="popup__title">{title}</h2>
            <form className={`form form_${name}`} name="form-place" id ="addForm"  noValidate>
                <fieldset className="form__container">
                    <input type="text" className="form__input form__input_title" placeholder="Название" name="name-place" id ='nameAdd' defaultValue="" minLength="2" maxLength="30" required="" />
                    <span className="form__input-error"></span>
                    <input type="url" className="form__input form__input_link" placeholder="Ссылка на картинку" name="image-place" id ='link' defaultValue="" required="" />
                    <span className="form__input-error"></span>
                    <button disabled type="submit" className="popup__save popup__save_image popup__save_invalid" aria-label="сохранить">Создать</button>
                </fieldset>
            </form>
            <button onClick={onClose} className="popup__close" type="button" aria-label="закрыть"></button>
        </div>
    </div>
    )
  }
 
  export default PopupWithForm