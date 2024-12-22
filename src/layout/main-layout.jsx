import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";

const MainLayout = () => {
  return (
    <div>
      <SideBar>
        <Outlet />
      </SideBar>
    </div>
  );
};

export default MainLayout;
