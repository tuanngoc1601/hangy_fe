import { Service1Img, service2Img, service3Img } from "../assets";

export const API_V1 = import.meta.env.VITE_API_V1 || "";
export const services = [
  {
    img: Service1Img,
    title: "GIAO HÀNG MIỄN PHÍ VÀ NHANH CHÓNG",
    desc: "Miễn phí ship cho tất cả các đơn hàng",
  },
  {
    img: service2Img,
    title: "DỊCH VỤ CSKH GIỜ HÀNH CHÍNH",
    desc: "Hỗ trợ khách hàng chuyên nghiệp",
  },
  {
    img: service3Img,
    title: "SẢN PHẨM CHÍNH HÃNG",
    desc: "Bảo hành uy tín",
  },
];
export const TOAST_IDS = {
  FETCH_ERROR: "fetch-error",
  CHOOSE_VARIANT: "choose-variant",
  CHOOSE_PRODUCT: "choose-product",
  ADD_TO_CART: "add-to-cart",
  ORDER: "order",
  UPDATE_CART: "update-cart",
  UPDATE_PROFILE: "update-profile",
  SEND_CONTACT: "send-contact",
  LOGIN_SUCCESS: "login-success",
  REGISTER_SUCCESS: "register-success",
  DELETE_CART_SUCCESS: "delete-cart-success",
  DELETE_ALL_CART: "delete-all-carts",
  INVALID_DATA: "invalid-data",
};
export const TABS = [
  "Tất cả",
  "Chờ thanh toán",
  "Vận chuyển",
  "Chờ giao hàng",
  "Hoàn thành",
  "Đã huỷ",
  "Trả hàng/Hoàn tiền",
];
