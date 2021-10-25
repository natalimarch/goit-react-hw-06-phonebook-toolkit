import React from "react";
import { useDispatch } from "react-redux";
import { removeFromPhonebook } from "../../redux/contacts/actions";
import styles from "./ContactsList.module.css";

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const removeFromContact = () => {
    dispatch(removeFromPhonebook(id));
  };
  return (
    <li className={styles.Item}>
      <p className={styles.Text}>
        {name} {number}
      </p>
      <button className={styles.Btn} type="button" onClick={removeFromContact}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
