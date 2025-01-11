import { Field, Form, Formik } from "formik";
import s from "./SearchBar.module.css";
const SearchBar = ({ onChange, query }) => {
  const onSubmit = (values) => {
    onChange(values.query);
  };

  const initialValues = {
    query,
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className={s.form}>
          <Field name="query" className={s.field} />
          <button type="submit" className={s.button}>
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default SearchBar;
