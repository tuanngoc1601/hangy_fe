import clsx from "clsx";
import { ProductItem, SubProductType } from "../../types/app";
import Dropdown from "../common/Dropdown";
import { useGetCart, useUpdateSubProductItem } from "../../apis/web";
import { AppError } from "../../apis/error";

const VariantDropdown = ({
  product,
  subProduct,
  setIsOpen,
}: {
  product: ProductItem;
  subProduct: SubProductType;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { mutate } = useGetCart();
  const { dispatch: updateSubProduct } = useUpdateSubProductItem(
    product.id,
    subProduct.id
  );
  function updateVariant(subId: string) {
    updateSubProduct({ sub: subId })
      .then((resp) => {
        if (!resp?.data) {
          console.log("Something went wrong!");
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
    <Dropdown
      setIsOpenDropdown={setIsOpen}
      className="absolute top-full -left-1/2 z-50 border bg-white p-4 rounded-sm shadow-sm"
    >
      <div
        className="flex flex-col gap-4 cursor-default transition"
        id="dropdownVariant"
      >
        <p className="capitalize">Phân loại</p>
        <div className="flex flex-wrap items-center max-h-[220px] overflow-y-scroll text-[#222] font-medium w-[400px] gap-2 text-sm">
          {product.sub_products?.map((sub) => (
            <div
              key={sub.id}
              className={clsx(
                "p-2 h-10 min-w-[80px] flex items-center justify-start border border-[#00000017] text-[#000000cc] rounded-sm cursor-pointer visible text-left gap-2 hover:border-[#d0011b] hover:text-[#d0011b]",
                subProduct?.id === sub.id && "border-[#d0011b] text-[#d0011b]"
              )}
              onClick={() => {
                if (sub.id !== subProduct.id) {
                  updateVariant(sub.id);
                  setIsOpen(false);
                }
              }}
            >
              <img
                src="https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lzxl44ickmg124"
                alt=""
                className="w-6 h-6"
              />
              <p>{sub.name}</p>
            </div>
          ))}
        </div>
      </div>
    </Dropdown>
  );
};

export default VariantDropdown;
