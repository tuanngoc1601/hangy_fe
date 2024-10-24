import { useNavigate } from "react-router-dom";
import { MallBrand } from "../assets";
import FreeShip from "./icons/FreeShip";
import StarRating from "./icons/StarRating";
import clsx from "clsx";

export default function ProductItem({
  name,
  slug,
  daily_price,
  image,
  className,
}: {
  name: string;
  slug: string;
  daily_price: number;
  image: string;
  className?: string;
}) {
  const navigate = useNavigate();
  return (
    <div
      className={clsx(
        "border hover:border-primary transition ease-in-out duration-300 cursor-pointer hover:shadow-[0_0_15px_0_#1c95c966]",
        className
      )}
      onClick={() => navigate(`/products/${slug}`)}
    >
      <img src={image} alt="" className="w-full aspect-square object-contain" />
      <div className="p-2">
        <h3 className="text-base text-[#000000cc] font-medium min-h-12 line-clamp-2">
          <img
            src={MallBrand}
            alt=""
            className="w-[30px] h-[14px] mr-1 mb-0.5 inline-block"
          />
          {name}
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 mt-1">
            <p className="font-semibold truncate text-primary">
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
