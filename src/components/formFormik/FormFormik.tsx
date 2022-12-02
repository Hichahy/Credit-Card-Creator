import React, { useState, useEffect } from 'react';
import { Form, Field, Formik, useFormikContext } from 'formik';
import { SignupSchema } from './validation';
import './formFormik.scss';

interface MyFormValues {
  cardHolderName: string;
  cardNumber: string;
  month: string;
  year: string;
  cvc: string;
}

interface IProps {
  cardForm: MyFormValues;
  setCartForm: (value: any) => void;
}

//formik doesn't have onChange. So I created this way
const FormObserver = ({ setCartForm }: IProps) => {
  const { values } = useFormikContext();

  useEffect(() => {
    setCartForm(values);
  }, [values]);

  return null;
};

export const FormFormik = ({ cardForm, setCartForm }: IProps) => {
  return (
    <div className='form-container'>
      <Formik
        initialValues={cardForm}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          setCartForm(values);
          actions.setSubmitting(false);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <FormObserver setCartForm={setCartForm} cardForm={cardForm} />
            <span>
              <label htmlFor='firstName'>card holder name</label>
              <Field
                className={`${errors.cardHolderName ? 'input-error' : ''}`}
                id='cardHolderName'
                name='cardHolderName'
                maxLength='27'
                placeholder='e.g. Jane Appleseed'
              />
              {errors.cardHolderName && touched.cardHolderName ? (
                <p>{errors.cardHolderName}</p>
              ) : null}
            </span>
            <span>
              <label htmlFor='cardNumber'>card Number</label>
              <Field
                className={`${errors.cardNumber ? 'input-error' : ''}`}
                id='cardNumber'
                name='cardNumber'
                maxLength='16'
                placeholder='e.g. 1234 5678 9123 0000'
              />
              {errors.cardNumber && touched.cardNumber ? (
                <p>{errors.cardNumber}</p>
              ) : null}
            </span>
            <div>
              <span>
                <label htmlFor='month'>exp. date (mm/yy)</label>
                <div>
                  <div>
                    <Field
                      className={`${errors.month ? 'input-error' : ''}`}
                      id='month'
                      name='month'
                      maxLength='2'
                      placeholder='MM'
                    />
                    {errors.month && touched.month ? (
                      <p>{errors.month}</p>
                    ) : null}
                  </div>
                  <div>
                    <Field
                      className={`${errors.year ? 'input-error' : ''}`}
                      id='year'
                      name='year'
                      maxLength='2'
                      placeholder='YY'
                    />
                    {errors.year && touched.year ? <p>{errors.year}</p> : null}
                  </div>
                </div>
              </span>
              <span>
                <label htmlFor='cvc'>cvc</label>
                <Field
                  className={`${errors.cvc ? 'input-error' : ''}`}
                  id='cvc'
                  name='cvc'
                  maxLength='3'
                  placeholder='e.g. 123'
                />
                {errors.cvc && touched.cvc ? <p>{errors.cvc}</p> : null}
              </span>
            </div>
            <button type='submit'>Confirm</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
