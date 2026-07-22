import { useState } from 'react';
import { toast } from 'react-toastify';
import css from './BookingForm.module.css';

const initialValues = {
  name: '',
  email: '',
  date: '',
  comment: '',
};

function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = 'Please enter your full name.';
  } else if (values.name.trim().length < 2) {
    errors.name = 'Name looks too short.';
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.date) {
    errors.date = 'Please choose a booking date.';
  }

  return errors;
}

function BookingForm({ camperName }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(values));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setTouched({ name: true, email: true, date: true });

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    toast.success(`Booking request sent! We'll be in touch about your ${camperName} trip.`);
    setValues(initialValues);
    setTouched({});
    setErrors({});
  };

  const fieldClass = (field) =>
    touched[field] && errors[field] ? `${css.input} ${css.inputError}` : css.input;

  return (
    <div className={css.card}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.subtitle}>Stay connected! We are always ready to help you.</p>

      <form className={css.form} onSubmit={handleSubmit} noValidate>
        <div className={css.field}>
          <input
            type="text"
            name="name"
            placeholder="Name*"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={fieldClass('name')}
          />
          {touched.name && errors.name && <p className={css.error}>{errors.name}</p>}
        </div>

        <div className={css.field}>
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={fieldClass('email')}
          />
          {touched.email && errors.email && <p className={css.error}>{errors.email}</p>}
        </div>

        <div className={css.field}>
          <input
            type="date"
            name="date"
            placeholder="Booking date*"
            value={values.date}
            onChange={handleChange}
            onBlur={handleBlur}
            className={fieldClass('date')}
          />
          {touched.date && errors.date && <p className={css.error}>{errors.date}</p>}
        </div>

        <div className={css.field}>
          <textarea
            name="comment"
            placeholder="Comment"
            rows={3}
            value={values.comment}
            onChange={handleChange}
            className={css.input}
          />
        </div>

        <button type="submit" className={css.submit}>
          Send
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
