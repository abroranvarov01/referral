import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/login";
import Registration from "../pages/Registration/registration";
import { Box, Stack } from "@mui/material";
import MainLayout from "../layout/main-layout";
import Main from "../pages/Main/main";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Main />} />
          
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
