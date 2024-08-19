import phoneImage from "/src/assets/landline_phone.jpg";
import css from "./HomePage.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
export default function HomePage() {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.home}>
      {isLoggedIn ? (
        <p>
          Welcome, {user.name}! This simple and intuitive web app allows you to
          manage your contacts easily. Visit the contacts page to proceed
        </p>
      ) : (
        <p className={css.welcomeMessage}>
          Welcome! This simple and intuitive web app allows you to manage your
          contacts easily. Create an account or login if you already have one to
          proceed
        </p>
      )}
      <img src={phoneImage} alt='landline phone' />
    </div>
  );
}
