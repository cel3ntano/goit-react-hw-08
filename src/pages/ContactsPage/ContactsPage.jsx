import css from "./ContactsPage.module.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export default function ContactsPage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to='/' />;
  }

  return (
    <div className={css.contacts}>
      <div className={css.contactForm}>
        <ContactForm />
        <SearchBox />
      </div>
      <ContactList />
    </div>
  );
}
