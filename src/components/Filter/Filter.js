import css from './Filter.module.css';

const Filter = ({ filter, filterChangeHandler }) => {
  return (
    <label className={css.formLabel}>
      Find contacts by name
      <input
        className={css.formInput}
        type="text"
        name="filter"
        value={filter}
        onChange={filterChangeHandler}
        placeholder="type your query here..."
        autoComplete="off"
      />
    </label>
  );
};

export default Filter;
