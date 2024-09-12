import { motion } from "framer-motion";
import { Swiper as SwiperType } from "swiper";
import { useNavigate } from "react-router-dom";
import { useAuthLogout } from "../apis/auth";
import useHangyStore from "../lib/useStore";
import Container from "../components/layout/Container";
import { Banner3 } from "../assets";
import { useRef } from "react";
import ArrowIcon from "../components/icons/ArrowIcon";
import Button from "../components/common/Button";
import Services from "../components/HomePage/Featured/Services";
import Feature from "../components/HomePage/Featured/Feature";
import SwiperBanner from "../components/HomePage/Swiper/SwiperBanner";
import CountdownTime from "../components/HomePage/CountdownTime";
import SwiperSlider from "../components/SwiperSlider";
import { buttonVariant, typographyVariant } from "../lib/variants";

export default function HomePage() {
  const { dispatch: useLogoutAction } = useAuthLogout();
  const setToken = useHangyStore((state) => state.setToken);
  const navigate = useNavigate();
  const swiperFlashSale = useRef<SwiperType>();
  const swiperBestSeller = useRef<SwiperType>();
  const swiperCombos = useRef<SwiperType>();
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={typographyVariant}
            className="flex items-center justify-start gap-10"
          >
            <div className="flex items-center justify-start">
              <div className="bg-[#ee4d2d] h-8 w-3 rounded-sm mr-4"></div>
              <h3 className="text-4xl font-semibold">Flash Sales</h3>
            </div>
            <CountdownTime />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={buttonVariant}
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
        <SwiperSlider swiperRef={swiperFlashSale} />
      </div>
      {/* <div className="w-full h-[0.5px] bg-black mb-6"></div> */}
      <div className="w-full mt-24">
        <div className="flex items-center justify-between">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={typographyVariant}
            className="flex items-center justify-start"
          >
            <div className="bg-[#ee4d2d] h-8 w-3 rounded-sm mr-4"></div>
            <h2 className="text-4xl font-semibold">Sản phẩm bán chạy nhất</h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={buttonVariant}
            viewport={{ once: true }}
          >
            <Button>Xem tất cả</Button>
          </motion.div>
        </div>
        <SwiperSlider
          swiperRef={swiperBestSeller}
          className="mt-8 relative"
          slideNav
        />
      </div>
      <div className="w-full mt-12">
        <img src={Banner3} alt="" className="w-full" />
      </div>
      <div className="w-full mt-24">
        <div className="flex items-center justify-between">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={typographyVariant}
            className="flex items-center justify-start"
          >
            <div className="bg-[#ee4d2d] h-8 w-3 rounded-sm mr-4"></div>
            <h2 className="text-4xl font-semibold">Combo sản phẩm</h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={buttonVariant}
          >
            <Button>Chi tiết</Button>
          </motion.div>
        </div>
        <SwiperSlider
          swiperRef={swiperCombos}
          className="mt-8 relative"
          slideNav
        />
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
