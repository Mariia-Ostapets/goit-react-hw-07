import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const initialValues = { name: "", number: "" };

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(15, "Too Long!")
    .required("Required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        id: nanoid(),
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
  };

  const nameId = nanoid();
  const numberId = nanoid();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameId}>Name</label>
        <Field
          className={css.field}
          type="text"
          name="name"
          id={nameId}
        ></Field>
        <ErrorMessage className={css.error} name="name" component="div" />
        <label htmlFor={numberId}>Number</label>
        <Field
          className={css.field}
          type="text"
          name="number"
          id={numberId}
        ></Field>
        <ErrorMessage className={css.error} name="number" component="div" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
