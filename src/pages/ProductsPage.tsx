import { useEffect, useState } from "react";
import { useGetCategories, useGetProducts } from "../apis/web";
import ArrowIcon from "../components/icons/ArrowIcon";
import BarIcon from "../components/icons/BarIcon";
import Container from "../components/layout/Container";
import ProductItem from "../components/ProductItem";
import clsx from "clsx";
import useDebounce from "../hooks/useDebounce";
import LoadingPage from "./LoadingPage";
import { ProductItem as ProductItemType } from "../types/app";

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [type, setType] = useState<string>("");
  const searchDebounce = useDebounce<string>(searchTerm.trim());
  const { data: categories, isLoading: cateLoading } = useGetCategories();
  const { data: products, isLoading: productLoading } = useGetProducts(
    type,
    searchDebounce
  );
  const [results, setResults] = useState<ProductItemType[] | undefined>(
    products
  );

  useEffect(() => {
    if (products) setResults(products);
  }, [productLoading, products]);

  if (cateLoading) return <LoadingPage />;

  return (
    <Container className="xs:px-4">
      <div className="w-full flex flex-row items-start my-8 gap-[22px]">
        <aside className="shrink-0 grow-0 w-[180px] dl:flex flex-col sticky bottom-0 top-[95px] xs:hidden">
          <div className="border-b text-black/80 text-base font-bold h-[50px] w-full flex items-center justify-start capitalize mb-2.5">
            <BarIcon />
            Danh mục
          </div>
          <div>
            <ul className="text-sm text-black/80 font-semibold leading-4 overflow-hidden">
              <li
                className={clsx(
                  "px-2 py-2.5 line-clamp-3 cursor-pointer max-h-12 uppercase hover:opacity-70",
                  type === "" && "text-primary"
                )}
                onClick={() => setType("")}
              >
                {type === "" && (
                  <svg
                    viewBox="0 0 4 7"
                    className="inline-block w-[7px] h-[7px] absolute -left-1 mt-1"
                    fill="#1c95c9"
                  >
                    <polygon points="4 3.5 0 0 0 7"></polygon>
                  </svg>
                )}
                Sản phẩm
              </li>
              {categories?.map((category) => (
                <li
                  key={category.id}
                  className={clsx(
                    "px-2 py-2.5 line-clamp-3 cursor-pointer max-h-16 uppercase hover:opacity-70",
                    type === category.id && "text-primary"
                  )}
                  onClick={() => setType(category.id)}
                >
                  {type === category.id && (
                    <svg
                      viewBox="0 0 4 7"
                      className="inline-block w-[7px] h-[7px] absolute -left-1 mt-1"
                      fill="#1c95c9"
                    >
                      <polygon points="4 3.5 0 0 0 7"></polygon>
                    </svg>
                  )}
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
        </aside>
        <div className="w-full">
          <div className="flex items-center justify-between text-sm rounded-sm py-[13px] px-5 bg-[#00000008]">
            <div className="flex items-center text-[#000000cc] font-medium gap-2">
              <span className="bg-transparent text-[#555555] md:inline-block xs:hidden">
                Sắp xếp theo
              </span>
              <span className="bg-primary text-white rounded-sm h-[34px] px-[15px] outline-none capitalize flex items-center justify-center cursor-pointer xs:text-xs sm:text-sm">
                Tất cả
              </span>
              <span className="bg-white h-[34px] px-[15px] rounded-sm leading-[34px] cursor-pointer sm:inline-block xs:hidden">
                Bán chạy
              </span>
              <span className="bg-white h-[34px] px-[15px] rounded-sm leading-[34px] cursor-pointer sm:inline-block xs:hidden">
                Phổ biến
              </span>
              <button className="bg-white px-3 py-[1px] text-start w-[210px] rounded-sm h-[34px] leading-[34px] sm:inline-block xs:hidden">
                Giá
              </button>
            </div>
            <div>
              <input
                type="text"
                placeholder="Tìm kiếm"
                name="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-[200px] bg-white h-[34px] px-2 py-1 border rounded-sm outline-none text-xs text-[#000000aa]"
              />
            </div>
          </div>
          <div className="mt-5">
            <div className="grid md:grid-cols-5 sm:grid-cols-4 xm:grid-cols-3 xs:grid-cols-2 gap-2">
              {results?.map((product) => (
                <ProductItem
                  key={product.id}
                  name={product.name}
                  slug={product.slug}
                  daily_price={product.daily_price}
                  image={product.images[0].url}
                  sold_quantity={product.sold_quantity}
                  className="hover:-translate-y-[1px] overflow-visible"
                />
              ))}
            </div>
            {/* pagination */}
            {!productLoading && (
              <div className="flex items-center justify-center gap-3 text-black/40 text-lg mt-8">
                <button className="h-[40px] w-[40px] flex items-center justify-center bg-white rounded-full">
                  <ArrowIcon className="rotate-180 text-black/40 w-6" />
                </button>
                <button className="bg-primary text-white w-[40px] h-[40px] flex items-center justify-center rounded-full">
                  1
                </button>
                {/* <button className="bg-white w-[40px] h-[40px] flex items-center justify-center rounded-full">
                  2
                </button> */}
                <button className="h-[40px] w-[40px] flex items-center justify-center bg-white rounded-full">
                  <ArrowIcon className="text-black/40 w-6" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {productLoading && (
        <div className="bg-white opacity-50 fixed top-0 left-0 w-screen h-screen z-50">
          <LoadingPage />
        </div>
      )}
    </Container>
  );
}
