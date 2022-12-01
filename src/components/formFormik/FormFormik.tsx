import React from 'react';
import { Form, Field, Formik } from 'formik';
import './formFormik.scss';

interface MyFormValues {
  cardHolderName: string;
  cardNumber: string;
  month: string;
  year: string;
  cvc: string;
}

export const FormFormik = () => {
  const initialValues: MyFormValues = {
    cardHolderName: '',
    cardNumber: '',
    month: '',
    year: '',
    cvc: '',
  };

  return (
    <div className='form-container'>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <span>
            <label htmlFor='firstName'>card holder name</label>
            <Field
              id='cardHolderName'
              name='cardHolderName'
              placeholder='e.g. Jane Appleseed'
            />
          </span>
          <span>
            <label htmlFor='cardNumber'>card Number</label>
            <Field
              id='cardNumber'
              name='cardNumber'
              placeholder='e.g. 1234 5678 9123 0000'
            />
          </span>
          <div>
            <span>
              <label htmlFor='month'>exp. date (mm/yy)</label>
              <div>
                <Field id='month' name='month' placeholder='MM' />
                <Field id='year' name='year' placeholder='YY' />
              </div>
            </span>
            <span>
              <label htmlFor='cvc'>cvc</label>
              <Field id='cvc' name='cvc' placeholder='e.g. 123' />
            </span>
          </div>
          <button type='submit'>Confirm</button>
        </Form>
      </Formik>
    </div>
  );
};
