import { useNavigate } from "react-router-dom";
import { MallBrand } from "../assets";
import FreeShip from "./icons/FreeShip";
import StarRating from "./icons/StarRating";

export default function ProductItem({
  name,
  slug,
  daily_price,
}: {
  name: string;
  slug: string;
  daily_price: number;
}) {
  const navigate = useNavigate();
  return (
    <div
      className="border hover:border-[#ee4d2d] transition ease-in-out duration-300 cursor-pointer hover:-translate-y-[1px] overflow-visible hover:shadow-[0_0_15px_0_#ee4d2d66]"
      onClick={() => navigate(`/products/${slug}`)}
    >
      <img
        src="https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lzm89uqf9jmpb2_tn.webp"
        alt=""
        className="w-full"
      />
      <div className="p-2">
        <h3 className="text-base text-[#000000cc] font-medium min-h-12 line-clamp-2">
          <img
            src={MallBrand}
            alt=""
            className="w-[30px] h-[14px] mr-1 mb-0.5 inline-block"
          />
          {name ??
            "Máy tăm nước HANGY HG23 và HF-2 nâng cấp chống thấm nước [BẢO HÀNH ĐỔI"}
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 mt-1">
            <p className="font-semibold truncate text-[#ee4d2d]">
              <span className="text-sm mr-px">₫</span>
              <span className="text-lg truncate font-bold">
                {new Intl.NumberFormat("vi-VN", {
                  // style: "currency",
                  currency: "VND",
                }).format(daily_price) || 730000}
              </span>
            </p>
            <span className="px-1 py-0.5 font-medium text-[10px] rounded-sm text-[#ee4d2d] bg-[#feeeea]">
              -53%
            </span>
          </div>
          <FreeShip />
        </div>
        <div className="flex items-center justify-start text-sm text-[#000000de] divide-x mt-2 font-medium">
          <div className="flex items-center gap-0.5 mr-1.5">
            <StarRating />
            <span>5.0</span>
          </div>
          <p className="ps-1.5">Đã bán 124,6k</p>
        </div>
      </div>
    </div>
  );
}
