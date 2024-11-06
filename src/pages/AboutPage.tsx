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
    <main className="mx-auto w-full flex flex-col items-center justify-center mt-[75px] px-8 bg-gradient-to-b from-[#daf1ff] to-[#fde9e800]">
      <section className="bg-transparent overflow-hidden">
        {/* bg-gradient-to-b from-[#daf1ff] to-[#fde9e800] */}
        <div className="px-4 flex md:flex-row xs:flex-col items-center">
          <div className="p-3 md:w-2/3 text-[#0A96E7]">
            <h1 className="md:text-left xs:text-center leading-[50px] font-semibold md:text-[40px] sm:text-[32px] xs:text-[28px] mt-[37px] mb-[50px] tracking-wide">
              Bác sĩ/ Nha sĩ Nguyễn Kim Cúc - Nhà sáng lập thương hiệu Hangy
            </h1>
            <p className="md:pr-20 md:text-left xs:text-center leading-7 text-lg">
              Năm 2020, bác sĩ Cúc chính thức sáng lập thương hiệu Hangy, cùng
              sự ra đời của sản phẩm máy tăm nước đầu tiên. Không chỉ là một sản
              phẩm, máy tăm nước Hangy còn mang trong mình tâm huyết và sự am
              hiểu của bác sĩ về nhu cầu chăm sóc sức khỏe răng miệng của cộng
              đồng.
            </p>
          </div>
          <div className="md:w-1/2 p-3 flex items-center relative">
            <img src={Doctor} alt="" className="h-full mx-auto z-30" />
          </div>
        </div>
      </section>
      <section className="pt-20 w-full">
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
      <section className="w-full pb-12 pt-36">
        <div className="px-4 flex dl:flex-row xs:flex-col dl:items-center dl:justify-around xl:justify-center xl:gap-40 xs:gap-28">
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#c6e1f9] to-[#31a0f5] leading-[1.265]">
              267,300K+
            </h3>
            <p className="text-[#0A96E7] font-medium leading-7 text-lg">
              Lượt bán toàn quốc
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#c6e1f9] to-[#31a0f5] leading-[1.265]">
              61,265K+
            </h3>
            <p className="text-[#0A96E7] font-medium leading-7 text-lg">
              Đánh giá 5* từ khách hàng
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#c6e1f9] to-[#31a0f5] leading-[1.265]">
              133,689K+
            </h3>
            <p className="text-[#0A96E7] font-medium leading-7 text-lg">
              Khách hàng cần hỗ trợ
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-[100px] overflow-hidden">
        <div className="px-4 flex md:flex-row xs:flex-col flex-wrap ">
          <div className="px-3 md:w-1/2 xs:flex xs:justify-center">
            <img src={FeatureImg} alt="" width={500} height={750} />
          </div>
          <div className="px-3 md:w-1/2 text-sm flex flex-col justify-center text-[#0A96E7] xs:mt-20">
            <h2 className="md:text-start xs:text-center text-[40px] font-semibold">
              Tầm nhìn tương lai
            </h2>
            <p className="text-lg md:text-start xs:text-center leading-6 py-[18px] w-2/3 mt-8">
              Tầm nhìn tương lai của Bác sĩ Cúc và thương hiệu Hangy là mở rộng
              hơn nữa các dòng sản phẩm chăm sóc răng miệng, tạo ra một hệ sinh
              thái chăm sóc răng miệng toàn diện từ máy tăm nước, bàn chải điện,
              nước súc miệng đến các sản phẩm hỗ trợ điều trị nha khoa khác…để
              đảm bảo đến từng đối tượng khách hàng được chăm sóc một cách tốt
              nhất. Bác sĩ Cúc mong muốn Hangy trở thành biểu tượng cho sự yêu
              thương và quan tâm đến sức khoẻ của mỗi gia đình.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full pb-[100px] overflow-hidden bg-transparent">
        <div className="flex flex-col px-4">
          <div className="flex md:flex-row xs:flex-col-reverse">
            <div className="px-2 md:w-1/2 flex flex-col justify-center ">
              <h2 className="text-center text-[32px] font-semibold text-[#0A96E7] mb-10">
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
                style={{ height: "280px" }}
              >
                {REVIEWS.map((review) => (
                  <SwiperSlide className="flex items-start h-fit">
                    <div className="flex flex-col items-start justify-center w-full">
                      <p className="text-xl leading-[38.5px] text-[#0A96E7] font-medium italic overflow-hidden">
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
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 464 488"
                name="rendemy-light-textless"
                width="463"
                className="absolute xs:right-1/2 md:right-0 h-full xs:translate-x-1/2 md:translate-x-0"
              >
                <path
                  fill="url(#rendemy-light-textless_svg__a)"
                  stroke="#F9F9FB"
                  strokeWidth="9"
                  d="M459.478 407.209v.006c-.805 23.541-.483 47.056-.003 70.474-.003 3.608-.442 4.528-.699 4.822-.116.134-.981 1-5.471.989h-.004c-147.194-.25-294.396-.25-441.608 0-3.923 0-5.095-.593-5.426-.875-.102-.087-.747-.642-.752-3.84.427-24.206.641-48.445-.002-72.777v-.014c-.125-4.216.71-5.042.994-5.27.654-.524 2.39-1.131 7.33-1.107h.006c53.77.191 107.645.164 161.536.136 19.024-.009 38.051-.019 57.076-.019 17.628 0 35.258.013 52.89.025 54.863.039 109.74.078 164.598-.259 5.618.001 7.609.755 8.378 1.422.492.426 1.324 1.599 1.157 6.287Z"
                ></path>
                <path
                  fill="url(#rendemy-light-textless_svg__b)"
                  stroke="#F9F9FB"
                  strokeWidth="9"
                  d="M5.916 294.713c.022-8.703.076-17.329.13-25.896.17-26.906.336-53.226-.516-79.514v-.005c-.25-7.482.777-12.951 3.04-17.487 2.266-4.545 5.981-8.573 11.827-12.823C88.508 109.524 155.973 59.161 223.311 8.613c4.076-3.051 6.726-4.08 8.901-4.112 2.109-.031 4.73.869 8.758 4.043 21.957 17.38 44.626 33.735 67.193 50.017l3.788 2.733c1.672 1.212 2.796 2.089 3.531 2.82.14.139.25.257.335.355-.478.63-1.471 1.603-3.369 3.008A103090.594 103090.594 0 0 0 7.066 293.935c-.352.262-.726.514-1.15.778Z"
                ></path>
                <path
                  fill="url(#rendemy-light-textless_svg__c)"
                  stroke="#F9F9FB"
                  strokeWidth="9"
                  d="m356.539 219.256-.002-.001a6601.99 6601.99 0 0 1-23.443-17.459c-14.69-10.975-29.417-21.977-44.275-32.717-1.648-1.197-2.791-2.093-3.556-2.854a6.8 6.8 0 0 1-.513-.565c.417-.581 1.353-1.53 3.257-2.903 25.38-18.228 50.455-37.014 75.371-55.894l.012-.009.012-.009c2.457-1.887 3.849-2.399 4.824-2.451.857-.046 2.245.224 4.769 2.147 17.318 13.263 34.871 26.251 52.385 39.21 9.073 6.714 18.136 13.42 27.15 20.152l.013.009.013.01a77.2 77.2 0 0 0 2.157 1.522c1.207.83 2.078 1.429 2.92 2.31.894.935 1.524 2.019 1.517 4.072-.205 29.518-.162 59.06-.118 89.772.015 10.349.03 20.831.036 31.49l-29.785-22.018c-24.847-18.367-48.807-36.077-72.744-53.814Z"
                ></path>
                <defs>
                  <linearGradient
                    id="rendemy-light-textless_svg__a"
                    x1="63.009"
                    x2="330.027"
                    y1="488"
                    y2="226.959"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#ED372D"></stop>
                    <stop offset="1" stopColor="#FC7D36"></stop>
                  </linearGradient>
                  <linearGradient
                    id="rendemy-light-textless_svg__b"
                    x1="43.787"
                    x2="389.311"
                    y1="302.461"
                    y2="230.783"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#ED372D"></stop>
                    <stop offset="1" stopColor="#FC7D36"></stop>
                  </linearGradient>
                  <linearGradient
                    id="rendemy-light-textless_svg__c"
                    x1="304.682"
                    x2="505.448"
                    y1="304.015"
                    y2="268.564"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#ED372D"></stop>
                    <stop offset="1" stopColor="#FC7D36"></stop>
                  </linearGradient>
                </defs>
              </svg> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
