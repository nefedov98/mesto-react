function Card({card, name, link, likes, onCardClick}) {

    function handleClick() {
        onCardClick(card);
    }  

    return (
    <div className="item-template" id="place-card">
        <li className="photos__card">
            <img onClick={handleClick} src={link} className="photos__image" alt="Картинка" />
        <div className="photos__title-like"> 
            <h2 className="photos__title">{name}</h2>
            <div className="">
                <button className="photos__like-button" type="button" aria-label="лайк"></button>
                <h2 className="photos__likes">{likes}</h2>
            </div>
        </div>
        <button className="photos__delete" type="button" aria-label="удалить"></button>
        </li>
    </div>
    )
}
  
export default Card;