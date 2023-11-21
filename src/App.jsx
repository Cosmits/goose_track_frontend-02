import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useSearchParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from './redux/auth/operations';
import { setToken } from './redux/auth/slice';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import RestrictedRoute from './components/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute';
import MainLayout from './components/MainLayout/MainLayout';
import { selectIsFetchingCurrentUser, selectToken } from './redux/auth/selectors';
import Loader from './components/MainLayout/Loader/Loader';

const MainPage = lazy(() => import('./pages/MainPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const SendVerifyEmail = lazy(() => import('./pages/SendVerifyEmail/SendVerifyEmail'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const AccountPage = lazy(() => import('./pages/AccountPage'));
const StatisticsPage = lazy(() => import('./pages/StatisticsPage'));
const CalendarPage = lazy(() => import('./pages/CalendarPage'));
const ChoosedDay = lazy(() => import('./components/CalendarPage/ChoosedDay/ChoosedDay'));
const ChoosedMonth = lazy(() => import('./components/CalendarPage/ChoosedMonth/ChoosedMonth'));

// const test = import.meta.env.VITE_API_TEST;

function App() {

  //  console.log(test);
  const isRefreshing = useSelector(selectIsFetchingCurrentUser);
  const tokenInStore = useSelector(selectToken);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const accessToken = searchParams.get('token');
    if (!!accessToken || !!tokenInStore) {
      if (accessToken) dispatch(setToken(accessToken));
      dispatch(getCurrentUser());
    }
  }, [dispatch, searchParams, tokenInStore]);

  return isRefreshing ? (
    <>
      <Loader />
      <h2 style={{
        marginTop: "160px",
        textAlign: "center",
        position: 'absolute',
        top: 150,
        left: 0,
        right: 0,
        margin: '0 auto',
        zIndex: 1,
      }} > Please wait, BackEnd https://goose-track-backend-02.onrender.com now is not ready ... </h2>
    </>
  ) : (
    <Suspense >
      <Routes>
        <Route index path="/" element={<RestrictedRoute redirectTo="/calendar" component={<MainPage />} />} />
        <Route path="/register" element={<RestrictedRoute redirectTo="/calendar" component={<RegisterPage />} />} />
        <Route path="/login" element={<RestrictedRoute redirectTo="/calendar" component={<LoginPage />} />} />
        <Route path="/send-verify-email" element={<RestrictedRoute redirectTo="/calendar" component={<SendVerifyEmail />} />} />
        <Route path="/send-verify-email/:verificationToken" element={<RestrictedRoute redirectTo="/calendar" component={<SendVerifyEmail />} />} />
        <Route path="/" element={<PrivateRoute redirectTo="/login" component={<MainLayout />} />} >
          <Route path="account" element={<AccountPage />} />
          <Route path="calendar" element={<CalendarPage />}>
            <Route path="month/:currentDate" element={<ChoosedMonth />} />
            <Route path="day/:currentDay" element={<ChoosedDay />} />
          </Route>
          <Route path="statistics" element={<StatisticsPage />}>
            <Route path=":currentDate" element={<StatisticsPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer />
    </Suspense>
  );

}

export default App;