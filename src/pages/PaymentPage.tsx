import { CircleHelp } from "lucide-react";
import LocationIcon from "../components/icons/LocationIcon";
import ShipIcon from "../components/icons/ShipIcon";
import VoucherIcon from "../components/icons/VoucherIcon";
import Container from "../components/layout/Container";
import Button from "../components/common/Button";
import useHangyStore from "../lib/useStore";
import { useGetCart, useGetSelectedItems, usePlaceOrder } from "../apis/web";
import LoadingPage from "./LoadingPage";
import { useMe } from "../apis/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { TOAST_IDS } from "../lib/constants";

export default function PaymentPage() {
  const selectedItemCarts = useHangyStore((state) => state.selectedItemCarts);
  const totalPaymentCarts = useHangyStore((state) => state.totalPaymentCarts);
  const navigate = useNavigate();
  const resetState = useHangyStore((state) => state.reset);
  const { dispatch: useOrderAction } = usePlaceOrder();
  const { data: paymentData, isLoading } =
    useGetSelectedItems(selectedItemCarts);
  const { data: me } = useMe();
  const { mutate } = useGetCart();
  const [noteMessage, setNoteMessage] = useState<string>("");

  function placeOrder() {
    if (!me?.address || !me?.phone) {
      navigate("/user/order");
      toast.error("Vui lòng thêm cung cấp thêm thông tin địa chỉ nhận hàng!");
      return;
    }
    useOrderAction({
      cart_item_ids: selectedItemCarts,
      total_amount: totalPaymentCarts,
      note_message: noteMessage,
    }).then((resp) => {
      if (!resp?.data) {
        toast.error("Something went wrong!", { id: TOAST_IDS.FETCH_ERROR });
        return;
      }
      toast.success("Đặt hàng thành công!", { id: TOAST_IDS.ORDER });
      mutate();
      resetState();
      navigate("/order/complete", { replace: true });
    });
  }

  if (isLoading) return <LoadingPage />;

  return (
    <Container className="mb-6">
      <div className="bg-white w-full shadow-[0_1px_1px_0px_rgba(0,0,0,0.05)] mt-3">
        <div
          className="h-[3px] w-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #6fa6d6, #6fa6d6 33px, transparent 0, transparent 41px, #f18d9b 0, #f18d9b 74px, transparent 0, transparent 82px)",
            backgroundPositionX: "-30px",
            backgroundSize: "116px 3px",
          }}
        ></div>
        <div className="xm:pt-7 xs:pt-4 xm:px-[30px] xs:px-5 pb-6 w-full">
          <div className="flex items-center text-lg text-[#1c95c9] font-medium mb-5">
            <LocationIcon />
            <span className="capitalize ms-[9px]">Địa chỉ nhận hàng</span>
          </div>
          <div className="flex sm:items-center text-base sm:flex-row xs:flex-col">
            <span className="font-bold text-[#222222]">
              {me?.name} (+84) {me?.phone?.slice(1, 10)}
            </span>
            <span className="text-[#000000cc] font-medium sm:ms-5">
              {me?.address}
            </span>
            <span className="text-[#1c95c9] flex items-center justify-center border-[0.5px] rounded-[1px] text-[10px] py-0.5 px-[5px] capitalize ms-[15px] font-medium border-[#1c95c9] h-[17px] md:inline-block xs:hidden">
              Mặc định
            </span>
            <span className="text-sm text-[#4080ee] cursor-pointer ms-10 dl:inline-block xs:hidden">
              Thay đổi
            </span>
          </div>
        </div>
      </div>
      <div className="mt-3 shadow-[0_1px_1px_0px_rgba(0,0,0,0.05)] rounded-[3px] bg-white w-full">
        <div className="grid grid-cols-6 xm:pt-6 xs:pt-4 xm:px-[30px] xs:px-[20px] text-[##0000008a] h-[74px] text-sm font-medium">
          <span className="xm:col-span-3 xs:col-span-6 text-start text-lg text-[#222222] flex items-center">
            Sản phẩm
          </span>
          <span className="xm:col-span-1 xs:hidden text-end text-sm text-[#0000008a] xm:flex items-center justify-end">
            Đơn giá
          </span>
          <span className="xm:col-span-1 xs:hidden text-end text-sm text-[#0000008a] xm:flex items-center justify-end">
            Số lượng
          </span>
          <span className="xm:col-span-1 xs:hidden text-end text-sm text-[#0000008a] xm:flex items-center justify-end">
            Thành tiền
          </span>
        </div>
        <div className="w-full flex flex-col gap-6">
          {paymentData?.map((data) => (
            <div
              key={data.id}
              className="grid grid-cols-6 min-h-[55px] text-sm xm:px-[30px] xs:px-[20px] text-[#222222] overflow-hidden font-medium mt-[15px]"
            >
              <div className="xm:col-span-3 xs:col-span-6 grid xm:grid-cols-3 xs:grid-cols-6">
                <div className="flex items-center sm:col-span-2 xm:col-span-3 xs:col-span-5">
                  <img
                    src={data.product.images[0].url}
                    alt=""
                    className="w-[55px] h-[55px] cursor-pointer flex-none object-contain"
                  />
                  <div className="flex flex-col mx-[15px]">
                    <h3 className="line-clamp-1 cursor-pointer">
                      {data.product.name}
                    </h3>
                    {data.sub_product && (
                      <span className="line-clamp-1 overflow-hidden text-[#929292] font-medium text-sm sm:hidden">
                        Loại: {data.sub_product.name}
                      </span>
                    )}
                    <span className="mt-0.5 text-[#1c95c9] leading-3 border border-[#1c95c9] rounded-sm text-[10px] px-0.5 w-fit">
                      Đổi trả miễn phí 7 ngày
                    </span>
                  </div>
                </div>
                <div className="xs:flex xm:hidden flex-col items-end justify-end">
                  <span>x{data.quantity}</span>
                  <span>
                    ₫
                    {new Intl.NumberFormat("vi-VN", {
                      // style: "currency",
                      currency: "VND",
                    }).format(data.price)}
                  </span>
                </div>
                <div className="text-[#929292] sm:flex xs:hidden items-center justify-center col-span-1 font-medium text-sm">
                  {data.sub_product && (
                    <span className="line-clamp-1 ps-[13px] overflow-hidden">
                      Loại: {data.sub_product.name}
                    </span>
                  )}
                </div>
              </div>
              <div className="xm:col-span-1 xm:flex xs:hidden items-center justify-end">
                <span>
                  ₫
                  {new Intl.NumberFormat("vi-VN", {
                    // style: "currency",
                    currency: "VND",
                  }).format(data.price)}
                </span>
              </div>
              <div className="xm:col-span-1 xs:hidden xm:flex items-center justify-end">
                <span>{data.quantity}</span>
              </div>
              <div className="xm:col-span-1 xm:flex xs:hidden items-center justify-end">
                <span className="font-semibold">
                  ₫
                  {new Intl.NumberFormat("vi-VN", {
                    // style: "currency",
                    currency: "VND",
                  }).format(data.amount)}
                </span>
              </div>
            </div>
          ))}
          <div className="border-y border-dashed flex xm:px-[30px] xm:py-[18px] xs:px-5 xs:py-2.5 items-center justify-end text-sm font-medium gap-20 mt-4">
            <div className="flex items-center gap-1">
              <VoucherIcon />
              <span>Voucher của Shop</span>
            </div>
            <span className="text-[#000055aa] font-bold cursor-pointer">
              Chọn Voucher
            </span>
          </div>
          <div className="bg-[#fafdff] border-b border-dashed text-sm text-[#000000cc] sm:grid sm:grid-cols-3">
            <div className="flex items-center py-4 px-[30px] sm:col-span-1">
              <span className="flex-none">Lời nhắn: </span>
              <input
                type="text"
                placeholder="Lưu ý cho Người bán..."
                value={noteMessage}
                onChange={(e) => setNoteMessage(e.target.value)}
                className="h-10 py-1 px-3 w-full text-[#222] outline-none ms-[15px] flex-1 bg-transparent border"
              />
            </div>
            <div className="py-4 text-sm text-[#000000cc] font-medium sm:col-span-2 border-s border-dashed">
              <div className="flex flex-col w-full pb-5 border-b border-dashed">
                <div className="flex items-center justify-between w-full ps-5 pe-[30px] font-semibold">
                  <span>Đơn vị vận chuyển:</span>
                  <span>Nhanh</span>
                  <span className="text-[#0055aa] mx:inline-block xs:hidden">Thay đổi</span>
                  <span>₫16.500</span>
                </div>
                <p className="flex items-center justify-center text-xs text-[#26aa99] gap-1 mt-2.5">
                  <ShipIcon />
                  Nhận hàng vào 15 Tháng 9 - 18 Tháng 9
                </p>
              </div>
              <div className="pt-4 ps-5 pe-[30px] flex items-center justify-start">
                Được đồng kiểm.
                <CircleHelp className="w-3.5 h-3.5 text-[#0000008a] cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="bg-[#fafdff] xm:py-[15px] xs:py-2 flex items-center justify-end xm:px-[30px] xs:px-5 gap-5">
            <span className="text-sm text-[#0000008a]">
              Tổng số tiền ({selectedItemCarts.length} sản phẩm):
            </span>
            <span className="text-[#1c95c9] font-semibold text-xl">
              ₫
              {new Intl.NumberFormat("vi-VN", {
                // style: "currency",
                currency: "VND",
              }).format(totalPaymentCarts)}
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-[3px] mb-3 mt-5 text-[#222222] font-semibold w-full">
        <div className="xm:px-[30px] xs:px-5 flex items-center justify-between min-h-[90px] ">
          <span className="mx:text-lg xs:text-base">Phương thức thanh toán</span>
          <div className="flex items-center justify-end text-sm gap-16">
            <span className="font-normal">Thanh toán khi nhận hàng</span>
            <span className="text-[#05a] cursor-pointer uppercase xm:inline-block xs:hidden">
              Thay đổi
            </span>
          </div>
        </div>
        <div className="flex items-center justify-end gap-8 py-[15px] px-[25px] text-sm border-y border-dashed">
          <div className="text-[#0000008a] flex flex-col text-start font-normal">
            <span className="leading-10">Tổng tiền hàng</span>
            <span className="leading-10">Phí vận chuyển</span>
            <span className="leading-[50px]">Tổng thanh toán</span>
          </div>
          <div className="text-[#000000cc] flex flex-col">
            <span className="text-end leading-10">
              ₫
              {new Intl.NumberFormat("vi-VN", {
                // style: "currency",
                currency: "VND",
              }).format(totalPaymentCarts)}
            </span>
            <span className="text-end leading-10">₫16.500</span>
            <span className="xm:text-[28px] xs:text-xl text-[#1c95c9] text-end leading-[50px]">
              ₫
              {new Intl.NumberFormat("vi-VN", {
                // style: "currency",
                currency: "VND",
              }).format(totalPaymentCarts + 16500)}
            </span>
          </div>
        </div>
        <div className="xm:px-[30px] xs:px-5 flex items-center justify-between xs:gap-4 xm:gap-0 text-sm font-medium xm:py-6 xs:py-2">
          <p className="font-normal">
            Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo{" "}
            <span className="text-[#4080ee] font-medium cursor-pointer">
              Điều khoản Hangy
            </span>
          </p>
          <Button
            className="bg-[#1c95c9] text-white outline-none py-3 px-[14px] rounded-sm h-10 w-[210px] flex items-center justify-center border border-black/10 shadow-[0_1px_1px_0px_rgba(0,0,0,0.03)]"
            action={placeOrder}
          >
            Đặt hàng
          </Button>
        </div>
      </div>
    </Container>
  );
}
