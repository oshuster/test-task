import { Formik, Form, Field } from 'formik';
import css from './FormComponent.module.scss';
import { FormSchema } from '../../schemas/yupSchema';
// import { useDispatch } from 'react-redux';
// import { submitForm, setFormValue } from '../../redux/submitSlice';

export const FormElement = ({ number }) => {
  // const dispatch = useDispatch();

  return (
    <div>
      <h1>Form {`${number}`} </h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        validationSchema={FormSchema}
        onSubmit={(values, actions) => {
          // dispatch(submitForm(false));
          // dispatch(setFormValue(values));

          alert('Form submited');
          console.log(values);
          actions.resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form
            className={css.container}
            data-id={number}
            id={`form-${number}`}
          >
            <Field name="firstName" className={css.input} />
            {errors.firstName && touched.firstName ? (
              <div className={css.error}>{errors.firstName}</div>
            ) : null}
            <Field name="lastName" className={css.input} />
            {errors.lastName && touched.lastName ? (
              <div className={css.error}>{errors.lastName}</div>
            ) : null}
            <Field name="email" type="email" className={css.input} />
            {errors.email && touched.email ? (
              <div className={css.error}>{errors.email}</div>
            ) : null}
            {/* <button type="submit">Submit</button> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};
