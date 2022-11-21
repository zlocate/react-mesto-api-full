import React, { useEffect, useState } from "react";
import { CurrentUserContext, currentUser } from '../contexts/CurrentUserContext';

function Card(props) {

  const {card, onCardClick, onCardLike, onCardDelete} = props;
  const {link, name, alt} = card;
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner === currentUser._id;
  const cardDeleteButtonClassName = (
    `element__remove-button ${isOwn ? 'element__remove-button' : 'element__remove-button_hidden'}`
  );
  const isLiked = card.likes.some(i => i === currentUser._id);
  const cardLikeButtonClassName = `...`;

  function handleClick(card) {
    onCardClick(card);
  }

  function handleLikeClick(card) {
    const isLiked = card.likes.some(i => i === currentUser._id);
    onCardLike(card, isLiked);
    console.log(card);
    console.log(isLiked);
    console.log(card.likes);
    console.log(card.likes.some(i => i === currentUser._id));
    console.log(currentUser._id);
  }

  function handleDeleteClick(card) {
    onCardDelete(card);
  }

  return (
    <div className="template-element">
      <div className="element">
        <button className={cardDeleteButtonClassName} aria-label="Удалить" type="button" onClick={() => handleDeleteClick(card)}></button>
        <img className="element__photo" src={`${card.link}`} alt={card.name} onClick={() => handleClick(card)}/>
        <div className="element__caption-block">
          <h3 className="element__text">{card.name}</h3>
          <div className="element__like-block">
            <button className={`element__like-button ${isLiked ? 'element__like-button_active' : '...'}`} type="button" aria-label="Лайк" onClick={() => handleLikeClick(card)}></button>
            <p className="element__like-counter">{card.likes.length}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;  
