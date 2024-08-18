import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
export default function Navigation() {
  const isLoggedIn = true;

  return (
    <>
      <nav>
        <ul className={css.appBarNav}>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          {isLoggedIn && (
            <li>
              <NavLink to='/contacts'>Contacts</NavLink>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}
