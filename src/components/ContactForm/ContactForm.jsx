import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const ContactForm = ({ addContact, contacts }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      )
      .required('Name is required'),
    number: Yup.string()
      .matches(
        /^\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      )
      .required('Phone number is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    addContact(values.name, values.number);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" id="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="number">Number</label>
            <Field type="tel" name="number" id="number" />
            <ErrorMessage name="number" component="div" className="error" />
          </div>
          <button type="submit">Add contact</button>
        </Form>
      )}
    </Formik>
  );
};
