import React, { useEffect } from 'react';
import { Form, Field, Formik, useFormikContext } from 'formik';
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
  setCartForm: (arg0: any) => void;
}

//formik doesn't have onChange. So... I created this way :)
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
        onSubmit={(values, actions) => {
          setCartForm(values);
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <FormObserver setCartForm={setCartForm} cardForm={cardForm}/>
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
