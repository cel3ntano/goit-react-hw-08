import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { RiDeleteBinLine } from "react-icons/ri";
export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();
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
        onClick={() => dispatch(deleteContact(id))}>
        <RiDeleteBinLine />
      </button>
    </li>
  );
}
