import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
  return (
    <div className='new__card'>
      <div className='new__card__image-container'>
        <Link to={`/product/${product.id}`}><img className='new__card__image' src={product.images} alt={product.title} /></Link>
      </div>
      <div className='new__card__details'>
        <h4 className='new__card__title'>{product.title}</h4>
        <p className='new__card__price'>${product.price}</p>
        <div className='new__card__category'>
          <img className='new__card__category-image' src={product.category.image} alt={product.category.name} />
          <div className='new__card__category-info'>
            <p className='new__card__category-id'>ID: {product.category.id}</p>
            <p className='new__card__category-name'>{product.category.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;