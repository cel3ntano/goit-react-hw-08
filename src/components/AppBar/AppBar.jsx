import css from "./AppBar.module.css";
import clsx from "clsx";
import { FaRegAddressBook } from "react-icons/fa";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";

export default function AppBar() {
  return (
    <>
      <header className={clsx(css.appBar, "container")}>
        <h1 className='title'>
          <span>
            <FaRegAddressBook />
          </span>
          Phonebook
        </h1>
        <Navigation />
        <AuthNav />
        <UserMenu />
      </header>
    </>
  );
}
