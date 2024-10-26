import { Link, useNavigate, useParams } from "react-router-dom";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Container from "../components/layout/Container";
import BreadcrumbIcon from "../components/icons/BreadcrumbIcon";
import { MallBrand } from "../assets";
// import StarIcon from "../components/icons/StarIcon";
import FlashSaleIcon from "../components/icons/FlashSaleIcon";
import TimerIcon from "../components/icons/TimerIcon";
import FreeShip from "../components/icons/FreeShip";
import ArrowIcon from "../components/icons/ArrowIcon";
import RefundImg from "../components/icons/support/refund.svg";
import CertificateImg from "../components/icons/support/certification.png";
import ShipImg from "../components/icons/support/ship.png";
import Button from "../components/common/Button";
import SwiperSlider from "../components/SwiperSlider";
import { useEffect, useRef, useState } from "react";
import ArrowImgIcon from "../components/icons/ArrowImgIcon";
import { FaStar } from "react-icons/fa";
// import HeartIcon from "../components/icons/HeartIcon";
import {
  useAddToCart,
  useBestSellingProducts,
  useGetCart,
  useGetProductDetail,
} from "../apis/web";
import clsx from "clsx";
import { AppError } from "../apis/error";
import LoadingPage from "./LoadingPage";
import toast from "react-hot-toast";
import { TOAST_IDS } from "../lib/constants";
import { useCountDown } from "../hooks/useCountDown";
import useWindowSize from "../hooks/useWindowSize";

export default function ProductDetail() {
  const { slug } = useParams();
  const { data: product, isLoading } = useGetProductDetail(slug || "");
  const { data: bestSellingProducts } = useBestSellingProducts();
  const { dispatch: useAddCart } = useAddToCart();
  const { mutate, isLoading: cartLoading } = useGetCart();
  const swiperRelated = useRef<SwiperType>();
  const swiperImgSlide = useRef<SwiperType>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState<number>(1);
  const [subId, setSubId] = useState<string | null>(null);
  const [imgPreview, setImgPreview] = useState<string>(
    product?.images[0].url || ""
  );
  const { width } = useWindowSize();
  const { countdown } = useCountDown({
    duration: product?.flash_sale_end_time,
  });
  function addToCart() {
    if (product?.sub_products && product.sub_products.length && !subId) {
      toast.error("Vui lòng chọn loại sản phẩm!", {
        id: TOAST_IDS.CHOOSE_VARIANT,
      });
      return;
    }
    const subProduct = product?.sub_products?.find((sub) => sub.id === subId);
    const price = product?.is_flash_sales
      ? subProduct?.flash_sale_price
        ? subProduct.flash_sale_price
        : product?.flash_sale_price || 0
      : subProduct?.daily_price
      ? subProduct.daily_price
      : product?.daily_price || 0;
    useAddCart({
      product_id: product?.id || "",
      sub_product_id: subId,
      quantity: quantity,
      price: price,
      amount: price * quantity,
    })
      .then((resp) => {
        if (!resp.data) {
          toast.error("Something went wrong!", { id: TOAST_IDS.FETCH_ERROR });
          return;
        }
        mutate();
        toast.success("Thêm vào giỏ hàng thành công!", {
          id: TOAST_IDS.ADD_TO_CART,
        });
        if (!cartLoading) navigate("/cart");
      })
      .catch((err) => {
        if (err instanceof AppError) {
          console.error(err);
        }
      });
  }

  useEffect(() => {
    setImgPreview(product?.images[0].url || "");
  }, [product, setImgPreview]);

  if (isLoading) return <LoadingPage />;

  return (
    <Container>
      <div className="w-full mt-5 flex items-center justify-start gap-2 text-sm">
        <Link to={"/"} className="text-[#0055aa] flex-none">
          Trang chủ
        </Link>
        <BreadcrumbIcon />
        <Link to={"/products"} className="text-[#0055aa] flex-none">
          Sản phẩm
        </Link>
        <BreadcrumbIcon />
        <span className="xs:line-clamp-1">{product?.name}</span>
      </div>
      <div className="mt-5 w-full flex md:flex-row xs:flex-col bg-white">
        <section className="sm:p-[15px] xs:p-2 md:shrink-0">
          <div className="mx:flex mx:flex-col items-center">
            <img
              src={imgPreview}
              alt=""
              className="mx:w-[450px] mx:h-[450px] aspect-square object-contain cursor-pointer"
            />
            <div className="mt-3 flex-1 mx:w-[450px] relative">
              <Swiper
                spaceBetween={0}
                loop={false}
                slidesPerView={
                  width < 400 ? 3 : width >= 400 && width < 480 ? 4 : 5
                }
                navigation={false}
                modules={[Navigation]}
                onBeforeInit={(swiper) => {
                  swiperImgSlide.current = swiper;
                }}
                className="flex-1"
              >
                {product?.images.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div
                      className="w-[92px] h-[92px] shrink p-[5px]"
                      onMouseOver={() => setImgPreview(item.url)}
                    >
                      <div className="relative group w-full h-full cursor-pointer">
                        <img
                          src={item.url}
                          alt=""
                          className="w-full h-full flex-1 object-contain"
                        />
                        <div className="absolute top-0 left-0 right-0 bottom-0 group-hover:border-2 group-hover:border-[#d0011b]"></div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
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
          {/* <div className="flex items-center justify-center text-[#222] gap-3 font-medium mt-4">
            <HeartIcon />
            <span>Đã thích (39,2k)</span>
          </div> */}
        </section>
        <section className="flex w-full flex-1 flex-col">
          <div className="flex flex-col sm:p-[20px] xs:p-2 w-full">
            <h3 className="sm:text-xl xs:text-lg text-[#000000cc] font-semibold line-clamp-2 max-h-14 text-ellipsis">
              <img
                src={MallBrand}
                alt=""
                className="w-[30px] h-[16px] mr-2 mb-0.5 inline-block"
              />
              {product?.name}
            </h3>
            <div className="flex w-full items-center mt-[10px] xs:text-xs sm:text-base">
              <div className="text-[#d0011b] flex items-center gap-2 font-medium sm:pe-[15px] xs:pe-1.5 border-e">
                <span className="border-b border-[#d0011b] mt-[1px]">5.0</span>
                <div className="flex items-center gap-0.5 py-1 me-[5px]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <div className="sm:px-[20px] xs:px-2.5 flex items-center gap-2 font-medium border-e">
                <span className="text-[#222] sm:me-[5px] xs:me-[2px] border-b border-[#555]">
                  36,7k
                </span>
                <span className="py-1 sm:me-[5px] text-[#767676] sm:text-sm capitalize">
                  Đánh giá
                </span>
              </div>
              <div className="sm:ps-[20px] xs:px-2.5 flex items-center gap-2 font-medium">
                <span className="text-[#222] sm:me-[5px] xs:me-[2px] border-b border-[#555] ">
                  {product?.sold_quantity}
                </span>
                <span className="py-1 sm:me-[5px] text-[#767676] sm:text-sm capitalize">
                  Đã bán
                </span>
              </div>
            </div>
            <div className="mt-2.5 w-full">
              {product?.is_flash_sales && (
                <div className="h-9 text-primary flex items-center justify-between px-5 bg-flashSaleBg bg-center bg-no-repeat bg-cover">
                  <FlashSaleIcon />
                  <div className="flex items-center justify-end gap-2">
                    <TimerIcon />
                    <span className="uppercase font-light text-white dl:inline-block md:hidden sm:inline-block xs:hidden">
                      Kết thúc trong
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="bg-white text-[17px] font-semibold h-5 w-[28px] flex items-center justify-center rounded-sm">
                        {countdown?.split(":")[0]}
                      </span>
                      <span className="text-white font-semibold">:</span>
                      <span className="bg-white text-[17px] font-semibold h-5 w-[28px] flex items-center justify-center rounded-sm">
                        {countdown?.split(":")[1]}
                      </span>
                      <span className="text-white font-semibold">:</span>
                      <span className="bg-white text-[17px] font-semibold h-5 w-[28px] flex items-center justify-center rounded-sm">
                        {countdown?.split(":")[2]}
                      </span>
                      <span className="text-white font-semibold">:</span>
                      <span className="bg-white text-[17px] font-semibold h-5 w-[28px] flex items-center justify-center rounded-sm">
                        {countdown?.split(":")[3]}
                      </span>
                    </div>
                  </div>
                </div>
              )}
              <div className="h-[66px] bg-[#fafafa] md:px-5 xs:px-2 py-[15px] flex items-center justify-start gap-4">
                <span className="text-[#929292] sm:text-base xs:text-sm line-through font-medium">
                  ₫
                  {new Intl.NumberFormat("vi-VN", {
                    // style: "currency",
                    currency: "VND",
                  }).format(product?.real_price || 0)}
                </span>
                <span className="text-[#d0011b] sm:text-3xl xs:text-xl font-bold">
                  ₫
                  {new Intl.NumberFormat("vi-VN", {
                    // style: "currency",
                    currency: "VND",
                  }).format(
                    product?.is_flash_sales
                      ? product?.flash_sale_price
                      : product?.daily_price || 0
                  )}
                </span>
                <span className="bg-[#d0011b] rounded-sm text-white text-xs font-bold py-0.5 px-1 uppercase">
                  {product &&
                    Math.ceil(
                      product.is_flash_sales
                        ? ((product.real_price - product.flash_sale_price) *
                            100) /
                            product.real_price
                        : ((product.real_price - product.daily_price) * 100) /
                            product.real_price
                    )}
                  % giảm
                </span>
              </div>
            </div>
            <div className="mt-6 md:px-5 xs:px-2 flex flex-col">
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
                <div className="flex flex-wrap items-center text-sm font-medium gap-5">
                  <p className="text-[#222] flex items-center gap-1">
                    Bảo hiểm Bảo vệ người tiêu dùng
                    <span className="rounded-lg text-white text-[10px] font-medium px-[5px] h-4 bg-primary leading-4 rounded-bl-none">
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
              {product?.sub_products && !!product.sub_products.length && (
                <div className="my-6 flex items-start justify-start gap-6 text-sm">
                  <h3 className="w-[110px] capitalize shrink-0 text-[#757575]">
                    Phân loại
                  </h3>
                  <div className="flex flex-wrap items-center max-h-[220px] overflow-y-scroll text-[#222] font-medium w-full gap-2 text-sm">
                    {product.sub_products.map((sub) => (
                      <div
                        key={sub.id}
                        className={clsx(
                          "p-2 h-10 min-w-[80px] flex items-center justify-start border border-[#00000017] text-[#000000cc] rounded-sm cursor-pointer visible text-left gap-2 hover:border-[#d0011b] hover:text-[#d0011b]",
                          subId === sub.id && "border-[#d0011b] text-[#d0011b]"
                        )}
                        onClick={() => setSubId(sub.id)}
                      >
                        <img src={sub.image_url} alt="" className="w-6 h-6" />
                        <p>{sub.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="mt-4 flex items-center gap-6 text-sm">
                <h3 className="w-[110px] capitalize shrink-0 text-[#757575]">
                  Số lượng
                </h3>
                <div className="bg-transparent flex items-center sm:gap-6 xs:gap-2">
                  <div className="text-black/80 text-2xl font-light flex items-center">
                    <button
                      type="button"
                      className="flex h-8 w-8 outline-none font-light cursor-pointer rounded-s-sm border border-black/10 justify-center items-center pb-0.5"
                      onClick={() => {
                        if (quantity > 1) setQuantity((prev) => prev - 1);
                      }}
                    >
                      -
                    </button>
                    <input
                      type="text"
                      value={quantity}
                      name="amount"
                      className="border border-black/10 border-s-0 border-e-0 text-base h-8 w-[50px] text-center cursor-text bg-transparent font-medium flex items-center outline-none"
                    />
                    <button
                      type="button"
                      className="flex h-8 w-8 outline-none font-light cursor-pointer rounded-e-sm border border-black/10 items-center justify-center pb-0.5"
                      onClick={() => setQuantity((prev) => prev + 1)}
                    >
                      +
                    </button>
                  </div>
                  <span className="text-[#757575] sm:text-sm xs:text-xs">
                    {product?.stock_quantity} sản phẩm sẵn có
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[15px] px-5 flex items-center md:justify-start xs:justify-end gap-4 text-sm font-medium">
            <button
              type="button"
              className="flex items-center justify-center capitalize bg-[#d0011b14] border border-[#d0011b] px-5 h-12 gap-2 text-[#d0011b] rounded-sm hover:bg-[#f1b4bb2a]"
              onClick={() => addToCart()}
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
          <div className="sm:px-5 xs:px-2.5 py-6 flex items-center justify-between sm:text-base xs:text-sm">
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
      <div className="mt-6 w-full bg-white md:p-7 sm:p-5 xs:p-4">
        <p className="uppercase text-xl font-bold py-2">Mô tả sản phẩm</p>
        <ReactMarkdown
          children={product?.description}
          rehypePlugins={[rehypeRaw]}
        />
      </div>
      <div className="mt-6 mb-12 bg-white md:p-7 sm:p-5 xs:p-4 w-full">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex items-center justify-start gap-4">
            <div className="bg-primary h-8 w-3 rounded-sm"></div>
            <h3 className="md:text-4xl xs:text-2xl sm:text-3xl font-semibold">
              Sản phẩm liên quan
            </h3>
          </div>
          <Button
            className="text-white xs:hidden sm:block"
            action={() => navigate("/products")}
          >
            Xem tất cả
          </Button>
        </div>
        <SwiperSlider
          swiperRef={swiperRelated}
          data={bestSellingProducts}
          className="relative mt-6"
          slideNav
        />
      </div>
    </Container>
  );
}
