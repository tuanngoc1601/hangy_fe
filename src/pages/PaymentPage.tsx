import { CircleHelp } from "lucide-react";
import LocationIcon from "../components/icons/LocationIcon";
import ShipIcon from "../components/icons/ShipIcon";
import VoucherIcon from "../components/icons/VoucherIcon";
import Container from "../components/layout/Container";
import Button from "../components/common/Button";

export default function PaymentPage() {
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
        <div className="pt-7 px-[30px] pb-6 w-full">
          <div className="flex items-center text-lg text-primary font-medium mb-5">
            <LocationIcon />
            <span className="capitalize ms-[9px]">Địa chỉ nhận hàng</span>
          </div>
          <div className="flex items-center text-base">
            <span className="font-bold text-[#222222]">
              Tuấn Ngọc (+84) 338597737
            </span>
            <span className="text-[#000000cc] font-medium ms-5">
              Số 19, Ngõ 123 Yên Xá, Xã Tân Triều, Huyện Thanh Trì, Hà Nội
            </span>
            <span className="text-primary flex items-center justify-center border-[0.5px] rounded-[1px] text-[10px] py-0.5 px-[5px] capitalize ms-[15px] font-medium border-primary h-[17px]">
              Mặc định
            </span>
            <span className="text-sm text-[#4080ee] cursor-pointer ms-10 ">
              Thay đổi
            </span>
          </div>
        </div>
      </div>
      <div className="mt-3 shadow-[0_1px_1px_0px_rgba(0,0,0,0.05)] rounded-[3px] bg-white w-full">
        <div className="grid grid-cols-6 pt-6 px-[30px] text-[##0000008a] h-[74px] text-sm font-medium">
          <span className="col-span-3 text-start text-lg text-[#222222] flex items-center">
            Sản phẩm
          </span>
          <span className="col-span-1 text-end text-sm text-[#0000008a] flex items-center justify-end">
            Đơn giá
          </span>
          <span className="col-span-1 text-end text-sm text-[#0000008a] flex items-center justify-end">
            Số lượng
          </span>
          <span className="col-span-1 text-end text-sm text-[#0000008a] flex items-center justify-end">
            Thành tiền
          </span>
        </div>
        <div className="w-full flex flex-col">
          <div className="grid grid-cols-6 min-h-[55px] text-sm px-[30px] text-[#222222] overflow-hidden font-medium mt-[15px]">
            <div className="col-span-3 grid grid-cols-3">
              <div className="flex items-center col-span-2">
                <img
                  src="https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-m017zhok4jt974@resize_w80_nl.webp"
                  alt=""
                  className="w-[55px] h-[55px] cursor-pointer"
                />
                <div className="flex flex-col mx-[15px]">
                  <h3 className="line-clamp-1 cursor-pointer">
                    Máy tăm nước HANGY HG23 và HF- 2 nâng cấp chống thấm nước
                    [BẢO HÀNH ĐỔI MỚI 12 THÁNG - KÈM CỦ SẠC]
                  </h3>
                  <span className="mt-0.5 text-primary leading-3 border border-primary rounded-sm text-[10px] px-0.5 w-fit">
                    Đổi trả miễn phí 7 ngày
                  </span>
                </div>
              </div>
              <div className="text-[#929292] flex items-center justify-center col-span-1 font-medium text-sm">
                <span className="line-clamp-1 ps-[13px] overflow-hidden">
                  Loại: HG23 WhiteB Nâng Cấp
                </span>
              </div>
            </div>
            <div className="col-span-1 flex items-center justify-end">
              <span>₫699.000</span>
            </div>
            <div className="col-span-1 flex items-center justify-end">
              <span>1</span>
            </div>
            <div className="col-span-1 flex items-center justify-end">
              <span className="font-semibold">₫699.000</span>
            </div>
          </div>
          <div className="border-y border-dashed flex px-[30px] py-[18px] items-center justify-end text-sm font-medium gap-20 mt-4">
            <div className="flex items-center gap-1">
              <VoucherIcon />
              <span>Voucher của Shop</span>
            </div>
            <span className="text-[#000055aa] font-bold cursor-pointer">
              Chọn Voucher
            </span>
          </div>
          <div className="bg-[#fafdff] border-b border-dashed text-sm text-[#000000cc] grid grid-cols-3">
            <div className="flex items-center py-4 px-[30px] col-span-1">
              <span className="flex-none">Lời nhắn: </span>
              <input
                type="text"
                placeholder="Lưu ý cho Người bán..."
                className="h-10 py-1 px-3 w-full text-[#222] outline-none ms-[15px] flex-1 bg-transparent border"
              />
            </div>
            <div className="py-4 text-sm text-[#000000cc] font-medium col-span-2 border-s border-dashed">
              <div className="flex flex-col w-full pb-5 border-b border-dashed">
                <div className="flex items-center justify-between w-full ps-5 pe-[30px] font-semibold">
                  <span>Đơn vị vận chuyển:</span>
                  <span>Nhanh</span>
                  <span className="text-[#0055aa]">Thay đổi</span>
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
          <div className="bg-[#fafdff] py-[15px] flex items-center justify-end px-[30px] gap-5">
            <span className="text-sm text-[#0000008a]">
              Tổng số tiền (2 sản phẩm):
            </span>
            <span className="text-primary font-semibold text-xl">₫715.500</span>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-[3px] mb-3 mt-5 text-[#222222] font-semibold w-full">
        <div className="px-[30px] flex items-center justify-between min-h-[90px] ">
          <span className="text-lg">Phương thức thanh toán</span>
          <div className="flex items-center justify-end text-sm gap-16">
            <span className="font-normal">Thanh toán khi nhận hàng</span>
            <span className="text-[#05a] cursor-pointer uppercase">
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
            <span className="text-end leading-10">₫699.000</span>
            <span className="text-end leading-10">₫16.500</span>
            <span className="text-[28px] text-primary text-end leading-[50px]">
              ₫715.500
            </span>
          </div>
        </div>
        <div className="px-[30px] flex items-center justify-between text-sm font-medium py-6">
          <p className="font-normal">
            Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo{" "}
            <span className="text-[#4080ee] font-medium cursor-pointer">Điều khoản Hangy</span>
          </p>
          <Button className="bg-primary text-white outline-none py-3 px-[14px] rounded-sm h-10 w-[210px] flex items-center justify-center border border-black/10 shadow-[0_1px_1px_0px_rgba(0,0,0,0.03)]">
            Đặt hàng
          </Button>
        </div>
      </div>
    </Container>
  );
}
