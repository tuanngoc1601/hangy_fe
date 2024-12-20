import useHangyStore from "../../lib/useStore";
import { NavLink, useNavigate } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { LogoHangy } from "../../assets";
import { useState } from "react";
import UserDropdown from "../dropdown/UserDropdown";
import { useGetCart } from "../../apis/web";
import LoadingPage from "../../pages/LoadingPage";
import { FaBars } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import useWindowSize from "../../hooks/useWindowSize";
import clsx from "clsx";

export default function Header() {
  const navigate = useNavigate();
  const { width } = useWindowSize();
  const access_token = useHangyStore((state) => state.access_token);
  const isOpenMenu = useHangyStore((state) => state.isOpenMenu);
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const { data: cart, isLoading } = useGetCart();

  if (isLoading) return <LoadingPage />;

  return (
    <header className="w-full h-[75px] sm:px-8 xs:px-6 bg-white border-b shadow border-[#fce0de] fixed flex flex-row xs:justify-between items-center z-50">
      <FaBars
        className="w-6 h-6 sm:hidden cursor-pointer"
        onClick={() => useHangyStore.setState({ isOpenMenu: true })}
      />
      <div className="cursor-pointer" onClick={() => navigate("/")}>
        <img
          src={LogoHangy}
          alt="hangy-logo"
          className="sm:w-[167px] xs:w-[130px]"
        />
      </div>
      <nav className="h-full w-full py-[15px] sm:flex items-center justify-center xs:hidden">
        <ul className="flex items-center gap-4 list-none text-base h-full font-semibold">
          <li className="h-full cursor-pointer">
            <NavLink
              to="/"
              className={({ isActive }: { isActive: boolean }) =>
                [
                  "flex items-center text-center h-full pb-[3px] hover:bg-primary hover:text-primary transition ease-linear duration-300",
                  isActive ? "bg-primary" : "",
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
              to="/products"
              className={({ isActive }: { isActive: boolean }) =>
                [
                  "flex items-center text-center h-full pb-[3px] hover:bg-primary hover:text-primary transition ease-linear duration-300",
                  isActive ? "bg-primary" : "",
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
              to="/hangy-about"
              className={({ isActive }: { isActive: boolean }) =>
                [
                  "flex items-center text-center h-full pb-[3px] hover:bg-primary hover:text-primary transition ease-linear duration-300",
                  isActive ? "bg-primary" : "",
                ].join(" ")
              }
            >
              <div className="flex h-full items-center text-center px-4 bg-white">
                Về Hangy
              </div>
            </NavLink>
          </li>
          <li className="h-full cursor-pointer">
            <NavLink
              to="/contact"
              className={({ isActive }: { isActive: boolean }) =>
                [
                  "flex items-center text-center h-full pb-[3px] hover:bg-primary hover:text-primary transition ease-linear duration-300",
                  isActive ? "bg-primary" : "",
                ].join(" ")
              }
            >
              <div className="flex h-full items-center text-center px-4 bg-white">
                Liên hệ
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex items-center justify-end gap-6 flex-none">
        <div
          className="relative cursor-pointer xs:hidden md:inline-block"
          onClick={() => navigate("/cart")}
        >
          <HiOutlineShoppingBag className="text-3xl text-textColor" />
          {!!cart?.length && (
            <div className="h-5 w-5 rounded-full bg-[#1c95c9] flex items-center justify-center absolute -top-1.5 -right-1">
              <p className="text-white text-sm font-semibold">{cart?.length}</p>
            </div>
          )}
        </div>
        {access_token ? (
          <div className="relative">
            <div
              id="dropdownDividerButton"
              data-dropdown-toggle="dropdownDivider"
              className="w-8 h-8 rounded-full cursor-pointer overflow-hidden flex items-center justify-center"
              onMouseDown={(event: React.MouseEvent) => {
                event.stopPropagation();
                setIsMenu(!isMenu);
              }}
            >
              {/* <img src={Avatar} alt="" className="w-full h-full object-cover" /> */}
              <FaUserCircle className="w-full h-full" />
            </div>
            {isMenu && <UserDropdown setIsOpenDropdown={setIsMenu} />}
          </div>
        ) : width > 768 ? (
          <button
            className="px-4 py-2 rounded-md border outline-none sm:flex items-center text-center text-base bg-transparent shadow-sm bg-primary xs:hidden"
            onClick={() => navigate("/auth/login")}
          >
            Đăng nhập
          </button>
        ) : (
          // <img
          //   src={Avatar}
          //   alt=""
          //   className="w-9 h-9 rounded-full object-cover cursor-pointer"
          //   onClick={() => navigate("/auth/login")}
          // />
          <FaUserCircle
            className="w-9 h-9 cursor-pointer"
            onClick={() => navigate("/auth/login")}
          />
        )}
      </div>
      <div
        className={clsx(
          "h-screen fixed w-full z-[100] left-0 top-0 bg-black/40 transition-opacity ease-in-out duration-500 delay-75",
          isOpenMenu ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className={clsx(
            "w-1/2 bg-white p-4 h-full relative transition-transform",
            isOpenMenu ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div
            className="cursor-pointer h-10 w-10 flex rounded-full absolute top-0 -right-10 items-center justify-center bg-transparent"
            onClick={() => {
              useHangyStore.setState({
                isOpenMenu: false,
              });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#ffffff"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
          <ul className="flex flex-col items-start justify-start gap-4 list-none text-base h-full font-semibold">
            <li className="py-2 cursor-pointer">
              <NavLink
                to="/"
                className={({ isActive }: { isActive: boolean }) =>
                  [
                    "flex items-center text-center h-full hover:text-primary transition ease-linear duration-300",
                    isActive ? "text-primary" : "",
                  ].join(" ")
                }
              >
                <div
                  className="flex h-full items-center text-center px-4 bg-white"
                  onClick={() => useHangyStore.setState({ isOpenMenu: false })}
                >
                  Trang chủ
                </div>
              </NavLink>
            </li>
            <li className="py-2 cursor-pointer">
              <NavLink
                to="/products"
                className={({ isActive }: { isActive: boolean }) =>
                  [
                    "flex items-center text-center h-full hover:text-primary transition ease-linear duration-300",
                    isActive ? "text-primary" : "",
                  ].join(" ")
                }
              >
                <div
                  className="flex h-full items-center text-center px-4 bg-white"
                  onClick={() => useHangyStore.setState({ isOpenMenu: false })}
                >
                  Sản phẩm
                </div>
              </NavLink>
            </li>
            <li className="py-2 cursor-pointer">
              <NavLink
                to="/hangy-about"
                className={({ isActive }: { isActive: boolean }) =>
                  [
                    "flex items-center text-center h-full hover:text-primary transition ease-linear duration-300",
                    isActive ? "text-primary" : "",
                  ].join(" ")
                }
              >
                <div
                  className="flex h-full items-center text-center px-4 bg-white"
                  onClick={() => useHangyStore.setState({ isOpenMenu: false })}
                >
                  Về Hangy
                </div>
              </NavLink>
            </li>
            <li className="py-2 cursor-pointer">
              <NavLink
                to="/contact"
                className={({ isActive }: { isActive: boolean }) =>
                  [
                    "flex items-center text-center h-full hover:text-primary transition ease-linear duration-300",
                    isActive ? "text-primary" : "",
                  ].join(" ")
                }
              >
                <div
                  className="flex h-full items-center text-center px-4 bg-white"
                  onClick={() => useHangyStore.setState({ isOpenMenu: false })}
                >
                  Liên hệ
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
