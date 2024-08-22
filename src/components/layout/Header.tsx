import { CircleUser, ShoppingCart } from "lucide-react";
import Logo from "../../assets/Logo";
import useHangyStore from "../../lib/useStore";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const access_token = useHangyStore((state) => state.access_token);
  return (
    <header className="w-full h-[75px] px-8 bg-white border-b shadow border-[#fce0de] fixed flex flex-row items-center">
      <div onClick={() => navigate("/")}>
        <Logo />
      </div>
      <nav className="h-full w-full py-[15px] flex items-center justify-center">
        <ul className="flex items-center gap-4 list-none text-lg h-full font-semibold">
          <li className="h-full cursor-pointer">
            <NavLink
              to="/"
              className={({ isActive }: { isActive: boolean }) =>
                [
                  "flex items-center text-center h-full pb-0.5 hover:bg-[#ed372d] hover:text-[#ed372d] transition ease-linear duration-300",
                  isActive ? "bg-[#ed372d]" : "",
                ].join(" ")
              }
            >
              <div className="flex h-full items-center text-center px-4 bg-white">
                Trang chủ
              </div>
            </NavLink>
          </li>
          <li className="h-full cursor-pointer">
            <NavLink
              to="/sale"
              className={({ isActive }: { isActive: boolean }) =>
                [
                  "flex items-center text-center h-full pb-0.5 hover:bg-[#ed372d] hover:text-[#ed372d] transition ease-linear duration-300",
                  isActive ? "bg-[#ed372d]" : "",
                ].join(" ")
              }
            >
              <div className="flex h-full items-center text-center px-4 bg-white">
                Săn Deal
              </div>
            </NavLink>
          </li>
          <li className="h-full cursor-pointer">
            <NavLink
              to="/products"
              className={({ isActive }: { isActive: boolean }) =>
                [
                  "flex items-center text-center h-full pb-0.5 hover:bg-[#ed372d] hover:text-[#ed372d] transition ease-linear duration-300",
                  isActive ? "bg-[#ed372d]" : "",
                ].join(" ")
              }
            >
              <div className="flex h-full items-center text-center px-4 bg-white">
                Sản phẩm
              </div>
            </NavLink>
          </li>
          <li className="h-full cursor-pointer">
            <NavLink
              to="/about"
              className={({ isActive }: { isActive: boolean }) =>
                [
                  "flex items-center text-center h-full pb-0.5 hover:bg-[#ed372d] hover:text-[#ed372d] transition ease-linear duration-300",
                  isActive ? "bg-[#ed372d]" : "",
                ].join(" ")
              }
            >
              <div className="flex h-full items-center text-center px-4 bg-white">
                Về Hangy
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex items-center justify-end gap-6 flex-none">
        <ShoppingCart className="w-[30px] h-[30px] cursor-pointer" />
        {access_token ? (
          <CircleUser className="cursor-pointer w-[30px] h-[30px]" />
        ) : (
          <button
            className="px-4 py-2 rounded-md border outline-none flex items-center text-center text-base bg-transparent shadow-sm bg-[#ee4e2e]"
            onClick={() => navigate("/auth/login")}
          >
            Đăng nhập
          </button>
        )}
      </div>
    </header>
  );
}
