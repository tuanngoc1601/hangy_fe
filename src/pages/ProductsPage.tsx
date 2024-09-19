import ArrowIcon from "../components/icons/ArrowIcon";
import BarIcon from "../components/icons/BarIcon";
import Container from "../components/layout/Container";
import ProductItem from "../components/ProductItem";

export default function ProductsPage() {
  return (
    <Container>
      <div className="w-full flex flex-row items-start my-8 gap-[22px]">
        <aside className="shrink-0 grow-0 w-[180px] flex flex-col sticky bottom-0 top-[95px]">
          <div className="border-b text-black/80 text-base font-bold h-[50px] w-full flex items-center justify-start capitalize mb-2.5">
            <BarIcon />
            Danh mục
          </div>
          <div>
            <ul className="text-sm text-black/80 font-semibold leading-4 overflow-hidden">
              <li className="px-2 py-2.5 line-clamp-3 cursor-pointer max-h-12 uppercase">
                Sản phẩm
              </li>
              <li className="px-2 py-2.5 line-clamp-3 cursor-pointer max-h-12 uppercase">
                Mua là có quà
              </li>
              <li className="px-2 py-2.5 line-clamp-3 cursor-pointer max-h-12 uppercase">
                Máy tăm nước
              </li>
              <li className="px-2 py-2.5 line-clamp-3 cursor-pointer max-h-12 uppercase">
                Bàn chải điện
              </li>
              <li className="px-2 py-2.5 line-clamp-3 cursor-pointer max-h-12 uppercase">
                COMBO 💥 SALE SIÊU CHẤT
              </li>
              <li className="px-2 py-2.5 line-clamp-3 cursor-pointer max-h-12 uppercase">
                💥 FLASH SALE
              </li>
              <li className="px-2 py-2.5 line-clamp-3 cursor-pointer max-h-12 uppercase">
                Phụ kiện máy tăm nước
              </li>
            </ul>
          </div>
        </aside>
        <div className="w-full">
          <div className="flex items-center justify-between text-sm rounded-sm py-[13px] px-5 bg-[#00000008]">
            <div className="flex items-center text-[#000000cc] font-medium gap-2">
              <span className="bg-transparent text-[#555555]">
                Sắp xếp theo
              </span>
              <span className="bg-primary text-white rounded-sm h-[34px] px-[15px] outline-none capitalize leading-[34px] cursor-pointer">
                Phổ biến
              </span>
              <span className="bg-white h-[34px] px-[15px] rounded-sm leading-[34px] cursor-pointer">
                Bán chạy
              </span>
              <span className="bg-white h-[34px] px-[15px] rounded-sm leading-[34px] cursor-pointer">
                Phổ biến
              </span>
              <button className="bg-white px-3 py-[1px] text-start w-[210px] rounded-sm h-[34px] leading-[34px]">
                Giá
              </button>
            </div>
            <div>
              <input
                type="text"
                placeholder="Tìm kiếm"
                name="search"
                className="w-[200px] bg-white h-[34px] px-2 py-1 border rounded-sm outline-none text-xs text-[#000000aa]"
              />
            </div>
          </div>
          <div className="mt-5">
            <div className="grid grid-cols-5 gap-2">
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </div>
            {/* pagination */}
            <div className="flex items-center justify-center gap-3 text-black/40 text-lg mt-8">
              <button className="h-[40px] w-[40px] flex items-center justify-center bg-white rounded-full">
                <ArrowIcon className="rotate-180 text-black/40 w-6" />
              </button>
              <button className="bg-primary text-white w-[40px] h-[40px] flex items-center justify-center rounded-full">
                1
              </button>
              <button className="bg-white w-[40px] h-[40px] flex items-center justify-center rounded-full">
                2
              </button>
              <button className="h-[40px] w-[40px] flex items-center justify-center bg-white rounded-full">
                <ArrowIcon className="text-black/40 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
