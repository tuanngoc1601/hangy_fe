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
export const REVIEWS = [
  "Vừa nhận được hàng là nhận xét ngay, bàn chải của bé được đóng gói cẩn thận, hộp có seal đầy đủ, bàn chải rất đẹp luôn, lông bàn chải mềm, chế độ cho bé rất êm, đầy đủ phụ kiện, mình dùng 2 máy tăm nước bên Hangy rồi, 2 năm vẫn chưa có vấn đề gì và vẫn rất tốt, và chế độ chăm sóc cũng rất là tốt luôn nên tiếp tục mua bàn chải cho con mình. Mới nhận không dám cắm bàn chải vào, nt shop là shop rep liền, 10 điểm cho dịch vụ và chất lượng. Mình sẽ mua lại nè",
  "Bàn chải điện hangy đánh thấy sạch hơn mình đánh bằng tay, đặc biệt mình có 1 cái răng hàm bị sâu nên phải làm giả, đánh bằng tay kỹ nhưng kiểu vẫn cảm thấy có mùi hôi nhưng từ khi dùng bàn chải điện thấy đánh sạch và mùi hôi hạn chế được 70% luôn, mình xài cũng được 3 tuần rồi mới đánh giá",
  "Máy tăm nc HM23 ok lắm. Nhỏ gọn dễ mang đi. Xịt ra bao nhiêu thức ăn mà mình ko ngờ luôn, thông thoáng cả miệng :)) Dùng máy tăm nước đỡ viêm nướu sâu răng với đỡ hôi miệng hẳn, chân ái. Không nghĩ nó chất lượng như vậy",
  "Hangy giao hàng rất nhanh, chăm sóc khách hàng siêu tận taamm. Bảo hành uy tín lém. Đã mua ở shop nhiều lần nên yên tâm về chất lượng",
  "Mình vừa nhận được sản phẩm và rất hài lòng với chất lượng. Máy tăm nước y như mô tả, chất lượng rất tốt và đáng tiền, xịt xong sạch bách hết tất cả kẽ răng, siêu đã. Shop phục vụ nhiệt tình, hỗ trợ tận tâm. Mình sẽ tiếp tục ủng hộ shop trong tương lai và giới thiệu cho bạn bè, người thân. Mọi người nên mua nhé, thay thế tăm tre đi thôi, dùng tăm tre to chân răng lắm",
  "Combo máy tăm nước và bàn chải diện dùng siêu thích, ai hay bị viêm các thể loại hay sâu răng, hôi miệng, niềng răng, đánh răng hay bị chảy máu thì dùng combo này bao phê, ko thiếu đc bé nào, thiếu 1 ngày là bứt rứt khó chệu liền",
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
