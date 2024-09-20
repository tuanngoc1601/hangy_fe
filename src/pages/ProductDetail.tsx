import { Link } from "react-router-dom";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import Container from "../components/layout/Container";
import BreadcrumbIcon from "../components/icons/BreadcrumbIcon";
import { MallBrand } from "../assets";
import StarIcon from "../components/icons/StarIcon";
import FlashSaleIcon from "../components/icons/FlashSaleIcon";
import TimerIcon from "../components/icons/TimerIcon";
import FreeShip from "../components/icons/FreeShip";
import ArrowIcon from "../components/icons/ArrowIcon";
import RefundImg from "../components/icons/support/refund.svg";
import CertificateImg from "../components/icons/support/certification.png";
import ShipImg from "../components/icons/support/ship.png";
import Button from "../components/common/Button";
import SwiperSlider from "../components/SwiperSlider";
import { useRef } from "react";
import ArrowImgIcon from "../components/icons/ArrowImgIcon";
import HeartIcon from "../components/icons/HeartIcon";

export default function ProductDetail() {
  const swiperRelated = useRef<SwiperType>();
  const swiperImgSlide = useRef<SwiperType>();
  return (
    <Container>
      <div className="w-full mt-5 flex items-center justify-start gap-2 text-sm">
        <Link to={"/"} className="text-[#0055aa]">
          Trang chủ
        </Link>
        <BreadcrumbIcon />
        <Link to={"/products"} className="text-[#0055aa]">
          Sản phẩm
        </Link>
        <BreadcrumbIcon />
        <span>
          Nồi Chiên Không Dầu Lock&Lock Super Jumbo Air Fryer 7.2L Màu đen
          EJF296BLK
        </span>
      </div>
      <div className="mt-5 w-full flex flex-row bg-white">
        <section className="p-[15px] shrink-0">
          <div>
            <img
              src={
                "https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lzect0xybkipaf"
              }
              alt=""
              className="w-[450px] h-[450px] object-contain cursor-pointer"
            />
            <div className="mt-3 w-[450px] relative">
              <Swiper
                spaceBetween={0}
                loop={false}
                slidesPerView={5}
                navigation={false}
                modules={[Navigation]}
                onBeforeInit={(swiper) => {
                  swiperImgSlide.current = swiper;
                }}
              >
                <SwiperSlide>
                  <div className="w-[92px] h-[92px] p-[5px]">
                    <div className="relative group w-full h-full cursor-pointer">
                      <img
                        src="https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lz002z74r4ul7e_tn"
                        alt=""
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute top-0 left-0 right-0 bottom-0 group-hover:border-2 group-hover:border-[#d0011b]"></div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-[92px] h-[92px] p-[5px]">
                    <div className="relative group w-full h-full cursor-pointer">
                      <img
                        src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lxknu3s8d52157_tn"
                        alt=""
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute top-0 left-0 right-0 bottom-0 group-hover:border-2 group-hover:border-[#d0011b]"></div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-[92px] h-[92px] p-[5px]">
                    <div className="relative group w-full h-full cursor-pointer">
                      <img
                        src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lxknu3s8d52157_tn"
                        alt=""
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute top-0 left-0 right-0 bottom-0 group-hover:border-2 group-hover:border-[#d0011b]"></div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" w-[92px] h-[92px] p-[5px]">
                    <div className="relative group w-full h-full cursor-pointer">
                      <img
                        src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmd7zx1ltzof2b_tn"
                        alt=""
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute top-0 left-0 right-0 bottom-0 group-hover:border-2 group-hover:border-[#d0011b]"></div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-[92px] h-[92px] p-[5px]">
                    <div className="relative group w-full h-full cursor-pointer">
                      <img
                        src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmd7zx1lsl3z24_tn"
                        alt=""
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute top-0 left-0 right-0 bottom-0 group-hover:border-2 group-hover:border-[#d0011b]"></div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-[92px] h-[92px] p-[5px]">
                    <div className="relative group w-full h-full cursor-pointer">
                      <img
                        src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmd7zx1lve8vfd_tn"
                        alt=""
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute top-0 left-0 right-0 bottom-0 group-hover:border-2 group-hover:border-[#d0011b]"></div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-[92px] h-[92px] p-[5px]">
                    <div className="relative group w-full h-full cursor-pointer">
                      <img
                        src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmd838ikosm7f1_tn"
                        alt=""
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute top-0 left-0 right-0 bottom-0 group-hover:border-2 group-hover:border-[#d0011b]"></div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-[92px] h-[92px] p-[5px]">
                    <div className="relative group w-full h-full cursor-pointer">
                      <img
                        src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmd838iknduned_tn"
                        alt=""
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute top-0 left-0 right-0 bottom-0 group-hover:border-2 group-hover:border-[#d0011b]"></div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-[92px] h-[92px] p-[5px]">
                    <div className="relative group w-full h-full cursor-pointer">
                      <img
                        src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmd838il2u3je8_tn"
                        alt=""
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute top-0 left-0 right-0 bottom-0 group-hover:border-2 group-hover:border-[#d0011b]"></div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div>
                <button
                  type="button"
                  className="flex items-center justify-center bg-black/20 text-white w-5 h-10 absolute top-1/2 left-0 -translate-y-1/2 z-40"
                  onClick={() => swiperImgSlide.current?.slidePrev()}
                >
                  <ArrowImgIcon />
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center bg-black/20 text-white w-5 h-10 absolute top-1/2 right-0 -translate-y-1/2 z-40"
                  onClick={() => swiperImgSlide.current?.slideNext()}
                >
                  <ArrowImgIcon className="rotate-180" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center text-[#222] gap-3 font-medium mt-4">
            <HeartIcon />
            <span>Đã thích (39,2k)</span>
          </div>
        </section>
        <section className="flex w-full flex-1 flex-col">
          <div className="flex flex-col p-[20px] w-full">
            <h3 className="text-xl text-[#000000cc] font-semibold line-clamp-2 max-h-14 text-ellipsis">
              <img
                src={MallBrand}
                alt=""
                className="w-[30px] h-[16px] mr-2 mb-0.5 inline-block"
              />
              Máy tăm nước HANGY HG23 và HF-2 nâng cấp chống thấm nước [BẢO HÀNH
              ĐỔI MỚI 12 THÁNG - KÈM CỦ SẠC]
            </h3>
            <div className="flex w-full items-center mt-[10px]">
              <div className="text-[#d0011b] flex items-center gap-2 font-medium pe-[15px] border-e">
                <span className="border-b border-[#d0011b] mt-[1px]">5.0</span>
                <div className="flex items-center gap-0.5 py-1 me-[5px]">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
              </div>
              <div className="px-[20px] flex items-center gap-2 font-medium border-e">
                <span className="text-[#222] me-[5px] border-b border-[#555]">
                  36,7k
                </span>
                <span className="py-1 me-[5px] text-[#767676] text-sm capitalize">
                  Đánh giá
                </span>
              </div>
              <div className="ps-[20px] flex items-center gap-2 font-medium">
                <span className="text-[#222] me-[5px] border-b border-[#555] ">
                  124,9k
                </span>
                <span className="py-1 me-[5px] text-[#767676] text-sm capitalize">
                  Đã bán
                </span>
              </div>
            </div>
            <div className="h-9 text-white flex items-center justify-between px-5 bg-flashSaleBg bg-center bg-no-repeat bg-cover w-full mt-[10px]">
              <FlashSaleIcon />
              <div className="flex items-center justify-end gap-2">
                <TimerIcon />
                <span className="uppercase font-light ">Kết thúc trong</span>
                <div className="flex items-center gap-1">
                  <span className="bg-black text-[17px] font-semibold h-5 w-[28px] flex items-center justify-center rounded-sm">
                    01
                  </span>
                  <span className="bg-black text-[17px] font-semibold h-5 w-[28px] flex items-center justify-center rounded-sm">
                    01
                  </span>
                  <span className="bg-black text-[17px] font-semibold h-5 w-[28px] flex items-center justify-center rounded-sm">
                    01
                  </span>
                </div>
              </div>
            </div>
            <div className="h-[66px] bg-[#fafafa] px-5 py-[15px] flex items-center justify-start gap-4">
              <span className="text-[#929292] text-base line-through font-medium">
                ₫1.550.000
              </span>
              <span className="text-[#d0011b] text-3xl font-bold">
                ₫680.000
              </span>
              <span className="bg-[#d0011b] rounded-sm text-white text-xs font-bold py-0.5 px-1 uppercase">
                56% giảm
              </span>
            </div>
            <div className="mt-6 px-5 flex flex-col">
              <div className="flex items-center justify-start gap-6 text-sm">
                <h3 className="w-[110px] capitalize shrink-0 text-[#757575]">
                  Mã giảm giá của shop
                </h3>
                <div className="flex items-center text-sm font-medium uppercase gap-4">
                  <span className="text-[#d0011b] px-[7px] py-[3px] rounded-sm bg-[#d0011b14]">
                    10% Giảm
                  </span>
                  <span className="text-[#d0011b] px-[7px] py-[3px] rounded-sm bg-[#d0011b14]">
                    12% Giảm
                  </span>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-start gap-6 text-sm">
                <h3 className="w-[110px] capitalize shrink-0 text-[#757575]">
                  Deal sốc
                </h3>
                <div className="flex items-center text-sm font-medium gap-4">
                  <span className="text-[#d0011b] px-[7px] py-[3px] rounded-sm bg-[#d0011b14]">
                    Mua để nhận quà
                  </span>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-start gap-6 text-sm">
                <h3 className="w-[110px] capitalize shrink-0 text-[#757575]">
                  Bảo hiểm
                </h3>
                <div className="flex items-center text-sm font-medium gap-5">
                  <p className="text-[#222] flex items-center gap-1">
                    Bảo hiểm Bảo vệ người tiêu dùng
                    <span className="rounded-lg text-white text-[10px] font-medium px-[5px] h-4 bg-[#ee4d2d] leading-4 rounded-bl-none">
                      Mới
                    </span>
                  </p>
                  <span className="text-[#08f] cursor-pointer">
                    Tìm hiểu thêm
                  </span>
                </div>
              </div>
              <div className="mt-6 flex items-start justify-start gap-6 text-sm">
                <h3 className="w-[110px] capitalize shrink-0 text-[#757575]">
                  Vận chuyển
                </h3>
                <div className="flex items-start text-sm font-medium gap-5">
                  <FreeShip />
                  <div>
                    <span className="text-[#222]">Miễn phí vận chuyển</span>
                    <p className="flex items-center gap-3 mt-4">
                      <span className="text-[#636363]">Phí vận chuyển</span>
                      <span className="flex hover:text-primary cursor-pointer">
                        ₫0 <ArrowIcon className="rotate-90 w-5 h-5" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="my-6 flex items-start justify-start gap-6 text-sm">
                <h3 className="w-[110px] capitalize shrink-0 text-[#757575]">
                  Phân loại
                </h3>
                <div className="flex flex-wrap items-center max-h-[220px] overflow-y-scroll text-[#222] font-medium w-full gap-2 text-sm">
                  <div className="p-2 h-10 min-w-[80px] flex items-center justify-start border border-[#00000017] text-black/80 rounded-sm cursor-pointer visible text-left gap-2 hover:border-[#d0011b] hover:text-[#d0011b]">
                    <img
                      src="https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lzxl44ickmg124"
                      alt=""
                      className="w-6 h-6"
                    />
                    <p>HG23 WhiteB Nâng Cấp</p>
                  </div>
                  <div className="p-2 h-10 min-w-[80px] flex items-center justify-start border border-[#00000017] text-black/80 rounded-sm cursor-pointer visible text-left gap-2 hover:border-[#d0011b] hover:text-[#d0011b]">
                    <img
                      src="https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lzxl44ickmg124"
                      alt=""
                      className="w-6 h-6"
                    />
                    <p>HG23 WhiteB Nâng Cấp</p>
                  </div>
                  <div className="p-2 h-10 min-w-[80px] flex items-center justify-start border border-[#00000017] text-black/80 rounded-sm cursor-pointer visible text-left gap-2 hover:border-[#d0011b] hover:text-[#d0011b]">
                    <img
                      src="https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lzxl44ickmg124"
                      alt=""
                      className="w-6 h-6"
                    />
                    <p>HG23 Black Nâng Cấp</p>
                  </div>
                  <div className="p-2 h-10 min-w-[80px] flex items-center justify-start border border-[#00000017] text-black/80 rounded-sm cursor-pointer visible text-left gap-2 hover:border-[#d0011b] hover:text-[#d0011b]">
                    <img
                      src="https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lzxl44ickmg124"
                      alt=""
                      className="w-6 h-6"
                    />
                    <p>HG23 Mix Nâng Cấp</p>
                  </div>
                  <div className="p-2 h-10 min-w-[80px] flex items-center justify-start border border-[#00000017] text-black/80 rounded-sm cursor-pointer visible text-left gap-2 hover:border-[#d0011b] hover:text-[#d0011b]">
                    <img
                      src="https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lzxl44ickmg124"
                      alt=""
                      className="w-6 h-6"
                    />
                    <p>HG23 WhiteB + BCĐ HY23</p>
                  </div>
                  <div className="p-2 h-10 min-w-[80px] flex items-center justify-start border border-[#00000017] text-black/80 rounded-sm cursor-pointer visible text-left gap-2 hover:border-[#d0011b] hover:text-[#d0011b]">
                    <img
                      src="https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lzxl44ickmg124"
                      alt=""
                      className="w-6 h-6"
                    />
                    <p>HF9P - White Black</p>
                  </div>
                  <div className="p-2 h-10 min-w-[80px] flex items-center justify-start border border-[#00000017] text-black/80 rounded-sm cursor-pointer visible text-left gap-2 hover:border-[#d0011b] hover:text-[#d0011b]">
                    <img
                      src="https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lzxl44ickmg124"
                      alt=""
                      className="w-6 h-6"
                    />
                    <p>HF9PWB + HY23 Pro</p>
                  </div>
                  <div className="p-2 h-10 min-w-[80px] flex items-center justify-start border border-[#00000017] text-black/80 rounded-sm cursor-pointer visible text-left gap-2 hover:border-[#d0011b] hover:text-[#d0011b]">
                    <img
                      src="https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lzxl44ickmg124"
                      alt=""
                      className="w-6 h-6"
                    />
                    <p>HG23 WB TẶNG QUẠT</p>
                  </div>
                  <div className="p-2 h-10 min-w-[80px] flex items-center justify-start border border-[#00000017] text-black/80 rounded-sm cursor-pointer visible text-left gap-2 hover:border-[#d0011b] hover:text-[#d0011b]">
                    <img
                      src="https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lzxl44ickmg124"
                      alt=""
                      className="w-6 h-6"
                    />
                    <p>HG23 BLACK TẶNG QUẠT</p>
                  </div>
                  <div className="p-2 h-10 min-w-[80px] flex items-center justify-start border border-[#00000017] text-black/80 rounded-sm cursor-pointer visible text-left gap-2 hover:border-[#d0011b] hover:text-[#d0011b]">
                    <img
                      src="https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lzxl44ickmg124"
                      alt=""
                      className="w-6 h-6"
                    />
                    <p>HG23 MIX TẶNG QUẠT</p>
                  </div>
                  <div className="p-2 h-10 min-w-[80px] flex items-center justify-start border border-[#00000017] text-black/80 rounded-sm cursor-pointer visible text-left gap-2 hover:border-[#d0011b] hover:text-[#d0011b]">
                    <img
                      src="https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lzxl44ickmg124"
                      alt=""
                      className="w-6 h-6"
                    />
                    <p>HG9P - White</p>
                  </div>
                  <div className="p-2 h-10 min-w-[80px] flex items-center justify-start border border-[#00000017] text-black/80 rounded-sm cursor-pointer visible text-left gap-2 hover:border-[#d0011b] hover:text-[#d0011b]">
                    <img
                      src="https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lzxl44ickmg124"
                      alt=""
                      className="w-6 h-6"
                    />
                    <p>HG9P - Black</p>
                  </div>
                  <div className="p-2 h-10 min-w-[80px] flex items-center justify-start border border-[#00000017] text-black/80 rounded-sm cursor-pointer visible text-left gap-2 hover:border-[#d0011b] hover:text-[#d0011b]">
                    <img
                      src="https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lzxl44ickmg124"
                      alt=""
                      className="w-6 h-6"
                    />
                    <p>HF2 - Black</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-6 text-sm">
                <h3 className="w-[110px] capitalize shrink-0 text-[#757575]">
                  Số lượng
                </h3>
                <div className="bg-transparent flex items-center gap-6">
                  <div className="text-black/80 text-2xl font-light flex items-center">
                    <button
                      type="button"
                      className="flex h-8 w-8 outline-none font-light cursor-pointer rounded-s-sm border border-black/10 justify-center items-center pb-0.5"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      value={1}
                      name="amount"
                      className="border border-black/10 border-s-0 border-e-0 text-base h-8 w-[50px] text-center cursor-text bg-transparent font-medium flex items-center outline-none"
                    />
                    <button
                      type="button"
                      className="flex h-8 w-8 outline-none font-light cursor-pointer rounded-e-sm border border-black/10 items-center justify-center pb-0.5"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-[#757575] text-sm">
                    62 sản phẩm sẵn có
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[15px] px-5 flex items-center justify-start gap-4 text-sm font-medium">
            <button
              type="button"
              className="flex items-center justify-center capitalize bg-[#d0011b14] border border-[#d0011b] px-5 h-12 gap-2 text-[#d0011b] rounded-sm hover:bg-[#f1b4bb2a]"
            >
              <img
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/b96050554b3be4feea08.svg"
                alt="icon-add-to-cart"
                className="w-5 h-5"
              />
              Thêm vào giỏ hàng
            </button>
            <button
              type="button"
              className="flex items-center justify-center capitalize bg-[#d0011b] px-5 h-12 text-white max-w-[250px] w-[180px] rounded-sm hover:bg-[#d41830]"
            >
              Mua ngay
            </button>
          </div>
          <div className="pe-5 w-full">
            <div className="h-px w-full bg-[#0000000d] mt-[30px]"></div>
          </div>
          <div className="px-5 py-6 flex items-center justify-between">
            <div className="flex items-center gap-1 text-[#222]">
              <img src={RefundImg} alt="" className="w-[18px] h-[18px]" />
              Đổi ý miễn phí 15 ngày
            </div>
            <div className="flex items-center gap-1">
              <img src={CertificateImg} alt="" className="w-[18px] h-[18px]" />
              Hàng chính hãng 100%
            </div>
            <div className="flex items-center gap-1">
              <img src={ShipImg} alt="" className="w-[18px] h-[18px]" />
              Miễn phí vận chuyển
            </div>
          </div>
        </section>
      </div>
      <div className="mt-6 mb-12 bg-white p-7 w-full">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex items-center justify-start gap-4">
            <div className="bg-primary h-8 w-3 rounded-sm"></div>
            <h3 className="text-4xl font-semibold">Sản phẩm liên quan</h3>
          </div>
          <Button className="text-white">Xem tất cả</Button>
        </div>
        <SwiperSlider
          swiperRef={swiperRelated}
          className="relative mt-6"
          slideNav
        />
      </div>
    </Container>
  );
}
