import { useNavigate } from "react-router-dom";
import { useAuthLogout } from "../apis/auth";
import useHangyStore from "../lib/useStore";

export default function HomePage() {
  const { dispatch: useLogoutAction } = useAuthLogout();
  const setToken = useHangyStore((state) => state.setToken);
  const navigate = useNavigate();
  function onLogoutSubmit() {
    useLogoutAction().then((resp) => {
      if(!resp.data) {
        console.log("Something went wrong!");
      }
      setToken("");
      navigate("/auth/login", { replace: true });
    });
  }
  return (
    <div>
      Home Page
      <button
        className="px-4 py-2 bg-stone-500 text-lg rounded-md outline-none"
        onClick={() => onLogoutSubmit()}
      >
        Logout
      </button>
    </div>
  );
}
