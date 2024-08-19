import css from "./NotFound.module.css";
import notFoundImage from "/src/assets/landline_phone_404.jpg";

export default function NotFOund() {
  return (
    <div className={css.notFound}>
      <p className={css.notFoundMessage}>Oops... Page doesn&apos;t exist</p>
      <img src={notFoundImage} alt='Page not found image' />
    </div>
  );
}
