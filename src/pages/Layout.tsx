import { useEffect, type FC } from "react";
import Header from "../components/layout/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footter from "../components/layout/Footter";

export const LayoutFull: FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="relative h-full w-full flex-col text-foreground bg-white">
      {/* bg-appBg bg-repeat bg-center bg-contain */}
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footter />
    </div>
  );
};
