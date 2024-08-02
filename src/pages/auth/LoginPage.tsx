import { Eye, EyeOff } from "lucide-react";
import Logo from "../../assets/Logo";
import FacebookIcon from "../../components/icons/FacebookIcon";
import GoogleIcon from "../../components/icons/GoogleIcon";
import { useState } from "react";
import { useAuthLogin } from "../../apis/auth";
import { useNavigate } from "react-router-dom";
import { AppError } from "../../apis/error";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
  const navigate = useNavigate();
  const { dispatch: useLogin } = useAuthLogin();
  const onSubmit = (event: any) => {
    event.preventDefault();
    useLogin({ email, password })
      .then((resp) => {
        if (!resp.data) {
          console.log("something went wrong!");
          return;
        }
        navigate("/", { replace: true });
      })
      .catch((err) => {
        if (err instanceof AppError) {
          console.log(err);
        }
      });
  };
  return (
    <main className="h-full w-full flex flex-col justify-start">
      <header className="flex w-full flex-row items-center justify-between h-[84px] max-w-[1200px] mx-auto">
        <div className="flex flex-row gap-4 items-center">
          <Logo />
          <span className="text-2xl text-gray-700 whitespace-nowrap mt-2 font-medium">
            Đăng nhập
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
                Đăng nhập
              </div>
              <div className="px-7 bg-white">
                <form
                  onSubmit={onSubmit}
                  className="w-full flex flex-col gap-6"
                >
                  <input
                    type="text"
                    placeholder="Email *"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 flex-1 bg-white border rounded outline-none h-10"
                  />
                  <div className="w-full relative">
                    <input
                      type={show ? "text" : "password"}
                      placeholder="Mật khẩu *"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full p-3 flex-1 bg-white border rounded outline-none h-10"
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
                  </div>
                  <button
                    type="submit"
                    disabled={!email || !password}
                    className="w-full rounded text-white bg-[#ee4e2e] uppercase text-center outline-none h-10 text-md disabled:bg-[#ee4e2e]/[0.7]"
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
                  Bạn chưa có tài khoản?{" "}
                  <span
                    className="text-[#ee4e2e] font-semibold cursor-pointer hover:opacity-80"
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
