import clsx from "clsx";
import css from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { FaRegAddressBook } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <header className={clsx(css.header, "container")}>
        <h1 className='title'>
          <span>
            <FaRegAddressBook />
          </span>
          Phonebook
        </h1>
        <nav>
          <ul className={css.headerNav}>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/contacts'>Contacts</NavLink>
            </li>
            <li>
              <NavLink to='/login'>Login</NavLink>
            </li>
            <li>
              <NavLink to='/register'>Register</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
