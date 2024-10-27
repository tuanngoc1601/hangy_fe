import { Eye, EyeOff } from "lucide-react";
import { LogoHangy } from "../../assets";
import FacebookIcon from "../../components/icons/FacebookIcon";
import GoogleIcon from "../../components/icons/GoogleIcon";
import { useEffect, useState } from "react";
import { useAuthLogin, useAuthSocialUrl } from "../../apis/auth";
import { useNavigate } from "react-router-dom";
import { AppError } from "../../apis/error";
import { checkValidFormLogin } from "../../lib/utils";
import clsx from "clsx";
import useHangyStore from "../../lib/useStore";
import toast from "react-hot-toast";
import { TOAST_IDS } from "../../lib/constants";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });
  const [checkData, setCheckData] = useState<boolean>(false);
  const setToken = useHangyStore((state) => state.setToken);
  const { dispatch: useLogin } = useAuthLogin();
  const { data: googleUrlRedirect } = useAuthSocialUrl("google");
  const { data: facebookUrlRedirect } = useAuthSocialUrl("facebook");
  const onSubmit = (event: any) => {
    event.preventDefault();
    if (!checkData) {
      setErrorMessage(checkValidFormLogin({ email, password }));
    }
    setCheckData(true);
    useLogin({ email, password })
      .then((resp) => {
        if (!resp.data) {
          toast.error("Something went wrong!", { id: TOAST_IDS.FETCH_ERROR });
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
          console.log(err);
        }
      });
  };

  useEffect(() => {
    if (checkData) {
      setErrorMessage(checkValidFormLogin({ email, password }));
    }
  }, [email, password]);
  return (
    <main className="h-full w-full flex flex-col justify-start">
      <header className="flex w-full flex-row items-center sm:justify-between xs:justify-center h-[84px] max-w-[1200px] mx-auto">
        <div className="flex flex-row gap-4 items-center">
          <img src={LogoHangy} alt="hangy-logo" className="w-[167px]" />
          <span className="text-2xl text-gray-700 whitespace-nowrap font-medium sm:inline-block xs:hidden">
            Đăng nhập
          </span>
        </div>
        <span className="text-primary text-base cursor-pointer dl:inline-block xs:hidden">
          Bạn cần giúp đỡ?
        </span>
      </header>
      <div className="h-full w-full bg-primary/30">
        <div className="dl:bg-authBg dl:bg-center dl:bg-no-repeat dl:bg-contain h-[600px] dl:max-w-[1040px] shrink mx-auto flex items-center dl:justify-end xs:justify-center">
          <div className="py-16 shrink mx:w-[400px] xs:w-4/5">
            <div className="bg-white rounded-lg flex flex-col shrink gap-2 pb-7">
              <div className="px-7 py-4 text-start text-[#222222] text-xl font-medium">
                Đăng nhập
              </div>
              <div className="px-7 bg-white">
                <form
                  onSubmit={onSubmit}
                  className="w-full flex flex-col gap-6"
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
                  <div className="w-full relative">
                    <input
                      type={show ? "text" : "password"}
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
                    {show ? (
                      <Eye
                        className="absolute right-3 top-2.5 text-[#00000042] w-5 h-5 cursor-pointer"
                        onClick={() => setShow(false)}
                      />
                    ) : (
                      <EyeOff
                        className="absolute right-3 top-2.5 text-[#00000042] w-5 h-5 cursor-pointer"
                        onClick={() => setShow(true)}
                      />
                    )}
                    {errorMessage.password && (
                      <p className="text-[#ff424f] mt-1 text-xs">
                        {errorMessage.password}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={
                      !email ||
                      !password ||
                      !!errorMessage.email ||
                      !!errorMessage.password
                    }
                    className="w-full rounded text-white bg-primary uppercase text-center outline-none h-10 text-md disabled:bg-primary/[0.7]"
                  >
                    Đăng nhập
                  </button>
                </form>
                <div className="flex flex-row items-center justify-end text-[#0055aa] text-xs cursor-pointer hover:opacity-80 my-2">
                  <span>Quên mật khẩu</span>
                </div>
                <div className="flex items-center">
                  <div className="h-[0.5px] flex-1 w-full bg-[#dbdbdb]"></div>
                  <span className="uppercase text-[#cccccc] text-sm px-4">
                    hoặc
                  </span>
                  <div className="h-[0.5px] flex-1 w-full bg-[#dbdbdb]"></div>
                </div>
                <div className="flex flex-wrap justify-between items-center gap-2.5 mt-4">
                  <a
                    href={facebookUrlRedirect}
                    className="flex items-center justify-center gap-2 text-[#000000de] text-sm flex-1 h-10 border bg-white rounded-sm outline-none border-[#000000]/[.26] cursor-pointer"
                  >
                    <FacebookIcon />
                    Facebook
                  </a>
                  <a
                    href={googleUrlRedirect}
                    className="flex items-center justify-center gap-2 text-[#000000de] text-sm flex-1 h-10 border bg-white rounded-sm outline-none border-[#000000]/[.26] cursor-pointer"
                  >
                    <GoogleIcon />
                    Google
                  </a>
                </div>
                <div className="text-sm text-[#00000042] flex gap-1 justify-center items-center mt-4">
                  Bạn chưa có tài khoản?{" "}
                  <span
                    className="text-primary font-semibold cursor-pointer hover:opacity-80"
                    onClick={() => navigate("/auth/register")}
                  >
                    Đăng ký
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
