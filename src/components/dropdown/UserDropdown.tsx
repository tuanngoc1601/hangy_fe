import { Link, useNavigate } from "react-router-dom";
import useHangyStore from "../../lib/useStore";
import { useAuthLogout } from "../../apis/auth";
import { motion } from "framer-motion";
import Dropdown from "../common/Dropdown";

const UserDropdown = ({
  setIsOpenDropdown,
}: {
  setIsOpenDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();
  const setToken = useHangyStore((state) => state.setToken);
  const { dispatch: useLogoutAction } = useAuthLogout();
  function onLogoutSubmit() {
    useLogoutAction().then((resp) => {
      if (!resp.data) {
        console.log("Something went wrong!");
        return;
      }
      setToken("");
      useHangyStore.setState({
        refresh_token: "",
      });
      navigate("/auth/login", { replace: true });
    });
  }
  return (
    <Dropdown setIsOpenDropdown={setIsOpenDropdown}>
      <motion.div
        id="dropdownDivider"
        className="z-50 divide-y divide-gray-100 rounded-lg shadow w-44 bg-white absolute right-0 top-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.1, duration: 0.2 },
        }}
        exit={{ opacity: 0, y: 30, transition: { delay: 0.1, duration: 0.2 } }}
      >
        <ul
          className="py-2 text-sm text-gray-700"
          aria-labelledby="dropdownDividerButton"
        >
          <li>
            <Link to={"/profile"} className="block px-4 py-2 hover:bg-gray-100">
              Thông tin tài khoản
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
