import css from "./ContactList.module.css";
import clsx from "clsx";
import Contact from "../Contact/Contact";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { selectFilteredContacts } from "../../redux/filters/selectors";
import { resetFlags } from "../../redux/contacts/slice";
import {
  selectAdded,
  selectDeleted,
  selectError,
  selectLoading,
} from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";

export default function ContactList() {
  const dispatch = useDispatch();
  const [addedMessage, setAddedMessage] = useState(false);
  const [deletedMessage, setDeletedMessage] = useState(false);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const isAdded = useSelector(selectAdded);
  const isDeleted = useSelector(selectDeleted);

  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (isAdded || isDeleted) {
      if (isAdded) {
        setAddedMessage(true);
      }
      if (isDeleted) {
        setDeletedMessage(true);
      }
      const timerId = setTimeout(() => {
        setAddedMessage(false);
        setDeletedMessage(false);
        dispatch(resetFlags());
      }, 1500);
      return () => clearTimeout(timerId);
    }
  }, [dispatch, isAdded, isDeleted]);

  const messageStyle = clsx(css.message, {
    [css.loading]: isLoading,
    [css.error]: isError,
    [css.added]: addedMessage,
    [css.deleted]: deletedMessage,
  });

  return (
    <div className={css.contactsWrapper}>
      {isLoading && <p className={messageStyle}>Working...</p>}
      {isError && <p className={messageStyle}>Something went wrong...</p>}
      {!isLoading && addedMessage && (
        <p className={messageStyle}>Contact added</p>
      )}
      {!isLoading && deletedMessage && (
        <p className={messageStyle}>Contact deleted</p>
      )}
      <ul className={css.contactList}>
        {filteredContacts.length > 0
          ? filteredContacts.map(contact => (
              <Contact key={contact.id} {...contact} />
            ))
          : !isLoading &&
            !isError && (
              <p className={clsx(css.message, css.notFound)}>
                Contacts not found
              </p>
            )}
      </ul>
    </div>
  );
}
