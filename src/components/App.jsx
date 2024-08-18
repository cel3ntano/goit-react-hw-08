import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Contacts from "../pages/Contacts/Contacts";
import NotFound from "../pages/NotFound/NotFound";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='*' element={<NotFound />} />
          <Route />
          <Route />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
