import { Service1Img, service2Img, service3Img } from "../assets";

export const API_V1 = import.meta.env.VITE_API_V1 || "";
export const services = [
  {
    img: Service1Img,
    title: "FREE AND FAST DELIVERY",
    desc: "Free delivery for all orders over $140",
  },
  {
    img: service2Img,
    title: "24/7 CUSTOMER SERVICE",
    desc: "Friendly 24/7 customer support",
  },
  {
    img: service3Img,
    title: "MONEY BACK GUARANTEE",
    desc: "We return money within 30 days",
  },
];
