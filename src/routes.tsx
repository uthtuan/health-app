import { PATH_ROUTERS } from '@/lib/route';
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const HomePage = lazy(() => import("@pages/home-page"));
const DiscoveryPage = lazy(() => import("@pages/discovery-page"));
const NotFoundPage = lazy(() => import("@pages/not-found"));
const RecordPage = lazy(() => import("@pages/record-page"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={PATH_ROUTERS.HOME} element={<HomePage />} />
      <Route path={PATH_ROUTERS.RECORD} element={<RecordPage />} />
      <Route path={PATH_ROUTERS.DISCOVERY} element={<DiscoveryPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}  

export default AppRoutes;