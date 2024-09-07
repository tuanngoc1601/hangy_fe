import { Swiper as SwiperType } from "swiper";
import ArrowIcon from "./icons/ArrowIcon";

export default function SliderButton({
  swiperRef,
}: {
  swiperRef: React.MutableRefObject<SwiperType | undefined>;
}) {
  return (
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
  );
}
