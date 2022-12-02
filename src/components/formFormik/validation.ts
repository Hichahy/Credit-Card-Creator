import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  cardHolderName: Yup.string()
    .matches(/^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/, 'Invalid Name')
    .min(2, 'Too Short!')
    .max(27, 'Too Long!')
    .required('Required'),
  cardNumber: Yup.string()
    .matches(/^[0-9]*$/, "That doesn't look like a only numbers")
    .min(16, 'Too Short!')
    .max(16, 'Too Long!')
    .required('Required'),
  month: Yup.string()
    .matches(/^[0-9]*$/, 'only number')
    .min(2, 'Too Short!')
    .max(2, 'Too Long!')
    .required('Required'),
  year: Yup.string()
    .matches(/^[0-9]*$/, 'only number')
    .min(2, 'Too Short!')
    .max(2, 'Too Long!')
    .required('Required'),
  cvc: Yup.string()
    .matches(/^[0-9]*$/, 'only number')
    .min(3, 'Too Short!')
    .max(3, 'Too Long!')
    .required('Required'),
});
