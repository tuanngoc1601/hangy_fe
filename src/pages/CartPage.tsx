import { Link, useNavigate } from "react-router-dom";
import Container from "../components/layout/Container";
import BreadcrumbIcon from "../components/icons/BreadcrumbIcon";
import Checkbox from "../components/common/Checkbox";
import VoucherIcon from "../components/icons/VoucherIcon";
import Button from "../components/common/Button";
import SwiperSlider from "../components/SwiperSlider";
import { useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { useDeleteCartItem, useGetCart, useUpdateQuantity } from "../apis/web";
import { AppError } from "../apis/error";
import { EmptyCart } from "../assets";
import { ProductItem, SubProductType } from "../types/app";
import VariantDropdown from "../components/dropdown/VariantDropdown";
import LoadingPage from "./LoadingPage";

export default function CartPage() {
  const { data: carts, isLoading } = useGetCart();
  const swiperProducts = useRef<SwiperType>();
  const navigate = useNavigate();

  if (isLoading) return <LoadingPage />;
  
  return (
    <Container>
      <div className="w-full mt-5 flex items-center justify-start gap-2 text-sm">
        <Link to={"/"} className="text-[#0055aa]">
          Trang chủ
        </Link>
        <BreadcrumbIcon />
        <span>Giỏ hàng</span>
      </div>
      {carts && carts.length > 0 ? (
        <>
          <div className="mt-5 w-full">
            <div className="capitalize flex items-center px-5 text-sm bg-white h-[55px] rounded text-[#888888] font-medium mb-3">
              <div className="flex min-w-[58px] ps-3 pe-5 items-center">
                <Checkbox />
              </div>
              <div className="w-[46.27949%] text-[#000000cc]">Sản phẩm</div>
              <div className="w-[15.88022%] text-center">Đơn giá</div>
              <div className="w-[12.4265%] text-center">Số lượng</div>
              <div className="w-[10.43557%] text-center">Số tiền</div>
              <div className="w-[12.70417%] text-center">Thao tác</div>
            </div>
            {!!carts?.length &&
              carts?.map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  product={item.product}
                  subProduct={item.sub_product}
                  quantity={item.quantity}
                  real_price={
                    item.sub_product?.real_price || item.product.real_price
                  }
                  price={item.price}
                  amount={item.amount}
                />
              ))}
          </div>
          <section className="sticky z-30 bg-white text-base font-medium w-full mt-5 text-[#222222] bottom-0 shadow-[0_-1px_3px_-1px_rgba(0,0,0,0.3)]">
            <div className="flex items-center justify-end py-3 gap-52">
              <div className="flex items-center gap-2">
                <VoucherIcon />
                <span>Hangy Voucher</span>
              </div>
              <span className="text-[#05a] cursor-pointer text-sm mr-7">
                Chọn hoặc nhập mã
              </span>
            </div>
            <div className="w-full flex flex-row items-center justify-between ps-5 py-3 pr-7 border-t border-dashed">
              <div className="flex items-center justify-start">
                <div className="flex min-w-[58px] ps-3 pe-5 items-center">
                  <Checkbox />
                </div>
                <span className="cursor-pointer">
                  Chọn tất cả ({carts?.length})
                </span>
                <span className="ms-8 cursor-pointer hover:text-primary">
                  Xoá
                </span>
              </div>
              <div className="flex items-center justify-end gap-2">
                <div className="flex items-center">
                  <span>Tổng thanh toán (0 Sản phẩm):</span>
                  <span className="text-primary text-2xl ms-[5px]">₫0</span>
                </div>
                <div>
                  <Button
                    className="capitalize font-light h-10 text-sm rounded-sm w-[210px] text-white"
                    action={() => navigate("/checkout")}
                  >
                    Mua hàng
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <div className="w-full bg-white mt-5 flex flex-col items-center py-8">
          <img src={EmptyCart} alt="" className="w-[300px]" />
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm font-semibold">Giỏ hàng của bạn còn trống</p>
            <Button
              className="uppercase text-white rounded-sm"
              action={() => navigate("/products")}
            >
              Mua ngay
            </Button>
          </div>
        </div>
      )}
      <div className="mt-12 mb-12 bg-white p-7 w-full">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex items-center justify-start gap-4">
            <div className="bg-primary h-6 w-3 rounded-sm"></div>
            <h3 className="text-2xl font-semibold uppercase text-[#0000008a]">
              Có thể bạn cũng thích
            </h3>
          </div>
          <Button className="bg-transparent text-white text-sm font-light flex items-center justify-center py-[5px] px-[7px]">
            Xem tất cả
          </Button>
        </div>
        <SwiperSlider
          swiperRef={swiperProducts}
          className="relative mt-6"
          slideNav
        />
      </div>
    </Container>
  );
}

const CartItem = ({
  id,
  product,
  subProduct,
  quantity,
  real_price,
  price,
  amount,
}: {
  id: string;
  product: ProductItem;
  subProduct: SubProductType | null;
  quantity: number;
  real_price: number;
  price: number;
  amount: number;
}) => {
  // const [num, setNum] = useState<number>(quantity);
  const { mutate } = useGetCart();
  const [isOpenVariant, setIsOpenVariant] = useState<boolean>(false);
  const { dispatch: useDeleteItem } = useDeleteCartItem(id);
  const { dispatch: increaseAction } = useUpdateQuantity(
    "increase",
    product.id,
    subProduct ? subProduct.id : null
  );
  const { dispatch: reduceAction } = useUpdateQuantity(
    "reduce",
    product.id,
    subProduct ? subProduct.id : null
  );
  function deleteCartItem() {
    useDeleteItem()
      .then((resp) => {
        if (!resp.data) {
          console.log("something went wrong!");
          return;
        }
        mutate();
      })
      .catch((err) => {
        if (err instanceof AppError) {
          console.error(err);
        }
      });
  }
  return (
    <section className="text-sm text-[#000000de] font-medium bg-white">
      <div className="pt-[15px] pb-5 px-5 mt-[15px] flex items-center">
        <div className="flex min-w-[58px] ps-3 pe-5 items-center">
          <Checkbox />
        </div>
        <div className="w-[29.03811%] flex items-start">
          <img
            src="https://down-vn.img.susercontent.com/file/bd43d8449c91a5af4a7f5af8b71e04d3"
            alt=""
            className="w-20 h-20 object-contain cursor-pointer"
          />
          <div className="flex overflow-hidden leading-4 pe-5 ps-2.5 flex-col items-start">
            <h3 className="mb-[5px] max-h-8 line-clamp-2 leading-4 cursor-pointer">
              {product.name}
            </h3>
            <span className=" text-primary border border-primary rounded-sm block text-[10px] leading-3 mb-[5px] py-0.5 px-1">
              Đổi trả miễn phí 7 ngày
            </span>
            <img
              src="https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-lzag3ikjpt41b3"
              alt=""
              className="h-[18px] object-contain object-left"
            />
          </div>
        </div>
        <div className="w-[17.24138%] flex flex-col cursor-pointer text-[#0000008a]">
          {subProduct && (
            <div className="relative" data-dropdown-toggle="dropdownVariant">
              <div
                onMouseDown={(event: React.MouseEvent) => {
                  if (subProduct) {
                    event.stopPropagation();
                    setIsOpenVariant(!isOpenVariant);
                  }
                }}
              >
                <div className="flex text-left capitalize items-center gap-2">
                  Phân loại hàng
                  <div className="border-b-0 border-l-4 border-r-4 border-transparent border-t-[5px] border-t-[#0000008a] mr-2.5"></div>
                </div>
                <div className="overflow-hidden line-clamp-2 mt-[5px]">
                  {subProduct.name}
                </div>
              </div>
              {isOpenVariant && (
                <VariantDropdown
                  product={product}
                  subProduct={subProduct}
                  setIsOpen={setIsOpenVariant}
                />
              )}
            </div>
          )}
        </div>
        <div className="w-[15.88022%] flex items-center justify-center gap-2.5">
          <span className="line-through text-[#0000008a]">
            ₫
            {new Intl.NumberFormat("vi-VN", {
              // style: "currency",
              currency: "VND",
            }).format(real_price)}
          </span>
          <span className="">
            ₫
            {new Intl.NumberFormat("vi-VN", {
              // style: "currency",
              currency: "VND",
            }).format(price)}
          </span>
        </div>
        <div className="text-black/80 text-2xl font-light flex items-center justify-center w-[12.4265%]">
          <button
            type="button"
            className="flex h-8 w-8 outline-none font-light cursor-pointer rounded-s-sm border border-black/10 justify-center items-center pb-0.5"
            onClick={() => {
              reduceAction()
                .then((resp) => {
                  if (!resp?.data) {
                    console.log("something went wrong!");
                    return;
                  }
                  mutate();
                })
                .catch((err) => {
                  if (err instanceof AppError) {
                    console.error(err);
                  }
                });
            }}
          >
            -
          </button>
          <input
            type="text"
            value={quantity}
            name="amount"
            // onChange={(e) => setNum(e.target.value)}
            className="border border-black/10 border-s-0 border-e-0 text-base h-8 w-[50px] text-center cursor-text bg-transparent font-medium flex items-center outline-none"
          />
          <button
            type="button"
            className="flex h-8 w-8 outline-none font-light cursor-pointer rounded-e-sm border border-black/10 items-center justify-center pb-0.5"
            onClick={() => {
              increaseAction()
                .then((resp) => {
                  if (!resp?.data) {
                    console.log("something went wrong!");
                    return;
                  }
                  mutate();
                })
                .catch((err) => {
                  if (err instanceof AppError) {
                    console.error(err);
                  }
                });
            }}
          >
            +
          </button>
        </div>
        <div className="w-[10.43557%] flex items-center justify-center">
          <span className="text-primary">
            ₫
            {new Intl.NumberFormat("vi-VN", {
              // style: "currency",
              currency: "VND",
            }).format(amount)}
          </span>
        </div>
        <div className="w-[12.70417%] flex items-center justify-center">
          <span
            className="hover:text-primary cursor-pointer"
            onClick={() => deleteCartItem()}
          >
            Xoá
          </span>
        </div>
      </div>
    </section>
  );
};
