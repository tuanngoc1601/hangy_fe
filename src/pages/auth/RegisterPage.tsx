import { useEffect, useState } from "react";
import Logo from "../../assets/Logo";
import FacebookIcon from "../../components/icons/FacebookIcon";
import GoogleIcon from "../../components/icons/GoogleIcon";
import { useNavigate } from "react-router-dom";
import { useAuthRegister } from "../../apis/auth";
import { AppError } from "../../apis/error";
import clsx from "clsx";
import { checkValidFormRegister } from "../../lib/utils";
import useHangyStore from "../../lib/useStore";

export default function RegisterPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [checkData, setCheckData] = useState<boolean>(false);
  const { dispatch: useRegister } = useAuthRegister();
  const navigate = useNavigate();
  const setToken = useHangyStore((state) => state.setToken);
  const onSubmit = (event: any) => {
    event.preventDefault();
    if (!checkData) {
      setErrorMessage(
        checkValidFormRegister(email, username, password, confirmPassword)
      );
    }
    setCheckData(true);
    useRegister({
      email,
      username,
      password,
      password_confirmation: confirmPassword,
    })
      .then((resp) => {
        if (!resp.data) {
          console.log("something went wrong!");
          return;
        }
        setToken(resp.data?.access_token);
        useHangyStore.setState({
          refresh_token: resp.data?.refresh_token,
        });
        navigate("/", { replace: true });
      })
      .catch((err) => {
        if (err instanceof AppError) {
          console.error(err);
        }
      });
  };

  useEffect(() => {
    if (checkData) {
      setErrorMessage(
        checkValidFormRegister(email, username, password, confirmPassword)
      );
    }
  }, [email, username, password, confirmPassword]);
  return (
    <main className="h-full w-full flex flex-col justify-start">
      <header className="flex w-full flex-row items-center justify-between h-[84px] max-w-[1200px] mx-auto">
        <div className="flex flex-row gap-4 items-center">
          <Logo />
          <span className="text-2xl text-gray-700 whitespace-nowrap mt-2 font-medium">
            Đăng ký
          </span>
        </div>
        <span className="text-[#ee4d2d] text-base cursor-pointer">
          Bạn cần giúp đỡ?
        </span>
      </header>
      <div className="bg-[#ee4e2e] h-full w-full">
        <div className="bg-authBg bg-center bg-no-repeat bg-contain h-[600px] w-[1040px] mx-auto flex items-center justify-end">
          <div className="py-16">
            <div className="bg-white rounded-lg flex flex-col w-[400px] gap-2 pb-7">
              <div className="px-7 py-4 text-start text-[#222222] text-xl font-medium">
                Đăng ký
              </div>
              <div className="px-7 bg-white">
                <form
                  onSubmit={onSubmit}
                  className="w-full flex flex-col gap-4"
                >
                  <div className="w-full flex-1">
                    <input
                      type="text"
                      placeholder="Email *"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={clsx(
                        "w-full p-3 flex-1 bg-white border rounded outline-none h-10",
                        !!errorMessage.email && "border-[#ff424f] bg-[#fff6f7]"
                      )}
                    />
                    {errorMessage.email && (
                      <p className="text-[#ff424f] mt-1 text-xs">
                        {errorMessage.email}
                      </p>
                    )}
                  </div>
                  <div className="w-full flex-1">
                    <input
                      type="text"
                      placeholder="Tên người dùng *"
                      name="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className={clsx(
                        "w-full p-3 flex-1 bg-white border rounded outline-none h-10",
                        !!errorMessage.username &&
                          "border-[#ff424f] bg-[#fff6f7]"
                      )}
                    />
                    {errorMessage.username && (
                      <p className="text-[#ff424f] mt-1 text-xs">
                        {errorMessage.username}
                      </p>
                    )}
                  </div>
                  <div className="w-full flex-1">
                    <input
                      type="password"
                      placeholder="Mật khẩu *"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={clsx(
                        "w-full p-3 flex-1 bg-white border rounded outline-none h-10",
                        !!errorMessage.password &&
                          "border-[#ff424f] bg-[#fff6f7]"
                      )}
                    />
                    {errorMessage.password && (
                      <p className="text-[#ff424f] mt-1 text-xs">
                        {errorMessage.password}
                      </p>
                    )}
                  </div>
                  <div className="w-full flex-1">
                    <input
                      type="password"
                      placeholder="Xác nhận mật khẩu *"
                      name="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className={clsx(
                        "w-full p-3 flex-1 bg-white border rounded outline-none h-10",
                        !!errorMessage.confirmPassword &&
                          "border-[#ff424f] bg-[#fff6f7]"
                      )}
                    />
                    {errorMessage.confirmPassword && (
                      <p className="text-[#ff424f] mt-1 text-xs">
                        {errorMessage.confirmPassword}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={
                      !email ||
                      !username ||
                      !password ||
                      !confirmPassword ||
                      !!errorMessage.email ||
                      !!errorMessage.username ||
                      !!errorMessage.password ||
                      !!errorMessage.confirmPassword
                    }
                    className="w-full rounded text-white bg-primary uppercase text-center outline-none h-10 text-md disabled:bg-primary/[0.7]"
                  >
                    Đăng ký
                  </button>
                </form>
                <div className="flex items-center mt-4">
                  <div className="h-[0.5px] flex-1 w-full bg-[#dbdbdb]"></div>
                  <span className="uppercase text-[#cccccc] text-sm px-4">
                    hoặc
                  </span>
                  <div className="h-[0.5px] flex-1 w-full bg-[#dbdbdb]"></div>
                </div>
                <div className="flex flex-wrap justify-between items-center gap-2.5 mt-4">
                  <button className="flex items-center justify-center gap-2 text-[#000000de] text-sm flex-1 h-10 border bg-white rounded-sm outline-none border-[#000000]/[.26]">
                    <FacebookIcon />
                    Facebook
                  </button>
                  <button className="flex items-center justify-center gap-2 text-[#000000de] text-sm flex-1 h-10 border bg-white rounded-sm outline-none border-[#000000]/[.26]">
                    <GoogleIcon />
                    Google
                  </button>
                </div>
                <div className="text-sm text-[#00000042] flex gap-1 justify-center items-center mt-4">
                  Bạn đã có tài khoản?{" "}
                  <span
                    className="text-primary font-semibold cursor-pointer hover:opacity-80"
                    onClick={() => navigate("/auth/login")}
                  >
                    Đăng nhập
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
