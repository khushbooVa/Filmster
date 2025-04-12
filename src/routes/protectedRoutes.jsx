
import React from "react";
import { Navigate, Outlet } from "react-router";
import { RouterPathName } from "./config";
import { useSelector } from "react-redux";
import Navbar from "../layout/navbar/Navbar";

const ProtectedRoutes = () => {
  const {isAuthenticated} = useSelector((state) => state.login);

  return isAuthenticated ?
  <>
  <Navbar/>
  <Outlet />
  </>
   : <Navigate to={RouterPathName.login} />;
};
export default ProtectedRoutes;


