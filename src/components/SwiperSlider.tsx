import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import ProductItem from "./ProductItem";
import clsx from "clsx";
import SliderButton from "./SliderButton";

export default function SwiperSlider({
  swiperRef,
  className,
  slideNav,
}: {
  swiperRef: React.MutableRefObject<SwiperType | undefined>;
  className?: string;
  slideNav?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.3, duration: 0.7 },
      }}
      viewport={{ once: true }}
      className={clsx("w-full mt-4", className)}
    >
      <Swiper
        spaceBetween={60}
        loop={false}
        slidesPerView={4}
        navigation={false}
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="overflow-visible"
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
      {slideNav && <SliderButton swiperRef={swiperRef} />}
    </motion.div>
  );
}
