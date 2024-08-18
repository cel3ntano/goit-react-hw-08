import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import LoginPage from "../pages/LoginPage/LoginPage";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import NotFound from "../pages/NotFound/NotFound";
import HomePage from "../pages/HomePage/HomePage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import { FaRegAddressBook } from "react-icons/fa";
import { refreshUser } from "../redux/auth/operations";
import PrivateRoute from "../Routes/PrivateRoute";
import PublicRoute from "../Routes/PublicRoute";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
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
          <Route
            path='login'
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path='register'
            element={
              <PublicRoute>
                <RegistrationPage />
              </PublicRoute>
            }
          />
          <Route index element={<HomePage />} />
          <Route
            path='contacts'
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route path='*' element={<NotFound />} />
          <Route />
          <Route />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
