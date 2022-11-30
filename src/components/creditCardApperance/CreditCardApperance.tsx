import React from 'react';
import './creditCardApperance.scss';

export const CreditCardApperance = () => {
  return (
    <div className='card-apperance-container'>
      <div className='card-back'>
        <h3 className='numbers-field'>000</h3>
      </div>
      <div className='card-front'>
        <img src='images/card-logo.svg' alt='logo' />
        <h3>0000 0000 0000 0000</h3>
        <div>
          <p>Angelika Cartyczka</p>
          <p>00/00</p>
        </div>
      </div>
    </div>
  );
};
