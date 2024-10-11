import { Link, useNavigate } from "react-router-dom";
import useHangyStore from "../../lib/useStore";
import { useAuthLogout } from "../../apis/auth";
import { motion } from "framer-motion";
import Dropdown from "../common/Dropdown";
import toast from "react-hot-toast";
import { TOAST_IDS } from "../../lib/constants";

const UserDropdown = ({
  setIsOpenDropdown,
}: {
  setIsOpenDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();
  const setToken = useHangyStore((state) => state.setToken);
  const resetState = useHangyStore((state) => state.reset);
  const { dispatch: useLogoutAction } = useAuthLogout();
  function onLogoutSubmit() {
    useLogoutAction().then((resp) => {
      if (!resp.data) {
        toast.error("Something went wrong!", { id: TOAST_IDS.FETCH_ERROR });
        return;
      }
      setToken("");
      useHangyStore.setState({
        refresh_token: "",
      });
      resetState();
      navigate("/auth/login", { replace: true });
    });
  }
  return (
    <Dropdown
      setIsOpenDropdown={setIsOpenDropdown}
      className="z-50 rounded-lg shadow w-44 bg-white absolute right-0 top-12"
    >
      <motion.div
        id="dropdownVariant"
        className="divide-y divide-gray-100"
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.1, duration: 0.2 },
        }}
        exit={{ opacity: 0, y: 30, transition: { delay: 0.1, duration: 0.2 } }}
      >
        <ul
          className="py-2 text-sm text-gray-700 space-y-2"
          aria-labelledby="dropdownDividerButton"
        >
          <li>
            <Link
              to={"/user/account"}
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => setIsOpenDropdown(false)}
            >
              Thông tin tài khoản
            </Link>
          </li>
          <li>
            <Link
              to={"/user/orders"}
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => setIsOpenDropdown(false)}
            >
              Đơn hàng
            </Link>
          </li>
        </ul>
        <div className="py-2">
          <button
            type="button"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-start"
            onClick={() => onLogoutSubmit()}
          >
            Đăng xuất
          </button>
        </div>
      </motion.div>
    </Dropdown>
  );
};

export default UserDropdown;
