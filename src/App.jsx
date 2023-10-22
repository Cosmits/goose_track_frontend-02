import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { getCurrentUser } from './redux/auth/operations';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import RestrictedRoute from './components/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute';
import MainLayout from './components/MainLayout/MainLayout';

const MainPage = lazy(() => import('./pages/MainPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const AccountPage = lazy(() => import('./pages/AccountPage'));
const StatisticsPage = lazy(() => import('./pages/StatisticsPage'));
const CalendarPage = lazy(() => import('./pages/CalendarPage'));
const ChoosedDay = lazy(() => import('./components/CalendarPage/ChoosedDay/ChoosedDay'));
const ChoosedMonth = lazy(() => import('./components/CalendarPage/ChoosedMonth/ChoosedMonth'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// const test = import.meta.env.VITE_API_TEST;

function App() {

  //  console.log(test);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Suspense >
      <Routes>
        <Route index path="/" element={<RestrictedRoute redirectTo="/calendar" component={<MainPage />} />} />
        <Route path="/register" element={<RestrictedRoute redirectTo="/calendar" component={<RegisterPage />} />} />
        <Route path="/login" element={<RestrictedRoute redirectTo="/calendar" component={<LoginPage />} />} />
        <Route path="/register" element={<RegisterPage />} />
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
      <ToastContainer autoClose={2000} />
    </Suspense>
  );

}

export default App;