import { Suspense } from "react";
import {  Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      {/* header */}
      <div>
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