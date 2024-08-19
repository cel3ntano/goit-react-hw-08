import "./App.css";
import { FaRegAddressBook } from "react-icons/fa";
import { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { refreshUser } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const Layout = lazy(() => import("./Layout/Layout"));
const PublicRoute = lazy(() => import("../Routes/PublicRoute"));
const PrivateRoute = lazy(() => import("../Routes/PrivateRoute"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));
const RegistrationPage = lazy(() =>
  import("../pages/RegistrationPage/RegistrationPage")
);

function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? null : (
    <div className='app'>
      <h1 className='title'>
        <span>
          <FaRegAddressBook />
        </span>
        Phonebook
      </h1>
      <Suspense fallback={null}>
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
      </Suspense>
    </div>
  );
}

export default App;
