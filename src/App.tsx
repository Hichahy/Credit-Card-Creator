import React from 'react';
import { CreditCardApperance } from './components/creditCardApperance';
import { FormFormik } from './components/formFormik';
import './app.scss';

const App = () => {
  return (
    <div className='app'>
      <CreditCardApperance />
      <FormFormik />
    </div>
  );
};

export default App;
