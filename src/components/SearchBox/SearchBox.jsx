import css from "./SearchBox.module.css";
import { useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { useDispatch } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";

export default function SearchBox() {
  const currentInput = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div className={css.searchBox}>
      <label htmlFor='searchBox'>Find contacts</label>
      <input
        id='searchBox'
        className={css.input}
        type='text'
        placeholder='Type name or number here'
        value={currentInput}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}
