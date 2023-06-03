import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Static";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
