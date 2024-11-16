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
        <h3 className="md:text-base xs:text-sm xl:text-lg xxl:text-2xl text-[#000000cc] font-medium md:min-h-12 xs:min-h-8 line-clamp-2">
          <img
            src={MallBrand}
            alt=""
            className="md:w-[30px] md:h-[14px] xs:w-5 xs:h-2.5 mr-1 mb-0.5 inline-block"
          />
          {name}
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 mt-1">
            <p className="font-semibold truncate text-primary">
              <span className="text-sm mr-px">₫</span>
              <span className="md:text-lg xs:text-sm xl:text-xl xxl:text-3xl truncate font-bold">
                {new Intl.NumberFormat("vi-VN", {
                  // style: "currency",
                  currency: "VND",
                }).format(daily_price) || 0}
              </span>
            </p>
            <span className="px-1 py-0.5 font-medium xs:text-[10px] dl:text-sm xxl:text-base rounded-sm text-[#ee4d2d] bg-[#feeeea]">
              -53%
            </span>
          </div>
          <FreeShip className="xs:w-5 sm:w-7 xl:w-10 xxl:w-12" />
        </div>
        <div className="flex items-center justify-start md:text-sm xs:text-xs xl:text-base xxl:text-lg text-[#000000de] divide-x mt-2 font-medium">
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
