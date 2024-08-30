import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper as SwiperType } from "swiper";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { useAuthLogout } from "../apis/auth";
import useHangyStore from "../lib/useStore";
import Container from "../components/layout/Container";
import { Banner1, Banner2 } from "../assets";
import PlayIcon from "../components/icons/PlayIcon";
import { useRef } from "react";
import ArrowIcon from "../components/icons/ArrowIcon";

export default function HomePage() {
  const { dispatch: useLogoutAction } = useAuthLogout();
  const setToken = useHangyStore((state) => state.setToken);
  const navigate = useNavigate();
  const swiperRef = useRef<SwiperType>();
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
    <Container>
      <div className="w-full h-[420px] rounded-3xl mt-5 relative">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          loop={true}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          <SwiperSlide>
            <div className="flex flex-1 items-center justify-end relative bg-[#101828] rounded-3xl h-full">
              <div className="max-w-[700px] h-full ps-[56px] pt-11 absolute top-0 left-0 bg-gradient-to-l from-tranparent to-[#101828] rounded-s-3xl">
                <h2 className="text-6xl whitespace-normal font-bold mb-3 text-white">
                  Săn khoá học giá rẻ cùng Rendemy
                </h2>
                <p className="max-w-[540px] mb-8 text-lg leading-7 text-[#f2f4f7]">
                  Nơi bạn vừa có thể làm giàu tri thức và tự mình sở hữu Crypto
                  sau khi hoàn thành các khóa học.
                </p>
                <button
                  type="button"
                  className="flex items-center gap-2 text-base text-white px-4 py-2 font-semibold bg-gradient-to-r from-[#ed372d] to-[#fd8530] rounded-lg"
                >
                  Tham gia
                  <PlayIcon />
                </button>
              </div>
              <img
                src={Banner1}
                alt=""
                className="max-w-[700px] min-h-[390px] h-full rounded-e-3xl"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="flex flex-1 items-center justify-end relative bg-[#101828] rounded-3xl h-full">
              <div className="max-w-[700px] h-full ps-[56px] pt-11 absolute top-0 left-0 bg-gradient-to-l from-tranparent to-[#101828] rounded-s-3xl">
                <h2 className="text-6xl whitespace-normal font-bold mb-5 text-white leading-[70px]">
                  Nhận ngay 10% hoa hồng bằng USDT!
                </h2>
                <button
                  type="button"
                  className="flex items-center gap-2 text-base text-white px-4 py-2 font-semibold bg-gradient-to-r from-[#ed372d] to-[#fd8530] rounded-lg"
                >
                  Tham gia
                  <PlayIcon />
                </button>
              </div>
              <img
                src={Banner2}
                alt=""
                className="max-w-[700px] min-h-[390px] h-full rounded-e-3xl"
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <div>
          <button
            type="button"
            className="w-9 h-9 rounded-full bg-white flex items-center justify-center absolute top-1/2 left-2 -translate-y-1/2 z-40 opacity-40"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ArrowIcon className="rotate-180" />
          </button>
          <button
            type="button"
            className="w-9 h-9 rounded-full bg-white flex items-center justify-center absolute top-1/2 right-2 -translate-y-1/2 z-40 opacity-40"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ArrowIcon />
          </button>
        </div>
      </div>
      <button
        className="px-4 py-2 bg-stone-500 text-lg rounded-md outline-none"
        onClick={() => onLogoutSubmit()}
      >
        Logout
      </button>
    </Container>
  );
}
