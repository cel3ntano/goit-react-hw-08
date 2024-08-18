import css from "./UserMenu.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <>
      <nav>
        <ul className={css.userMenu}>
          <li>
            <p>{user.name}</p>
          </li>
          <li>
            <button onClick={() => dispatch(logout())}>Logout</button>
          </li>
        </ul>
      </nav>
    </>
  );
}
