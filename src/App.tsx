import React, { useState } from 'react';
import { CreditCardApperance } from './components/creditCardApperance';
import { FormFormik } from './components/formFormik';
import './app.scss';
import { SuccesInfo } from './components/succesInfo';

const App = () => {
  const [cardForm, setCartForm] = useState({
    cardHolderName: 'patrick swayze',
    cardNumber: '0000000000000000',
    month: '00',
    year: '00',
    cvc: '000',
  });

  const [succesSending, setSuccesSending] = useState(false);

  return (
    <div className='app'>
      <CreditCardApperance cardForm={cardForm} />
      {succesSending ? (
        <SuccesInfo
          setSuccesSending={setSuccesSending}
          setCartForm={setCartForm}
        />
      ) : (
        <FormFormik
          cardForm={cardForm}
          setCartForm={setCartForm}
          setSuccesSending={setSuccesSending}
        />
      )}
    </div>
  );
};

export default App;
