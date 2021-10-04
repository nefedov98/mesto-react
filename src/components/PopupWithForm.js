function PopupWithForm({name, title, buttonText, isOpen, onClose, children}) {
    return (
    <div className={`popup popup_${name} ${isOpen ? 'popup_active' : ''}`}>
        <div className="popup__container">
            <h2 className="popup__title">{title}</h2>
            <form className={`form form_${name}`} name={`form-${name}`}>
                <fieldset className="form__container">
                    {children}
                    <button disabled type="submit" className="popup__save popup__save_image popup__save_invalid" aria-label="сохранить" >{buttonText}</button>
                </fieldset>
            </form>
            <button onClick={onClose} className="popup__close" type="button" aria-label="закрыть"></button>
        </div>
    </div>
    )
  }
 
  export default PopupWithForm