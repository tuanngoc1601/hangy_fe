import { LogoHangy } from "../../assets";
import Facebook from "../icons/footer/Facebook";

export default function Footter() {
  return (
    <footer className="w-full sm:px-8 xs:px-6 bg-[#182130] rounded-t-3xl flex flex-col py-12">
      <div className="flex sm:flex-row xs:flex-col md:items-center md:justify-between pb-6 gap-6 border-b border-[#3a4f74]">
        <div className="text-white">
          <h3 className="text-xl font-semibold mb-2">
            Nhận các thông báo từ chúng tôi
          </h3>
          <p className="text-base text-[#eaecf0]">
            Cập nhật những thông tin và chương trình mới nhất từ Hangy mỗi ngày
          </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-2">
          <input
            type="text"
            placeholder="Nhập vào email của bạn"
            name="email"
            autoComplete="false"
            className="bg-white px-4 py-2 rounded w-[270px] outline-none flex-1"
          />
          <button
            type="button"
            className="h-10 px-4 text-white font-semibold bg-[#1c95c9] rounded"
          >
            Theo dõi
          </button>
        </div>
      </div>
      <div className="py-6 flex md:flex-row xs:flex-col items-start gap-16 border-b border-[#3a4f74]">
        <div className="min-w-[300px] sm:w-[520px] sm:flex-1 xl:flex-none flex-1">
          <img src={LogoHangy} alt="" className="w-[167px] xs:-translate-x-6 md:translate-x-0" />
          <p className="mt-8 text-[15px] text-[#eaecf0]">
            Thương hiệu được sáng lập bởi Bác sĩ Nguyễn Kim Cúc, chuyên cung cấp
            các giải pháp chăm sóc răng miệng tiên tiến, phù hợp cho mọi lứa
            tuổi, giúp nâng cao chất lượng chăm sóc răng miệng hàng ngày.
          </p>
        </div>
        <div className="flex flex-wrap flex-1 w-full items-start justify-end text-sm font-semibold text-white gap-24">
          <div className="sm:w-[140px] flex-1">
            <p className="text-[#d0d5dd] mb-4">Công ty</p>
            <p className="leading-10">Giới thiệu</p>
            <p className="leading-10">Liên hệ</p>
            <p className="leading-10">Chi nhánh</p>
            <p className="leading-10">Hỏi đáp</p>
          </div>
          <div className="sm:w-[140px] flex-1">
            <p className="text-[#d0d5dd] mb-4">Tài nguyên</p>
            <p className="leading-10">Bài Viết</p>
            <p className="leading-10">Săn Deal</p>
          </div>
          <div className="sm:w-[140px] flex-1">
            <p className="text-[#d0d5dd] mb-4">Mạng xã hội</p>
            <p className="leading-10">Facebook</p>
            <p className="leading-10">Zalo</p>
          </div>
        </div>
      </div>
      <div className="pt-8 flex flex-wrap items-center justify-between">
        <p className="text-base text-[#d0d5dd]">
          © 2024 Hangy đã đăng ký Bản quyền.
        </p>
        <div className="flex items-center gap-6">
          <div>
            <Facebook />
          </div>
        </div>
      </div>
    </footer>
  );
}
