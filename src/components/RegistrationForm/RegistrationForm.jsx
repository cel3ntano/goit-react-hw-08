import css from "./RegistrationForm.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export default function RegistrationForm() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const registrationSchema = Yup.object().shape({
    name: Yup.string()
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
  const handleSubmit = (values, options) => {
    dispatch(register(values));
    options.resetForm();
  };

  if (isLoggedIn) {
    return <Navigate to='/contacts' />;
  }

  return (
    <div className={css.formWrapper}>
      <p className={css.formHeading}>
        Welcome to the Phonebook App! Enter your credentials to sign up
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={registrationSchema}
        validateOnChange={false}
        validateOnBlur={false}>
        <Form className={css.form}>
          <label htmlFor='name'>Your name</label>
          <Field
            name='name'
            id='name'
            placeholder='Type your name here'></Field>
          <div className={css.usernameErrorWrapper}>
            <ErrorMessage
              className={css.usernameError}
              name='name'
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
