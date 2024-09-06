import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { useAuthLogout } from "../apis/auth";
import useHangyStore from "../lib/useStore";
import Container from "../components/layout/Container";
import { Banner3 } from "../assets";
import { useRef } from "react";
import ArrowIcon from "../components/icons/ArrowIcon";
import Button from "../components/common/Button";
import ProductItem from "../components/ProductItem";
import Services from "../components/HomePage/Featured/Services";
import Feature from "../components/HomePage/Featured/Feature";
import SwiperBanner from "../components/HomePage/Swiper/SwiperBanner";

export default function HomePage() {
  const { dispatch: useLogoutAction } = useAuthLogout();
  const setToken = useHangyStore((state) => state.setToken);
  const navigate = useNavigate();
  const swiperFlashSale = useRef<SwiperType>();
  const swiperBestSeller = useRef<SwiperType>();
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
      <SwiperBanner />
      <div className="w-full mt-12">
        <div className="flex flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.7, duration: 0.7 },
            }}
            viewport={{ once: true }}
            className="flex items-center justify-start gap-10"
          >
            <div className="flex items-center justify-start">
              <div className="bg-[#ee4d2d] h-8 w-3 rounded-sm mr-4"></div>
              <h3 className="text-4xl font-semibold">Flash Sales</h3>
            </div>
            <div className="flex items-center justify-center gap-4">
              <p className="flex flex-col">
                <span className="text-[10px]">Days</span>
                <span className="text-2xl font-bold tracking-wider">03</span>
              </p>
              <span className="text-red-400">:</span>
              <p className="flex flex-col">
                <span className="text-[10px]">Hours</span>
                <span className="text-2xl font-bold tracking-wider">23</span>
              </p>
              <span className="text-red-400">:</span>
              <p className="flex flex-col">
                <span className="text-[10px]">Minutes</span>
                <span className="text-2xl font-bold tracking-wider">19</span>
              </p>
              <span className="text-red-400">:</span>
              <p className="flex flex-col">
                <span className="text-[10px]">Seconds</span>
                <span className="text-2xl font-bold tracking-wider">56</span>
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.7, duration: 0.7 },
            }}
            viewport={{ once: true }}
            className="flex items-center justify-end gap-4"
          >
            <button
              type="button"
              className="w-[46px] h-[46px] rounded-full flex items-center justify-center bg-[#f5f5f5]"
              onClick={() => swiperFlashSale.current?.slidePrev()}
            >
              <ArrowIcon className="rotate-180" />
            </button>
            <button
              type="button"
              className="w-[46px] h-[46px] rounded-full flex items-center justify-center bg-[#f5f5f5]"
              onClick={() => swiperFlashSale.current?.slideNext()}
            >
              <ArrowIcon />
            </button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.7, duration: 0.7 },
          }}
          viewport={{ once: true }}
          className="w-full mt-4"
        >
          <Swiper
            spaceBetween={60}
            loop={false}
            slidesPerView={4}
            navigation={false}
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiperFlashSale.current = swiper;
            }}
          >
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </div>
      {/* <div className="w-full h-[0.5px] bg-black mb-6"></div> */}
      <div className="w-full mt-24">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.3, duration: 0.7 },
            }}
            viewport={{ once: true }}
            className="flex items-center justify-start"
          >
            <div className="bg-[#ee4d2d] h-8 w-3 rounded-sm mr-4"></div>
            <h2 className="text-4xl font-semibold">Sản phẩm bán chạy nhất</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.3, duration: 0.7 },
            }}
            viewport={{ once: true }}
          >
            <Button>Xem tất cả</Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, duration: 0.7 },
          }}
          viewport={{ once: true }}
          className="w-full mt-8 relative"
        >
          <Swiper
            slidesPerView={4}
            spaceBetween={60}
            navigation={false}
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiperBestSeller.current = swiper;
            }}
          >
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
          </Swiper>
          <div>
            <button
              type="button"
              className="w-9 h-9 rounded-full bg-white flex items-center justify-center absolute top-1/2 left-2 -translate-y-1/2 z-40 opacity-40"
              onClick={() => swiperBestSeller.current?.slidePrev()}
            >
              <ArrowIcon className="rotate-180" />
            </button>
            <button
              type="button"
              className="w-9 h-9 rounded-full bg-white flex items-center justify-center absolute top-1/2 right-2 -translate-y-1/2 z-40 opacity-40"
              onClick={() => swiperBestSeller.current?.slideNext()}
            >
              <ArrowIcon />
            </button>
          </div>
        </motion.div>
      </div>
      <div className="w-full mt-12">
        <img src={Banner3} alt="" className="w-full" />
      </div>
      <div className="w-full mt-24">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.3, duration: 0.7 },
            }}
            viewport={{ once: true }}
            className="flex items-center justify-start"
          >
            <div className="bg-[#ee4d2d] h-8 w-3 rounded-sm mr-4"></div>
            <h2 className="text-4xl font-semibold">Combo sản phẩm</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.3, duration: 0.7 },
            }}
            viewport={{ once: true }}
          >
            <Button>Chi tiết</Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, duration: 0.7 },
          }}
          viewport={{ once: true }}
          className="w-full mt-8 relative"
        >
          <Swiper
            slidesPerView={4}
            spaceBetween={60}
            navigation={false}
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiperBestSeller.current = swiper;
            }}
          >
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
          </Swiper>
          <div>
            <button
              type="button"
              className="w-9 h-9 rounded-full bg-white flex items-center justify-center absolute top-1/2 left-2 -translate-y-1/2 z-40 opacity-40"
              onClick={() => swiperBestSeller.current?.slidePrev()}
            >
              <ArrowIcon className="rotate-180" />
            </button>
            <button
              type="button"
              className="w-9 h-9 rounded-full bg-white flex items-center justify-center absolute top-1/2 right-2 -translate-y-1/2 z-40 opacity-40"
              onClick={() => swiperBestSeller.current?.slideNext()}
            >
              <ArrowIcon />
            </button>
          </div>
        </motion.div>
      </div>
      <Feature />
      <div className="w-full flex justify-center">
        <Services />
      </div>
      <button
        className="px-4 py-2 bg-stone-500 text-lg rounded-md outline-none hidden"
        onClick={() => onLogoutSubmit()}
      >
        Logout
      </button>
    </Container>
  );
}
