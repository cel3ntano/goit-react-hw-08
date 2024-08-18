import css from "./RegistrationForm.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
export default function RegistrationForm() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const addContactSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Name is too short!")
      .max(50, "Name is too long!")
      .required("Please enter your name"),

    email: Yup.string()
      .email("Invalid email format")
      .max(50, "Email is too long")
      .required("Please enter your email"),

    password: Yup.string()
      .min(6, "Password is too short")
      .max(50, "Password is too long")
      .required("Please enter your password"),
  });

  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <div className={css.formWrapper}>
      <p className={css.formHeading}>
        Welcome to the Phonebook App! Enter your credentials to sign up
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={addContactSchema}
        validateOnChange={false}
        validateOnBlur={false}>
        <Form className={css.form}>
          <label htmlFor='email'>User name</label>
          <Field
            name='username'
            id='usernameusername'
            placeholder='Type your name here'></Field>
          <div className={css.usernameErrorWrapper}>
            <ErrorMessage
              className={css.usernameError}
              name='username'
              component='span'
            />
          </div>
          <label htmlFor='email'>Email</label>
          <Field
            name='email'
            id='email'
            placeholder='Type your email here'></Field>
          <div className={css.emailErrorWrapper}>
            <ErrorMessage
              className={css.emailError}
              name='email'
              component='span'
            />
          </div>
          <label htmlFor='password'>Password</label>
          <Field
            name='password'
            id='password'
            type='password'
            placeholder='Type your password here'></Field>
          <div className={css.passwordErrorWrapper}>
            <ErrorMessage
              className={css.passwordError}
              name='password'
              component='span'
            />
          </div>
          <button type='submit'>Sign up</button>
        </Form>
      </Formik>
    </div>
  );
}
