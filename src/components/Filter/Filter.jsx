import React from "react";
import styles from "./Filter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { filterPhonebook } from "../../redux/contacts/actions";
import { getFilter } from "../../redux/contacts/selectors";

const Filter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const onChange = ({ target }) => {
    dispatch(filterPhonebook(target.value));
  };
  return (
    <>
      <input
        className={styles.Input}
        onChange={onChange}
        value={filter}
        type="text"
        name="filter"
      />
    </>
  );
};

export default Filter;
