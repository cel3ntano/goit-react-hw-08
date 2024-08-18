import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import LoginPage from "../pages/LoginPage/LoginPage";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import NotFound from "../pages/NotFound/NotFound";
import HomePage from "../pages/HomePage/HomePage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import { FaRegAddressBook } from "react-icons/fa";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className='app'>
      <h1 className='title'>
        <span>
          <FaRegAddressBook />
        </span>
        Phonebook
      </h1>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegistrationPage />} />
          <Route index element={<HomePage />} />
          <Route path='contacts' element={<ContactsPage />} />
          <Route path='*' element={<NotFound />} />
          <Route />
          <Route />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
