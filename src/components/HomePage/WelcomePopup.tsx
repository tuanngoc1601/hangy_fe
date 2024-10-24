import { Doctor } from "../../assets";
import useHangyStore from "../../lib/useStore";

export default function WelcomePopup() {
  return (
    <div className="h-screen w-screen fixed left-0 top-0 flex items-center justify-center bg-black/40 z-[100]">
      <div className="relative">
        <img src={Doctor} alt="" className="" />
        <div
          className="cursor-pointer h-[30px] w-[30px] flex rounded-full absolute top-0 right-10 items-center justify-center bg-[#efefef]"
          onClick={() => {
            useHangyStore.setState({
              welcomePopup: false,
            });
          }}
        >
          <svg viewBox="0 0 16 16" stroke="#00000080" className="w-4 h-4">
            <path strokeLinecap="round" d="M1.1,1.1L15.2,15.2"></path>
            <path strokeLinecap="round" d="M15,1L0.9,15.1"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
