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
