import { CommentImg, Doctor, DoctorTeamImg, FeatureImg } from "../assets";
// import ArrowIcon from "../components/icons/ArrowIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import { REVIEWS } from "../lib/constants";

export default function AboutPage() {
  return (
    <main className="mx-auto w-full flex flex-col items-center justify-center mt-[75px] md:px-8 bg-gradient-to-b from-[#daf1ff] to-[#fde9e800]">
      <section className="bg-transparent overflow-hidden">
        {/* bg-gradient-to-b from-[#daf1ff] to-[#fde9e800] */}
        <div className="px-4 flex md:flex-row xs:flex-col items-center">
          <div className="p-3 md:w-2/3 text-[#0A96E7]">
            {/* <h1 className="md:text-left xs:text-center leading-[50px] font-semibold md:text-[40px] sm:text-[32px] xs:text-[28px] mt-[37px] mb-[50px] tracking-wide">
              Bác sĩ/ Nha sĩ Nguyễn Kim Cúc - Nhà sáng lập thương hiệu Hangy
            </h1> */}
            <p className="md:pr-20 md:text-left xs:text-center leading-10 sm:text-2xl xm:text-xl xs:text-lg mt-[37px] md:leading-10">
              Năm 2020, Hangy mang đến sản phẩm máy tăm nước đầu tiên tại thị
              trường Việt Nam. Không chỉ là một sản phẩm, máy tăm nước Hangy còn
              mang trong mình tâm huyết và sự am hiểu của bác sĩ về nhu cầu chăm
              sóc sức khỏe răng miệng của cộng đồng.
            </p>
          </div>
          <div className="md:w-1/2 p-3 flex flex-col justify-center items-center relative">
            <img src={Doctor} alt="" className="h-full mx-auto z-30" />
            <p className="text-center xm:text-2xl xs:text-xl font-semibold text-[#0A96E7] mt-4">Bác sĩ Nha khoa Nguyễn Kim Cúc</p>
          </div>
        </div>
      </section>
      <section className="xm:block xs:hidden sm:pt-10 w-full">
        <div className="px-4 flex flex-col items-center justify-center gap-5 text-[#162355]">
          {/* <h2 className="max-w-[770px] md:text-4xl sm:text-3xl xs:text-2xl font-semibold text-center leading-[1.265]">
            Xây dựng một đội ngũ chuyên viên có trình độ cao trong lĩnh vực nha
            khoa
          </h2>
          <p className="w-4/5 text-center text-base leading-[1.4] text-[#404968]">
            Với tâm huyết của mình, Bác sĩ Cúc đã đào tạo 1 đội ngũ chuyên viên
            có trình độ cao, có đầy đủ kiến thức và kỹ năng chuyên môn trong
            lĩnh vực nha khoa để đáp ứng nhu cầu đa dạng và phục vụ tận tâm cho
            khách hàng. Mục tiêu của Hangy không chỉ là mang đến những sản phẩm
            chăm sóc răng miệng tốt nhất, mà còn là mang đến những giá trị đích
            thực qua đội ngũ chuyên nghiệp và tâm huyết. Sự đồng hành với khách
            hàng là giá trị mà Hangy đang hướng tới.
          </p> */}
          <img src={DoctorTeamImg} alt="" className="mt-20 w-full" />
        </div>
      </section>
      {/* <section className="relative overflow-hidden my-[100px] bg-gradient-to-b to-[#d0ebfb] from-[#dbeef8] w-full about-page">
        <div className="px-4 relative w-full z-20">
          <img
            src="https://rendemy.org/assets/images/learn-baner-aboutus.webp"
            alt=""
            width={820}
            height={649}
            className="mx-auto"
          />
        </div>
      </section> */}
      <section className="w-full pb-12 md:pt-36 xs:pt-20">
        <div className="px-4 flex dl:flex-row xs:flex-col dl:items-center dl:justify-around xl:justify-center xl:gap-40 xs:gap-28">
          <div className="flex flex-col items-center gap-2">
            <h3 className="sm:text-6xl xs:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#c6e1f9] to-[#31a0f5] leading-[1.265]">
              267,300K+
            </h3>
            <p className="text-[#0A96E7] font-medium leading-7 sm:text-lg xs:text-base">
              Lượt bán toàn quốc
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h3 className="sm:text-6xl xs:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#c6e1f9] to-[#31a0f5] leading-[1.265]">
              61,265K+
            </h3>
            <p className="text-[#0A96E7] font-medium leading-7 sm:text-lg xs:text-base">
              Đánh giá 5* từ khách hàng
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h3 className="sm:text-6xl xs:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#c6e1f9] to-[#31a0f5] leading-[1.265]">
              133,689K+
            </h3>
            <p className="text-[#0A96E7] font-medium leading-7 sm:text-lg xs:text-base">
              Khách hàng cần hỗ trợ
            </p>
          </div>
        </div>
      </section>
      <section className="w-full md:pt-[100px] xs:pt-12 pb-0 overflow-hidden">
        <div className="px-4 flex md:flex-row xs:flex-col flex-wrap">
          <div className="px-3 md:w-1/2 xs:flex xs:justify-center">
            <img src={FeatureImg} alt="" width={500} height={750} />
          </div>
          <div className="px-3 md:w-1/2 text-sm flex flex-col justify-center text-[#0A96E7] xs:mt-20">
            <h2 className="md:text-center xs:text-center sm:text-[40px] xs:text-3xl font-semibold">
              Tầm nhìn tương lai
            </h2>
            <p className="sm:text-lg xs:text-base md:text-center xs:text-center leading-6 py-[18px] xs:w-full xm:w-2/3 mx-auto mt-8">
              Tầm nhìn tương lai của thương hiệu Hangy là mở rộng hơn nữa các
              dòng sản phẩm chăm sóc răng miệng, tạo ra một hệ sinh thái chăm
              sóc răng miệng toàn diện từ máy tăm nước, bàn chải điện, nước súc
              miệng đến các sản phẩm hỗ trợ điều trị nha khoa khác…để đảm bảo
              đến từng đối tượng khách hàng được chăm sóc một cách tốt nhất.
              Hangy mong muốn trở thành biểu tượng cho sự yêu thương và quan tâm
              đến sức khoẻ của mỗi gia đình.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full pb-10 overflow-hidden bg-transparent">
        <div className="flex flex-col px-4">
          <div className="flex md:flex-row xs:flex-col-reverse">
            <div className="px-2 md:w-1/2 flex flex-col justify-center ">
              <h2 className="text-center sm:text-[32px] xs:text-2xl font-semibold text-[#0A96E7] mb-10">
                Đánh giá của khách hàng
              </h2>
              <Swiper
                spaceBetween={30}
                loop={true}
                slidesPerView={1}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                modules={[Navigation, Autoplay]}
                style={{ height: "310px" }}
              >
                {REVIEWS.map((review) => (
                  <SwiperSlide className="flex items-start h-fit">
                    <div className="flex flex-col items-start justify-center w-full">
                      <p className="sm:text-xl xs:text-base leading-[38.5px] text-[#0A96E7] font-medium italic w-2/3 mx-auto text-center overflow-hidden">
                        {review}
                      </p>
                      {/* <div className="flex items-center justify-start gap-4 mt-12">
                        <img
                          src={Avatar}
                          alt="thumb-nail"
                          className="rounded-full object-cover w-14 h-14"
                        />
                        <div>
                          <p className="text-xl font-medium text-[#202d40]">
                            Anonymous User
                          </p>
                          <span className="text-lg text-[#566776]">Course</span>
                        </div>
                      </div> */}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="px-2 md:w-1/2 flex items-center justify-center relative xs:mt-10">
              <img
                src={CommentImg}
                alt=""
                width={500}
                height={750}
                className="z-20"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
