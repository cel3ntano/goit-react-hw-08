import css from "./AppBar.module.css";
import clsx from "clsx";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";

export default function AppBar() {
  const isLoggedIn = false;

  return (
    <>
      <header className={clsx(css.appBar, "container")}>
        <Navigation />
        {!isLoggedIn ? <AuthNav /> : <UserMenu />}
      </header>
    </>
  );
}
