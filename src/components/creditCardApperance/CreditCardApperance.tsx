import React from 'react';
import './creditCardApperance.scss';
interface MyFormValues {
  cardHolderName: string;
  cardNumber: string;
  month: string;
  year: string;
  cvc: string;
}

interface IProps {
  cardForm: MyFormValues;
}

export const CreditCardApperance = ({ cardForm }: IProps) => {
  const joy = cardForm.cardNumber.match(/.{1,4}/g)?.join(' ');

  return (
    <div className='card-apperance-container'>
      <div className='card-back'>
        <h3 className='numbers-field'>{cardForm.cvc}</h3>
      </div>
      <div className='card-front'>
        <img src='images/card-logo.svg' alt='logo' />
        <h3>{joy}</h3>
        <div>
          <p>{cardForm.cardHolderName}</p>
          <p>
            {cardForm.month}/{cardForm.year}
          </p>
        </div>
      </div>
    </div>
  );
};
