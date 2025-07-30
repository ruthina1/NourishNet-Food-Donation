// src/components/Section/ItemCard.jsx
import React from 'react';
import DonateButton from './DonateButton';
import './Donate.css';

const ItemCard = ({ item }) => {
  return (
    <div className="item-card">
      <img src={item.image} alt={item.description} className="item-card-image" />
      <div className="item-card-info">
        <p>{item.description}</p>
        <DonateButton />
      </div>
    </div>
  );
};

export default ItemCard;
