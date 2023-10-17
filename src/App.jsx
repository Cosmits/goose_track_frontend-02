import { Route, Routes } from 'react-router-dom';
// import { lazy, useEffect } from 'react';

// import Layout from "./Layout";
// import PrivateRoute from "./PrivateRoute";

import SharedLayout from './components/SharedLayout/SharedLayout';
import FirstPage from './pages/FirstPage/FirstPage';
import SecondPage from './pages/SecondPage/SecondPage';
import HalfPage from './pages/HalfPage/HalfPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { AppWrapper } from './App.styled';
import MyHeader from './components/Header/myHeader';

import { Auth } from './components/authSection/auth';
import Sidebar from './components/Sidebar/Sidebar';

const test = import.meta.env.VITE_API_TEST;

// const Home = lazy(() => import("pages/Home"));

function App() {
  console.log(test);
  return (
    <AppWrapper>
       <MyHeader  />
      <Sidebar/>
     <Auth/>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/account" element={<FirstPage />} />
          <Route path="/first" element={<FirstPage />} />
          <Route path="/second" element={<SecondPage />}>
            <Route path=":half" element={<HalfPage />} />
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
