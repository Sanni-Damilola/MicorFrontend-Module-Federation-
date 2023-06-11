import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Static";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center mt-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
