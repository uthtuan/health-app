import React from 'react';
import { PATH_ROUTERS } from '@/lib/route';
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { lazy } from "react";

const HomePage = lazy(() => import("@pages/home-page"));
const DiscoveryPage = lazy(() => import("@pages/discovery-page"));
const NotFoundPage = lazy(() => import("@pages/not-found"));
const RecordPage = lazy(() => import("@pages/record-page"));
const LoginPage = lazy(() => import("@pages/login-page"));


// Replace this with your real authentication logic
const isLoggedIn = () => {
  return Boolean(localStorage.getItem("token"));
};

const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  if (!isLoggedIn()) {
    return <Navigate to={PATH_ROUTERS.DISCOVERY} state={{ from: location }} replace />;
  }
  return <>{children}</>;
};

const RequireGuest = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  if (isLoggedIn()) {
    return <Navigate to={PATH_ROUTERS.HOME} state={{ from: location }} replace />;
  }
  return <>{children}</>;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={PATH_ROUTERS.HOME} element={
        <RequireAuth>
          <HomePage />
        </RequireAuth>
      } />
      <Route path={PATH_ROUTERS.RECORD} element={
        <RequireAuth>
          <RecordPage />
        </RequireAuth>
      } />
      <Route path={PATH_ROUTERS.DISCOVERY} element={
        <RequireGuest>
          <DiscoveryPage />
        </RequireGuest>
      } />
      <Route path={PATH_ROUTERS.LOGIN} element={
        <RequireGuest>
          <LoginPage />
        </RequireGuest>
      } />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;