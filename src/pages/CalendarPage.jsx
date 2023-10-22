
// import LoginForm from "components/LoginForm/LoginForm";

import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../components/MainLayout/Loader/Loader";

const CalendarPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <p> CalendarPage </p>
      <Outlet />
    </Suspense>
  );
};

export default CalendarPage;
