import React, { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RouterPaths } from "./paths";
import { RouterPathName } from "./config";
import ProtectedRoutes from "./protectedRoutes";
import Loader from "../components/loader/Loader";
import { useSelector } from "react-redux";

function RouterApp() {
  const {isAuthenticated} = useSelector((state) => state.login);

  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
          <Route
              path={RouterPathName.login}
              element={
                isAuthenticated ? (
                  <Navigate to={RouterPathName.home} />
                ) : (
                  <RouterPaths.Login />
                )
              }
            />
            <Route path={RouterPathName.notfound} element={<RouterPaths.NotFound />} />

            {/* Protected Routes  */}
            <Route element={<ProtectedRoutes />}>
            <Route path={RouterPathName.home} element={<RouterPaths.Home />} />
            <Route path={RouterPathName.watchList} element={<RouterPaths.WatchList />} />

            </Route>

            {/* add public and protected routes here */}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default RouterApp;
