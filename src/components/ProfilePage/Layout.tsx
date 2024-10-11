import { type FC } from "react";
import { Link, Outlet } from "react-router-dom";
import Container from "../layout/Container";
import BreadcrumbIcon from "../icons/BreadcrumbIcon";
import Sidebar from "./Sidebar";

export const LayoutProfile: FC = () => {
  return (
    <Container>
      <div className="w-full mt-5 flex items-center justify-start gap-2 text-sm">
        <Link to={"/"} className="text-[#0055aa]">
          Trang chủ
        </Link>
        <BreadcrumbIcon />
        <span>Thông tin tài khoản</span>
      </div>
      <div className="w-full flex mt-5 mb-16 gap-4">
        <Sidebar />
        <Outlet />
      </div>
    </Container>
  );
};
