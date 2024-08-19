import css from "./AppBar.module.css";
import clsx from "clsx";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const appBarStyle = clsx(
    "container",
    isLoggedIn ? css.appBarLoggedIn : css.appBarLoggedOut
  );

  return (
    <header className={appBarStyle}>
      <Navigation />
      {!isLoggedIn ? <AuthNav /> : <UserMenu />}
    </header>
  );
}
