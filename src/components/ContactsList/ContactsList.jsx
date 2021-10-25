import React from "react";
import { useSelector } from "react-redux";
import { getFilterList } from "../../redux/contacts/selectors";
import ContactItem from "./ContactItem";
import styles from "./ContactsList.module.css";

const ContactsList = () => {
  const filterList = useSelector(getFilterList);

  return (
    <>
      <ul className={styles.List}>
        {filterList.map(({ name, number, id }) => (
          <ContactItem key={id} name={name} number={number} id={id} />
        ))}
      </ul>
    </>
  );
};

export default ContactsList;
