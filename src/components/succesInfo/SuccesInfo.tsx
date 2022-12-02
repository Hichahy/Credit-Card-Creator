import React from 'react';
import './succesInfo.scss';

interface IProps {
  setSuccesSending: (value: boolean) => void;
  setCartForm: (value: any) => void;
}

export const SuccesInfo = ({ setSuccesSending, setCartForm }: IProps) => {
  const continueBtn = () => {
    setCartForm({
      cardHolderName: 'patrick swayze',
      cardNumber: '0000000000000000',
      month: '00',
      year: '00',
      cvc: '000',
    });
    setSuccesSending(false);
  };

  return (
    <div className='succes-container'>
      <div className='succes-box'>
        <img src='images/icon-complete.svg' alt='check complete' />
        <h3>Thank You!</h3>
        <p>We've added your card details</p>
        <button onClick={continueBtn}>Continue</button>
      </div>
    </div>
  );
};
