import { useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import { useDispatch } from "react-redux";

export default function SearchBox() {
  const currentInput = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div className={css.searchBox}>
      <label htmlFor='searchBox'>Find contacts by name</label>
      <input
        id='searchBox'
        className={css.input}
        type='text'
        placeholder='Start typing here'
        value={currentInput}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}
