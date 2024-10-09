import { Link, useNavigate } from "react-router-dom";
import BreadcrumbIcon from "../components/icons/BreadcrumbIcon";
import Container from "../components/layout/Container";
import Sidebar from "../components/ProfilePage/Sidebar";
import { useState } from "react";
import { TABS } from "../lib/constants";
import clsx from "clsx";
import { useGetOrders } from "../apis/web";
import LoadingPage from "./LoadingPage";
import toast from "react-hot-toast";

export default function OrdersPage() {
  const { data: orders, isLoading } = useGetOrders();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [tab, setTab] = useState<number>(0);
  const navigate = useNavigate();
  function reOrderCart() {}
  if (isLoading) return <LoadingPage />;
  return (
    <Container>
      <div className="w-full mt-5 flex items-center justify-start gap-2 text-sm">
        <Link to={"/"} className="text-[#0055aa]">
          Trang chủ
        </Link>
        <BreadcrumbIcon />
        <span>Thông tin tài khoản</span>
      </div>
      <div className="w-full flex my-5 gap-4">
        <Sidebar />
        <div className="w-full flex-1 px-4">
          <div className="">
            <div className="mb-4">
              <div className="grid grid-cols-7 bg-white text-sm">
                {TABS.map((tabItem, index) => (
                  <button
                    key={index}
                    className={clsx(
                      "border-b-2 hover:text-primary py-4",
                      tab === index && "border-primary font-medium text-primary"
                    )}
                    onClick={() => setTab(index)}
                  >
                    {tabItem}
                  </button>
                ))}
              </div>
              <input
                type="text"
                placeholder="Tìm kiếm theo ID đơn hàng hoặc Tên Sản phẩm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border bg-[#eaeaea] text-black/50 rounded-sm px-4 py-2 w-full mt-2 text-sm outline-none"
              />
            </div>
            <div className="flex flex-col gap-4">
              {orders &&
                !!orders.length &&
                orders.map((order) => (
                  <div className="flex flex-col w-full" key={order.id}>
                    <div className="bg-white px-6 pt-6 pb-3 rounded-sm shadow-md w-full border-b border-dashed">
                      <div className="flex items-center justify-end pb-3">
                        <span className="font-semibold text-[#26aa99] uppercase text-xs">
                          {order.status}
                        </span>
                      </div>
                      <div className="h-px w-full bg-[#e8e8e8]"></div>
                      {order?.order_items?.map((item) => (
                        <div
                          className="flex items-center justify-between py-4"
                          key={item.id}
                        >
                          <div className="flex items-center">
                            <img
                              src={item.product_image}
                              alt=""
                              className="mr-4 w-[90px] h-[90px] flex-none object-contain"
                            />
                            <div className="flex flex-col items-start gap-0.5">
                              <h2
                                className="font-medium text-base text-[#000000de] line-clamp-1 cursor-pointer"
                                onClick={() =>
                                  navigate(`/products/${item.slug}`)
                                }
                              >
                                {item.product_name}
                              </h2>
                              {item.sub_product_name && (
                                <p className="text-sm text-[#0000008a] line-clamp-1">
                                  Phân loại hàng: {item.sub_product_name}
                                </p>
                              )}
                              <p className="text-[#000000de] text-sm">
                                Số lượng: {item.quantity}
                              </p>
                              <span className="text-primary border border-primary rounded-sm block text-[10px] leading-3 py-0.5 px-1 w-fit">
                                Đổi trả miễn phí 7 ngày
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center justify-end text-sm font-medium">
                            <span className="line-through text-[#bdbdbd] mr-1">
                              ₫
                              {new Intl.NumberFormat("vi-VN", {
                                currency: "VND",
                              }).format(item.price)}
                            </span>
                            <span className="text-primary">
                              ₫
                              {new Intl.NumberFormat("vi-VN", {
                                currency: "VND",
                              }).format(item.price)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col bg-[#fffefb]">
                      <div className="text-lg flex items-center justify-end gap-2 font-medium pt-6 pb-3 px-6">
                        <span className="text-sm">Thành tiền:</span>
                        <span className="text-2xl text-primary">
                          ₫
                          {new Intl.NumberFormat("vi-VN", {
                            currency: "VND",
                          }).format(order.total_amount)}
                        </span>
                      </div>
                      <div className="text-sm flex items-center justify-end pt-3 px-6 pb-6">
                        <button
                          className="bg-primary text-white rounded-sm h-10 w-[150px] hover:opacity-70 transition"
                          onClick={() => reOrderCart()}
                        >
                          Mua Lại
                        </button>
                        <button
                          className="bg-white h-10 w-[150px] rounded-sm text-[#555555] ml-2 border outline-none hover:bg-[#faf9f6] transition"
                          onClick={() => toast.error("Comming soon!")}
                        >
                          Liên Hệ Người Bán
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
