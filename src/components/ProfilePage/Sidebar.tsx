import clsx from "clsx";
import { useState } from "react";
import { HiUser, HiBellAlert } from "react-icons/hi2";
import { FaBitcoin } from "react-icons/fa";
import { PiNotepadFill } from "react-icons/pi";
import { BiSolidDiscount } from "react-icons/bi";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(true);
  return (
    <aside className="w-64 transition-transform text-sm h-fit sticky bottom-0 top-[95px] md:block xs:hidden">
      <div className="h-full px-3 py-4 overflow-y-auto bg-transparent">
        <ul className="space-y-2 font-medium">
          <li>
            <button
              type="button"
              className="flex items-center w-full px-2 pt-2 text-sm text-gray-900 transition duration-75 rounded-lg group"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            >
              <HiUser className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
              <span className="flex-1 ms-3 text-left whitespace-nowrap">
                Tài khoản
              </span>
            </button>
            <ul
              id="dropdown-example"
              className={clsx(
                "py-2 space-y-2 transition duration-150 font-normal text-[#000000a6]",
                // isOpenMenu && "block translate-y-0 ease-linear",
                // !isOpenMenu && "hidden -translate-y-full ease-linear"
                isOpenMenu && "block",
                !isOpenMenu && "hidden"
              )}
            >
              <li>
                <NavLink
                  to={"/user/account"}
                  className={({ isActive }: { isActive: boolean }) =>
                    [
                      "flex items-center w-full transition duration-75 rounded-lg pl-11 group",
                      isActive ? "text-primary font-semibold" : "text-gray-900",
                    ].join(" ")
                  }
                >
                  Hồ sơ
                </NavLink>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center w-full text-gray-900 transition duration-75 rounded-lg pl-11 group"
                >
                  Ngân hàng
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center w-full text-gray-900 transition duration-75 rounded-lg pl-11 group"
                >
                  Địa chỉ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center w-full text-gray-900 transition duration-75 rounded-lg pl-11 group"
                >
                  Đổi mật khẩu
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center w-full text-gray-900 transition duration-75 rounded-lg pl-11 group"
                >
                  Cài đặt thông báo
                </a>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              to={"/user/orders"}
              className={({ isActive }: { isActive: boolean }) =>
                [
                  "flex items-center px-2 py-1 rounded-lg group",
                  isActive ? "text-primary font-semibold" : "text-grey-90",
                ].join(" ")
              }
            >
              <PiNotepadFill className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
              <span className="ms-3">Đơn mua</span>
            </NavLink>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-2 py-1 text-gray-900 rounded-lg group"
            >
              <HiBellAlert className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
              <span className="ms-3">Thông báo</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-2 py-1 text-gray-900 rounded-lg group"
            >
              <BiSolidDiscount className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
              <span className="ms-3">Voucher</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-2 py-1 text-gray-900 rounded-lg group"
            >
              <FaBitcoin className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
              <span className="ms-3">Tích điểm</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
