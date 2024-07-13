import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
export default function Contact({ name, number, id, deleteContact }) {
  return (
    <li className={css.contactItem}>
      <div>
        <p>
          <FaUser />
          {name}
        </p>
        <p>
          <FaPhone />
          {number}
        </p>
      </div>
      <button
        className={css.button}
        type='button'
        onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
}
