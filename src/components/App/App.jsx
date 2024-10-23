import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList, { getVisibleContacts } from "../ContactList/ContactList";
import css from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import { getLoading, getError } from "../../redux/selectors";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(getLoading);
  const error = useSelector(getError);
  // const { items, loading, error } = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <div className={css.formWrapper}>
        <ContactForm />
        <SearchBox />
      </div>
      {/* {loading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>} */}
      {/* <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p> */}
      {/* {items.length > 0 && <ContactList />} */}
      {loading && !error && <p>Request in progress...</p>}
      <ContactList />
    </div>
  );
}
