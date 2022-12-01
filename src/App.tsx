import React, { useState } from 'react';
import { CreditCardApperance } from './components/creditCardApperance';
import { FormFormik } from './components/formFormik';
import './app.scss';

const App = () => {
  const [cardForm, setCartForm] = useState({
    cardHolderName: 'patryk staszek',
    cardNumber: '0000000000000000',
    month: '00',
    year: '00',
    cvc: '000',
  });
  return (
    <div className='app'>
      <CreditCardApperance cardForm={cardForm}/>
      <FormFormik cardForm={cardForm} setCartForm={setCartForm}/>
    </div>
  );
};

export default App;
