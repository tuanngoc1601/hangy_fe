import { motion } from "framer-motion";
import { Swiper as SwiperType } from "swiper";
import Container from "../components/layout/Container";
import { BannerSp } from "../assets";
import { useRef } from "react";
import ArrowIcon from "../components/icons/ArrowIcon";
import Button from "../components/common/Button";
import Services from "../components/HomePage/Featured/Services";
import Feature from "../components/HomePage/Featured/Feature";
import SwiperBanner from "../components/HomePage/Swiper/SwiperBanner";
import CountdownTime from "../components/HomePage/CountdownTime";
import SwiperSlider from "../components/SwiperSlider";
import { buttonVariant, typographyVariant } from "../lib/variants";
import { useBestSellingProducts, useGetFlashSales } from "../apis/web";
import LoadingPage from "./LoadingPage";
import WelcomePopup from "../components/HomePage/WelcomePopup";
import useHangyStore from "../lib/useStore";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const swiperFlashSale = useRef<SwiperType>();
  const swiperBestSeller = useRef<SwiperType>();
  const swiperCombos = useRef<SwiperType>();
  const navigate = useNavigate();
  const welcomePopup = useHangyStore((state) => state.welcomePopup);
  const { data: bestSellingProducts, isLoading } = useBestSellingProducts();
  const { data: flashSales, isLoading: flashSaleLoading } = useGetFlashSales();

  if (isLoading || flashSaleLoading) return <LoadingPage />;

  return (
    <Container className="xs:px-4">
      <SwiperBanner />
      {flashSales?.is_flash_sales && (
        <div className="w-full md:mt-14 xs:mt-10 sm:mt-12 lg:mt-16">
          <div className="flex flex-row items-center justify-between">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={typographyVariant}
              className="flex items-center justify-start mx:gap-10 xs:gap-5"
            >
              <div className="flex items-center justify-start">
                <div className="bg-primary h-8 w-3 rounded-sm mr-4"></div>
                <h3 className="md:text-4xl xs:text-2xl sm:text-3xl font-semibold">Flash Sales</h3>
              </div>
              <CountdownTime time_end={flashSales?.time_end} />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={buttonVariant}
              className="sm:flex items-center justify-end gap-4 xs:hidden"
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
          <SwiperSlider
            swiperRef={swiperFlashSale}
            data={flashSales?.product_sales || []}
            autoLoop
          />
        </div>
      )}
      {/* <div className="w-full h-[0.5px] bg-black mb-6"></div> */}
      <div className="w-full md:mt-14 xs:mt-10 sm:mt-12 lg:mt-16">
        <div className="flex items-center justify-between">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={typographyVariant}
            className="flex items-center justify-start"
          >
            <div className="bg-primary h-8 w-3 rounded-sm mr-4"></div>
            <h2 className="md:text-4xl xs:text-2xl sm:text-3xl font-semibold">
              Sản phẩm bán chạy nhất
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={buttonVariant}
            viewport={{ once: true }}
          >
            <Button
              className="text-white xs:hidden sm:block"
              action={() => navigate("/products")}
            >
              Xem tất cả
            </Button>
          </motion.div>
        </div>
        <SwiperSlider
          swiperRef={swiperBestSeller}
          data={bestSellingProducts}
          className="mt-8 relative"
          slideNav
        />
      </div>
      <div className="w-full mt-12">
        <img src={BannerSp} alt="" className="w-full" />
      </div>
      <div className="w-full md:mt-14 xs:mt-10 sm:mt-12 lg:mt-16">
        <div className="flex items-center justify-between">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={typographyVariant}
            className="flex items-center justify-start"
          >
            <div className="bg-primary h-8 w-3 rounded-sm mr-4"></div>
            <h2 className="md:text-4xl xs:text-2xl sm:text-3xl font-semibold">
              Combo sản phẩm
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={buttonVariant}
          >
            <Button
              className="text-white xs:hidden sm:block"
              action={() => navigate("/products")}
            >
              Chi tiết
            </Button>
          </motion.div>
        </div>
        <SwiperSlider
          swiperRef={swiperCombos}
          data={bestSellingProducts}
          className="mt-8 relative"
          slideNav
        />
      </div>
      <Feature />
      <div className="w-full flex justify-center">
        <Services />
      </div>
      {welcomePopup && !isLoading && !flashSaleLoading && <WelcomePopup />}
    </Container>
  );
}
