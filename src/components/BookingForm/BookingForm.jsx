import { useState } from "react";
import { toast } from "react-toastify";
import css from "./BookingForm.module.css";

const initialValues = {
  name: "",
  email: "",
};

function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your full name.";
  } else if (values.name.trim().length < 2) {
    errors.name = "Name looks too short.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
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
    if (touched[name]) {
      setErrors(validate({ ...values, [name]: value }));
    }
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
    setTouched({ name: true, email: true });

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    toast.success(
      `Booking request sent! We'll be in touch about your ${camperName} trip.`
    );
    setValues(initialValues);
    setTouched({});
    setErrors({});
  };

  const fieldClass = (field) =>
    touched[field] && errors[field]
      ? `${css.field} ${css.fieldInvalid}`
      : css.field;

  return (
    <div className={css.card}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <form className={css.form} onSubmit={handleSubmit} noValidate>
        <div className={fieldClass("name")}>
          <div className={css.inputWrapper}>
            {touched.name && errors.name && (
              <label className={css.floatingLabel} htmlFor="booking-name">
                Name*
              </label>
            )}
            <input
              id="booking-name"
              type="text"
              name="name"
              placeholder="Name*"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.name && errors.name && (
              <span className={css.errorIcon} aria-hidden="true">
                !
              </span>
            )}
          </div>
          {touched.name && errors.name && (
            <p className={css.errorText}>{errors.name}</p>
          )}
        </div>

        <div className={fieldClass("email")}>
          <div className={css.inputWrapper}>
            {touched.email && errors.email && (
              <label className={css.floatingLabel} htmlFor="booking-email">
                Email*
              </label>
            )}
            <input
              id="booking-email"
              type="email"
              name="email"
              placeholder="Email*"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email && (
              <span className={css.errorIcon} aria-hidden="true">
                !
              </span>
            )}
          </div>
          {touched.email && errors.email && (
            <p className={css.errorText}>{errors.email}</p>
          )}
        </div>

        <button type="submit" className={css.submitButton}>
          Send
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
