import { Suspense } from "react";
import {  Outlet } from "react-router-dom";

import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
  return (
    <div>
      {/* header */}
      <div>
        <Sidebar />
      </div> 

      {/* main */}
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>


      {/* footer */}
      <div>
      </div>
  
    </div>
  )
}

export default Layout;