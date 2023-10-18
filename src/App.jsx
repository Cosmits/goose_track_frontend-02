import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import RestrictedRoute from './components/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute';
import MainLayout from './components/MainLayout/MainLayout';

import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import AccountPage from './pages/AccountPage';
import StatisticsPage from './pages/StatisticsPage/StatisticsPage';
import NotFoundPage from './pages/NotFoundPage';
import CalendarPage from './pages/CalendarPage';
import { Container } from './Styles/Container.styled';


// const test = import.meta.env.VITE_API_TEST;

function App() {

  //  console.log(test);

  return (
    <Container>
    <Routes>
      <Route path="/"
        element={<RestrictedRoute redirectTo="/calendar" component={<MainPage />} />}
        index
      />
      <Route path="/register"
        element={<RestrictedRoute redirectTo="/calendar" component={<RegisterPage />} />}
      />
      <Route path="/login"
        element={<RestrictedRoute redirectTo="/calendar" component={<LoginPage />} />}
      />
      <Route path="/register" element={<RegisterPage />} />
      <Route        path="/"
        element={<PrivateRoute redirectTo="/login" component={<MainLayout />} />}
      >
        <Route path="account" element={<AccountPage />} />
        <Route path="calendar" element={<CalendarPage />}>
          {/* <Route path="month/:currentDate" element={<ChoosedMonth />} /> */}
          {/* <Route path="day/:currentDay" element={<ChoosedDay />} /> */}
        </Route>
        <Route path="statistics" element={<StatisticsPage />}>
          <Route path=":currentDate" element={<StatisticsPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
      </Routes>
       <ToastContainer autoClose={2000} />
      </Container>
  );

}

export default App;