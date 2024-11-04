import { Link, useNavigate } from "react-router-dom";
import Container from "../components/layout/Container";
import BreadcrumbIcon from "../components/icons/BreadcrumbIcon";
import Checkbox from "../components/common/Checkbox";
import VoucherIcon from "../components/icons/VoucherIcon";
import Button from "../components/common/Button";
import SwiperSlider from "../components/SwiperSlider";
import { useEffect, useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import {
  useBestSellingProducts,
  useDeleteAllCarts,
  useDeleteCartItem,
  useGetCart,
  useUpdateQuantity,
} from "../apis/web";
import { AppError } from "../apis/error";
import { EmptyCart } from "../assets";
import { ProductItem, SubProductType } from "../types/app";
import VariantDropdown from "../components/dropdown/VariantDropdown";
import LoadingPage from "./LoadingPage";
import useHangyStore from "../lib/useStore";
import toast from "react-hot-toast";
import { TOAST_IDS } from "../lib/constants";
import useWindowSize from "../hooks/useWindowSize";
import { MdDelete } from "react-icons/md";

export default function CartPage() {
  const { data: carts, isLoading, mutate } = useGetCart();
  const { data: bestSellingProducts } = useBestSellingProducts();
  const { dispatch: useDeleteAllCartItems } = useDeleteAllCarts();
  const swiperProducts = useRef<SwiperType>();
  const navigate = useNavigate();
  const { width } = useWindowSize();
  const isSelectedAllCart = useHangyStore((state) => state.isSelectedAllCart);
  const setIsSeletedAllCart = useHangyStore(
    (state) => state.setIsSeletedAllCart
  );
  const selectedItemCarts = useHangyStore((state) => state.selectedItemCarts);
  const setSelectedItemCarts = useHangyStore(
    (state) => state.setSelectedItemCarts
  );
  const totalPaymentCarts = useHangyStore((state) => state.totalPaymentCarts);
  const setTotalPaymentCarts = useHangyStore(
    (state) => state.setTotalPaymentCarts
  );

  const handleCheckboxChange = (id: string) => {
    let newSelectedItems = [...selectedItemCarts];
    if (selectedItemCarts.includes(id)) {
      newSelectedItems = newSelectedItems.filter((itemId) => itemId !== id);
      setSelectedItemCarts(newSelectedItems);
    } else {
      newSelectedItems = [...newSelectedItems, id].sort(
        (a, b) =>
          (carts?.findIndex((item) => item.id === a) || 0) -
          (carts?.findIndex((item) => item.id === b) || 0)
      );
      setSelectedItemCarts(newSelectedItems);
    }

    setIsSeletedAllCart(newSelectedItems.length === carts?.length);

    setTotalPaymentCarts(
      newSelectedItems.reduce((acc, itemId) => {
        const selected = carts?.find((item) => item.id === itemId);
        return acc + (selected?.amount || 0);
      }, 0)
    );
  };

  const handleSelectedAll = () => {
    const newSelectedAllState = !isSelectedAllCart;

    if (newSelectedAllState) {
      setSelectedItemCarts(carts?.map((item) => item.id) || []);
      setTotalPaymentCarts(
        carts?.reduce((total, item) => total + item.amount, 0) || 0
      );
    } else {
      setSelectedItemCarts([]);
      setTotalPaymentCarts(0);
    }

    setIsSeletedAllCart(newSelectedAllState);
  };

  const deleteAllCarts = () => {
    if (!selectedItemCarts.length) {
      toast.error("Vui lòng chọn sản phẩm!", { id: TOAST_IDS.CHOOSE_PRODUCT });
      return;
    }
    useDeleteAllCartItems({ cart_item_ids: selectedItemCarts }).then((resp) => {
      if (!resp?.data) {
        toast.error("Something went wrong!", { id: TOAST_IDS.FETCH_ERROR });
        return;
      }
      setSelectedItemCarts([]);
      setTotalPaymentCarts(0);
      setIsSeletedAllCart(false);
      mutate();
      toast.success("Xoá sản phẩm thành công!", {
        id: TOAST_IDS.DELETE_ALL_CART,
      });
    });
  };

  useEffect(() => {
    if (
      carts &&
      carts.length > 0 &&
      carts.length === selectedItemCarts.length
    ) {
      setIsSeletedAllCart(true);
    } else {
      setIsSeletedAllCart(false);
    }
    setTotalPaymentCarts(
      selectedItemCarts.reduce((acc, itemId) => {
        const selected = carts?.find((item) => item.id === itemId);
        return acc + (selected?.amount || 0);
      }, 0)
    );
  }, [carts, setTotalPaymentCarts]);

  if (isLoading) return <LoadingPage />;

  return (
    <Container className="xs:px-0">
      <div className="w-full mt-5 sm:px-0 xs:px-4 flex items-center justify-start gap-2 text-sm">
        <Link to={"/"} className="text-[#0055aa]">
          Trang chủ
        </Link>
        <BreadcrumbIcon />
        <span>Giỏ hàng</span>
      </div>
      {carts && carts.length > 0 ? (
        <>
          <div className="mt-5 w-full">
            <div className="capitalize flex items-center sm:px-5 xs:px-2 text-sm bg-white h-[55px] rounded text-[#888888] font-medium mb-3">
              <div className="flex flex-1 w-[58px] sm:ps-3 sm:pe-5 xs:p-2 items-center">
                <Checkbox
                  checked={isSelectedAllCart}
                  onChange={() => handleSelectedAll()}
                />
              </div>
              <div className="sm:w-[46.27949%] xs:w-full text-[#000000cc]">
                Sản phẩm
              </div>
              <div className="md:w-[15.88022%] xs:hidden md:block text-center">
                Đơn giá
              </div>
              <div className="md:w-[12.4265%] sm:w-[17.7199%] xs:hidden sm:block text-center">
                Số lượng
              </div>
              <div className="md:w-[10.43557%] sm:w-[15.72897%] sm:block xs:hidden text-center">
                Số tiền
              </div>
              <div className="md:w-[12.70417%] sm:w-[17.99757%] sm:block xs:hidden text-center">
                Thao tác
              </div>
            </div>
            {!!carts?.length &&
              carts?.map((item) => {
                const price = item.product.is_flash_sales
                  ? item.sub_product?.flash_sale_price
                    ? item.sub_product.flash_sale_price
                    : item.product.flash_sale_price
                  : item.sub_product?.daily_price
                  ? item.sub_product.daily_price
                  : item.product.daily_price;
                return (
                  <CartItem
                    key={item.id}
                    id={item.id}
                    product={item.product}
                    subProduct={item.sub_product}
                    quantity={item.quantity}
                    real_price={
                      item.sub_product?.real_price || item.product.real_price
                    }
                    price={price}
                    amount={price * item.quantity}
                    checked={selectedItemCarts.includes(item.id)}
                    onChange={() => handleCheckboxChange(item.id)}
                    image={item.product.images[0].url}
                  />
                );
              })}
          </div>
          <section className="sticky z-30 bg-white text-base font-medium w-full mt-5 text-[#222222] bottom-0 shadow-[0_-1px_3px_-1px_rgba(0,0,0,0.3)]">
            <div className="flex items-center justify-end py-3 sm:gap-52 xs:gap-12 xs:text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <VoucherIcon />
                <span>Hangy Voucher</span>
              </div>
              <span className="text-[#05a] cursor-pointer text-sm sm:mr-7 xs:mr-2">
                Chọn hoặc nhập mã
              </span>
            </div>
            <div className="w-full flex flex-row items-center justify-between gap-4 xs:px-2 sm:ps-5 py-3 sm:pr-7 border-t border-dashed sm:text-base mx:text-sm xs:text-xs">
              <div className="flex items-center justify-start">
                <div className="flex flex-1 sm:w-[58px] xs:w-fit sm:ps-3 sm:pe-5 xs:p-2 items-center">
                  <Checkbox
                    checked={isSelectedAllCart}
                    onChange={() => handleSelectedAll()}
                  />
                </div>
                <span className="cursor-pointer">
                  Chọn tất cả {width >= 768 && `(${carts?.length})`}
                </span>
                <span
                  className="sm:ms-8 xs:hidden cursor-pointer hover:text-primary"
                  onClick={() => deleteAllCarts()}
                >
                  Xoá
                </span>
              </div>
              <div className="flex items-center justify-end gap-2">
                <div className="flex items-center">
                  <span>
                    Tổng thanh toán{" "}
                    {width >= 768 && `(${selectedItemCarts.length} Sản phẩm)`}:
                  </span>
                  <span className="text-primary sm:text-2xl mx:text-xl xs:text-base ms-[5px]">
                    ₫&nbsp;
                    {new Intl.NumberFormat("vi-VN", {
                      // style: "currency",
                      currency: "VND",
                    }).format(totalPaymentCarts)}
                  </span>
                </div>
                <div className="flex">
                  <Button
                    className="capitalize font-light sm:h-10 sm:text-sm xs:text-xs rounded-sm md:w-[210px] sm:w-[150px] mx:w-[100px] xs:w-[80px] xs:h-[30px] flex-1 xs:px-0 text-white flex items-center justify-center"
                    action={() => {
                      if (!selectedItemCarts.length) {
                        toast.error("Vui lòng chọn sản phẩm thanh toán!", {
                          id: TOAST_IDS.CHOOSE_PRODUCT,
                        });
                        return;
                      }
                      navigate("/checkout");
                    }}
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
      <div className="mt-12 mb-12 bg-transparent md:p-7 xs:p-4 w-full">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex items-center justify-start gap-4">
            <div className="bg-primary h-6 w-3 rounded-sm"></div>
            <h3 className="md:text-2xl sm:text-xl xs:text-lg font-semibold uppercase text-[#0000008a]">
              Có thể bạn cũng thích
            </h3>
          </div>
          <Button className="bg-transparent text-white text-sm font-light sm:flex xs:hidden items-center justify-center py-[5px] px-[7px]">
            Xem tất cả
          </Button>
        </div>
        <SwiperSlider
          swiperRef={swiperProducts}
          data={bestSellingProducts}
          className="relative mt-6"
          slideNav
        />
      </div>
    </Container>
  );
}

interface CartItemProps {
  id: string;
  product: ProductItem;
  subProduct: SubProductType | null;
  quantity: number;
  real_price: number;
  price: number;
  amount: number;
  checked: boolean;
  onChange: () => void;
  image: string;
}

const CartItem = ({
  id,
  product,
  subProduct,
  quantity,
  real_price,
  price,
  amount,
  checked,
  onChange,
  image,
}: CartItemProps) => {
  // const [num, setNum] = useState<number>(quantity);
  const { mutate } = useGetCart();
  const selectedItemCarts = useHangyStore((state) => state.selectedItemCarts);
  const setSelectedItemCarts = useHangyStore(
    (state) => state.setSelectedItemCarts
  );
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
          toast.error("Something went wrong!", { id: TOAST_IDS.FETCH_ERROR });
          return;
        }
        if (checked)
          setSelectedItemCarts(selectedItemCarts.filter((item) => item !== id));
        mutate();
        toast.success("Xoá sản phẩm thành công!", {
          id: TOAST_IDS.DELETE_CART_SUCCESS,
        });
      })
      .catch((err) => {
        if (err instanceof AppError) {
          console.error(err);
        }
      });
  }
  return (
    <section className="text-sm text-[#000000de] font-medium bg-white">
      <div className="pt-[15px] pb-5 sm:px-5 xs:px-2 mt-[15px] flex items-center relative">
        <div
          className="absolute right-3 top-11 sm:hidden cursor-pointer"
          onClick={() => deleteCartItem()}
        >
          <MdDelete className="w-6 h-6 text-gray-500 hover:text-primary" />
        </div>
        <div className="flex flex-1 w-[58px] sm:ps-3 sm:pe-5 xs:p-2 items-center xs:-translate-y-9 sm:-translate-y-5 md:-translate-y-0">
          <Checkbox checked={checked} onChange={onChange} />
        </div>
        <div className="md:w-[29.03811%] sm:w-[46.27949%] flex items-start">
          <img
            src={image}
            alt=""
            className="w-20 h-20 flex-1 object-contain cursor-pointer"
          />
          <div className="flex leading-4 pe-5 ps-2.5 flex-col items-start">
            <h3 className="mb-[5px] max-h-8 md:line-clamp-2 xs:line-clamp-1 leading-4 cursor-pointer">
              {product.name}
            </h3>
            {subProduct && (
              <div
                className="relative bg-gray-200 rounded-sm px-1 py-0.5 text-xs cursor-pointer mb-1 md:hidden line-clamp-1"
                data-dropdown-toggle="dropdownVariant"
              >
                <div
                  onMouseDown={(event: React.MouseEvent) => {
                    if (subProduct) {
                      event.stopPropagation();
                      setIsOpenVariant(!isOpenVariant);
                    }
                  }}
                  className="flex items-center justify-start line-clamp-1"
                >
                  <div className="flex text-left capitalize items-center gap-2 line-clamp-1">
                    Loại:&nbsp;
                  </div>
                  <div className="overflow-hidden line-clamp-1">
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
            <span className=" text-primary border border-primary rounded-sm block text-[10px] leading-3 mb-[5px] py-0.5 px-1">
              Đổi trả miễn phí 7 ngày
            </span>
            <img
              src="https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-lzag3ikjpt41b3"
              alt=""
              className="h-[18px] object-contain object-left"
            />
            <div className="flex items-center justify-start gap-2.5 md:hidden py-2.5">
              <span className="line-through text-[#0000008a]">
                ₫
                {new Intl.NumberFormat("vi-VN", {
                  currency: "VND",
                }).format(real_price)}
              </span>
              <span className="">
                ₫
                {new Intl.NumberFormat("vi-VN", {
                  currency: "VND",
                }).format(price)}
              </span>
            </div>
            <div className="text-black/80 text-2xl font-light flex sm:hidden items-center justify-start">
              <button
                type="button"
                className="flex h-8 w-8 outline-none font-light cursor-pointer rounded-s-sm border border-black/10 justify-center items-center pb-0.5"
                onClick={() => {
                  reduceAction()
                    .then((resp) => {
                      if (!resp?.data) {
                        toast.error("Something went wrong!", {
                          id: TOAST_IDS.FETCH_ERROR,
                        });
                        return;
                      }
                      mutate();
                      toast.success("Cập nhật thành công!", {
                        id: TOAST_IDS.UPDATE_CART,
                      });
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
                        toast.error("Something went wrong!", {
                          id: TOAST_IDS.FETCH_ERROR,
                        });
                        return;
                      }
                      mutate();
                      toast.success("Cập nhật thành công!", {
                        id: TOAST_IDS.UPDATE_CART,
                      });
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
          </div>
        </div>
        <div className="md:w-[17.24138%] xs:hidden md:flex flex-col cursor-pointer text-[#0000008a]">
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
        <div className="md:w-[15.88022%] xs:hidden md:flex items-center justify-center gap-2.5">
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
        <div className="text-black/80 text-2xl font-light sm:flex items-center justify-center md:w-[12.4265%] sm:w-[17.7199%] xs:hidden">
          <button
            type="button"
            className="flex h-8 w-8 outline-none font-light cursor-pointer rounded-s-sm border border-black/10 justify-center items-center pb-0.5"
            onClick={() => {
              reduceAction()
                .then((resp) => {
                  if (!resp?.data) {
                    toast.error("Something went wrong!", {
                      id: TOAST_IDS.FETCH_ERROR,
                    });
                    return;
                  }
                  mutate();
                  toast.success("Cập nhật thành công!", {
                    id: TOAST_IDS.UPDATE_CART,
                  });
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
                    toast.error("Something went wrong!", {
                      id: TOAST_IDS.FETCH_ERROR,
                    });
                    return;
                  }
                  mutate();
                  toast.success("Cập nhật thành công!", {
                    id: TOAST_IDS.UPDATE_CART,
                  });
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
        <div className="md:w-[10.43557%] sm:w-[15.72897%] xs:hidden sm:flex items-center justify-center">
          <span className="text-primary">
            ₫
            {new Intl.NumberFormat("vi-VN", {
              // style: "currency",
              currency: "VND",
            }).format(amount)}
          </span>
        </div>
        <div className="md:w-[12.70417%] sm:w-[17.99757%] xs:hidden sm:flex items-center justify-center">
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
