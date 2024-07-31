import { type FC } from "react";
import Header from "../components/layout/Header";
import { Outlet } from "react-router-dom";
import Footter from "../components/layout/Footter";

export const LayoutFull: FC = () => {
  return (
    <div className="relative h-full w-full flex-col overflow-hidden text-foreground">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footter />
    </div>
  );
};
