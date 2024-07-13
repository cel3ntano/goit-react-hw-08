import css from "./SearchBox.module.css";

export default function SearchBox({ currentInput, onFilter }) {
  return (
    <div className={css.searchBox}>
      <label htmlFor='searchBox'>Find contacts by name</label>
      <input
        id='searchBox'
        className={css.input}
        type='text'
        placeholder='Start typing here'
        value={currentInput}
        onChange={e => onFilter(e.target.value)}
      />
    </div>
  );
}
