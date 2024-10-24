import css from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { searchFilter } from "../../redux/filtersSlice";
import { selectSearchFilter } from "../../redux/contactsSlice";

export default function SearchBox() {
  const dispatch = useDispatch();

  const filter = useSelector(selectSearchFilter);

  const handleFilterChange = (event) =>
    dispatch(searchFilter(event.target.value));

  return (
    <div className={css.searchContainer}>
      <p className={css.label}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
}
