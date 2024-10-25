import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Banner1, Banner2, Banner3 } from "../../../assets";
import ArrowIcon from "../../icons/ArrowIcon";

export default function SwiperBanner() {
  const swiperRef = useRef<SwiperType>();
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.7 } },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={cardVariants}
      viewport={{ amount: 0.5, once: true }}
      className="w-full sm:rounded-xl md:rounded-xl lg:rounded-3xl xs:rounded mt-5 relative"
    >
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ amount: 0.5, once: true }}
            className="flex flex-1 items-center justify-center relative rounded-3xl w-full"
          >
            <img
              src={Banner1}
              alt=""
              className="sm:rounded-xl md:rounded-xl lg:rounded-3xl xs:rounded-md w-full"
            />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ amount: 0.5, once: true }}
            className="flex flex-1 items-center justify-center relative rounded-3xl w-full"
          >
            <img
              src={Banner2}
              alt=""
              className="sm:rounded-xl md:rounded-xl lg:rounded-3xl xs:rounded-md w-full"
            />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ amount: 0.5, once: true }}
            className="flex flex-1 items-center justify-center relative rounded-3xl w-full"
          >
            <img
              src={Banner3}
              alt=""
              className="sm:rounded-xl md:rounded-xl lg:rounded-3xl xs:rounded-md w-full"
            />
          </motion.div>
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
    </motion.div>
  );
}
