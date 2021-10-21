import React from 'react'
import PopupWithForm from './PopupWithForm'

function AddPlacePopup ({isOpen, onClose, onAddPlace }) {

    const [name, setName] = React.useState('')
    const [link, setLink] = React.useState('')
  
    function handleNameChange(e) {
      setName(e.target.value)
    }
    
    function handleLinkChange(e) {
      setLink(e.target.value)
    }
  
    function handleSubmit(e) {
      e.preventDefault()
      onAddPlace({
        name: name,
        link: link,
      })
    }

    return (      
        <PopupWithForm name={'add'} title={'Новое место'} buttonText={'Добавить'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
            <input type="text" className="form__input form__input_title" placeholder="Название" defaultValue="" minLength="2" maxLength="30" required="" onChange={handleNameChange}/>
                <span className="form__input-error"></span>
            <input type="url" className="form__input form__input_link" placeholder="Ссылка на картинку" name="image-place" id ='link' defaultValue="" required="" onChange={handleLinkChange}/>
                <span className="form__input-error"></span>
        </ PopupWithForm >
    )
}

export default AddPlacePopup 
