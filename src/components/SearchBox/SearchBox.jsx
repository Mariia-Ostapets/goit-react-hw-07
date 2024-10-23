import css from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { searchFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.filters.status);

  const handleFilterChange = (filter) => dispatch(searchFilter(filter));

  return (
    <div className={css.searchContainer}>
      <p className={css.label}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        // value={searchFilter}
        // onChange={handleFilterChange}
      />
    </div>
  );
}
