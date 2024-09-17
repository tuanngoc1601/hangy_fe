// import Container from "../components/layout/Container";

import ArrowIcon from "../components/icons/ArrowIcon";
import CheckIcon from "../components/icons/CheckIcon";

export default function AboutPage() {
  return (
    <main className="mx-auto w-full flex flex-col items-center justify-center mt-[75px] max-w-[1300px]">
      <section className="py-20 bg-gradient-to-b from-[#fdebea] to-[#fde9e800] overflow-hidden">
        <div className="px-4 flex flex-row items-center">
          <div className="p-3 w-1/2">
            <h1 className="text-left leading-[50px] font-semibold text-[40px] text-[#30374f] mt-[37px] mb-[50px] tracking-wide">
              Rendemy: Nền tảng Web3 về giáo dục hàng đầu tại RENEC Blockchain
            </h1>
            <p className="pr-[150px] leading-7 text-lg">
              Nơi bạn vừa có thể làm giàu tri thức và tự mình sở hữu Crypto sau
              khi hoàn thành các khóa học.
            </p>
          </div>
          <div className="w-1/2 p-3 flex items-center relative">
            <img
              src="https://rendemy.org/_next/image?url=%2Fassets%2Fimages%2Favatar-aboutus.webp&w=2048&q=100"
              alt=""
              className="h-full mx-auto z-30"
            />
            <img
              src="https://rendemy.org/assets/images/smile.webp"
              alt=""
              className="absolute left-9 -top-3"
            />
            <img
              src="https://rendemy.org/assets/images/star.webp"
              alt=""
              className="absolute left-14 top-32 z-20"
            />
            <img
              src="https://rendemy.org/assets/images/coin-left-aboutus.webp"
              alt=""
              className="absolute -left-12 bottom-24 z-40"
            />
            <img
              src="https://rendemy.org/assets/images/coin-right-aboutus.webp"
              alt=""
              className="absolute top-4 right-4 w-24 z-40"
            />
            <img
              src="https://rendemy.org/assets/images/schedule.webp"
              alt=""
              className="absolute right-5 -bottom-16 z-20"
            />
            <img
              src="https://rendemy.org/assets/images/chart-about-us.webp"
              alt=""
              className="absolute -left-12 -bottom-10 z-30"
            />
            <img
              src="https://rendemy.org/assets/images/person-about-us.webp"
              alt=""
              className="absolute top-7 -right-1 z-20"
            />
            <img
              src="https://rendemy.org/assets/images/home-content-aboutus.svg"
              alt=""
              className="absolute h-full inset-0 z-10 mx-auto"
            />
          </div>
        </div>
      </section>
      <section className="pt-20 w-full">
        <div className="px-4 flex flex-col items-center gap-5">
          <h2 className="max-w-[770px] text-4xl text-[#30374f] font-semibold text-center leading-[1.265]">
            Xây dựng một cộng đồng Crypto giàu toàn diện trên hệ sinh thái RENEC
            Blockchain
          </h2>
          <p className="w-1/2 text-center text-lg leading-[1.4] text-[#404968]">
            Thay đổi nhận thức về cuộc sống, từ đó xây dựng một cộng đồng RENEC
            lành mạnh, tử tế, giàu phẩm chất và nhân cách. Hướng đến giàu toàn
            diện về nội tâm, sức khoẻ, mối quan hệ và tài chính.
          </p>
        </div>
      </section>
      <section className="relative overflow-hidden my-[100px] bg-gradient-to-b from-[#fc7d36] to-[#ed372d] w-full about-page">
        <div className="px-4 relative w-full z-20">
          <img
            src="https://rendemy.org/assets/images/learn-baner-aboutus.webp"
            alt=""
            width={820}
            height={649}
            className="mx-auto"
          />
        </div>
      </section>
      <section className="w-full pb-[100px]">
        <div className="px-4 flex items-center justify-around">
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#ed372d]/90 to-[#fc7d36] leading-[1.265]">
              80,000+
            </h3>
            <p className="text-[#101828] font-medium leading-7 text-lg">
              Học viên đã tham gia
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#ed372d]/90 to-[#fc7d36] leading-[1.265]">
              1,000,000+
            </h3>
            <p className="text-[#101828] font-medium leading-7 text-lg">
              Giờ học đã diễn ra
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#ed372d]/90 to-[#fc7d36] leading-[1.265]">
              60,000+
            </h3>
            <p className="text-[#101828] font-medium leading-7 text-lg">
              RENEC đã được phát
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-[100px] overflow-hidden">
        <div className="px-4 flex flex-row flex-wrap ">
          <div className="px-3 w-1/2">
            <img
              src="https://rendemy.org/assets/images/our-values.webp"
              alt=""
              width={566}
              height={566}
            />
          </div>
          <div className="px-3 w-1/2 text-sm flex flex-col justify-center">
            <h2 className="text-start text-[32px] font-semibold text-[#30374F]">
              Giá trị cốt lõi
            </h2>
            <p className="text-base leading-6 py-[18px]">
              Tri thức hướng đến những giá trị của 7 sự giàu toàn diện và trưởng
              thành tận cùng. Các khóa học xoay quanh 4 chủ đề chính:
            </p>
            <div>
              <div className="flex items-center gap-4 mb-5">
                <CheckIcon />
                <span>Nội tâm</span>
              </div>
              <div className="flex items-center gap-4 mb-5">
                <CheckIcon />
                <span>Sức khỏe</span>
              </div>
              <div className="flex items-center gap-4 mb-5">
                <CheckIcon />
                <span>Mối quan hệ</span>
              </div>
              <div className="flex items-center gap-4 mb-5">
                <CheckIcon />
                <span>Tài chính</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-[100px] overflow-hidden bg-white">
        <div className="flex flex-col px-4">
          <h2 className="text-center text-[32px] font-semibold text-[#30374F]">
            Câu chuyện của học viên
          </h2>
          <div className="mt-[100px] flex flex-row flex-wrap">
            <div className="px-2 w-1/2 flex items-center">
              <div className="flex flex-col items-start justify-center w-full relative">
                <p className="line-clamp-[7] text-2xl leading-[38.5px] text-[#1d2939] font-medium italic overflow-hidden">
                  Câu 1: Khóa học “Thấu hiểu nội tâm - kiến tạo an vui" đã hệ
                  thống và mang lại nhiều thông tin hữu ích đối với bản thân em.
                  Trong đó, vấn đề em tâm đắc nhất và dành nhiều thời gian suy
                  ngẫm nhất là Công thức cội nguồn cuộc sống. Có thể tóm lược
                  lại công thức cội nguồn cuộc sống như sau: những điều chúng ta
                  nghe, thấy, nói và biết sẽ tạo nên hình ảnh trong tâm trí, từ
                  đó tạo nên niềm tin trong chúng ta; niềm tin sẽ dẫn lối suy
                  nghĩ, suy nghĩ sẽ tạo nên hành động, hành động sẽ tạo thành
                  thói quen, thói quen sẽ xây dựng nên tính cách và tính cách
                  kết hợp với những sự lựa chọn của bản thân sẽ mang lại những
                  kết quả trong cuộc sống. Hay nói cách khác, những kết quả
                  trong cuộc sống mà chúng ta có được và trải qua bắt nguồn từ
                  chính những điều chúng ta nghe, thấy, nói và biết. Khi ngộ
                  được điều này và hiểu tại sao những kết quả cả thành công lẫn
                  thất bại mà em đã từng trải qua đều xuất phát từ chính bản
                  thân mình. Công thức cội nguồn cuộc sống đã lý giải và trả lời
                  cho em những câu hỏi mà bản thân chưa có đáp án bấy lâu nay là
                  tại sao mình lại đưa ra lựa chọn như vậy tại thời điểm đó và
                  tại sao mình đạt được kết quả như vậy. Có thể kể ra nhiều kết
                  quả trong cuộc sống của em đến từ công thức cội nguồn cuộc
                  sống. Trước đây, bản thân em chỉ chạy được 500 mét là cơ thể
                  cảm thấy mệt và không thể chịu nổi. Mỗi lần như thế là em luôn
                  dừng lại nghỉ ngơi và thắc mắc tại sao mình chạy mãi chạy mãi
                  mà không thể khỏe hơn được. Tuy nhiên sau khi vào đại học và
                  trong môn giáo dục thể chất, em được thầy dạy lý thuyết cách
                  chạy bền: nếu cảm thấy mệt lần đầu thì cứ cố gắng chạy thêm 5
                  đến 10 mét thì sau đó cơ thể sẽ dần dần quen với cảm giác mệt
                  và chúng ta sẽ chạy thêm được một quãng dài nữa. Sau khi biết
                  được lý thuyết này em đã thực hiện theo và quả nhiên là đúng
                  như vậy, em hoàn toàn có thể chạy hơn 1km. Nhờ việc biết và
                  tin vào lý thuyết trên mà em đã biết cách cải thiện và nâng
                  tầm kết quả chạy của bản thân. Công thức cội nguồn cuộc sống
                  cũng đúng trong những ngày mới đầu em tham gia làm các bài tập
                  lớn trong trường đại học. Khi đang trong quá trình tìm hiểu để
                  học 1 công nghệ mới thì những người bạn luôn bảo là cái đó khó
                  lắm, học mãi không hiểu. Điều này mới đầu hay khiến em tin
                  rằng là bản thân mình cũng sẽ bỏ cuộc vì sự khó khăn của công
                  nghệ đó. Nhưng đến khi thấy 1 em nhỏ tuổi hơn và còn rất giỏi
                  trong lĩnh vực đó chia sẻ các kiến thức liên quan, đồng thời
                  thầy giáo cũng giảng giải, mổ xẻ vấn đề thì thực sự công nghệ
                  đó không thực sự khó đến mức như những lời những người bạn
                  nói. Nhờ việc biết, nghe và thấy những điều của những người đi
                  trước mà em đã tin vào bản thân hoàn toàn có thể làm được và
                  đã thành công trong việc tiếp thu công nghệ. Công thức cội
                  nguồn cuộc sống hoàn toàn có thể áp dụng trong việc phát triển
                  của Remitano. Để tạo ra những kết quả tốt, thì theo công thức
                  chúng ta cần có những sự nghe, thấy, nói và biết đúng đắn.
                  Chúng ta có thể tạo ra những buổi chia sẻ về công nghệ, về
                  thành tựu ấn tượng mà các nhân viên đã xây dựng, về sự phát
                  triển của hệ thống - công ty, về những bài học rút ra và việc
                  áp dụng chúng cho tương lai. Từ những thông tin đó, mọi thành
                  viên trong công ty sẽ có những cái nghe, thấy, nói và biết rõ
                  ràng; từ đó tạo ra niềm tin tích cực vào định hướng phát triển
                  của công ty, và mang đến thành công cho công ty thông qua
                  những cống hiến trong công việc. Câu 2: Mục tiêu giàu toàn
                  diện trong 3 năm tới của em gồm 7 khía cạnh từ 7 sự giàu có
                  toàn diện: 1, Về thể chất: mỗi ngày dành thời gian tập thể dục
                  ít nhất 15 phút, mỗi tuần dành 1 tiếng 30 phút cho việc vận
                  động mạnh và duy trì thói quen ăn uống điều độ, lành mạnh, hạn
                  chế thực phẩm chế biến sẵn nhiều chất béo để có 1 cơ thể ít mỡ
                  thừa, linh hoạt trong các vận động thể chất. 2, Về vật chất:
                  nâng cao nguồn thu nhập, đồng thời mở rộng sang các nguồn thu
                  nhập thụ động và thực hiện tiết kiệm, tích lũy với lối sống
                  tối giản. Để từ đó sự giàu vật chất đạt cấp độ đảm bảo tài
                  chính và là tiền đề vươn tới cấp độ độc lập tài chính. 3, Về
                  nhân cách: tập luyện để bản thân có đủ 9 biểu hiện tốt của
                  nhân cách: vui vẻ, hy vọng, niềm tin, trí tuệ, trân trọng biết
                  ơn, yêu thương, bao dung, khiêm tốn, chân thật. Nhìn nhận
                  những điều bản thân đã đạt được, những bài học hay rút ra được
                  thay vì quá chú trọng vào những việc làm không tốt để cảm thấy
                  vui vẻ, thoải mái. Nhìn vào những điểm tích cực để mang đến hy
                  vọng, niềm tin cho bản thân cũng như những người xung quanh.
                  Cố gắng học tập và trau dồi kiến thức để có thêm trí tuệ và
                  tạo sự khiêm tốn. Thể hiện sự yêu thương, bao dung với những
                  người bên cạnh và thể hiện sự biết ơn với những người đã giúp
                  đỡ trong cuộc sống một cách chân thật. 4, Về tâm thái: hạn chế
                  những suy nghĩ và mơ tưởng không có thực để giảm tánh Tham và
                  Tưởng về các khía cạnh Tài - Sắc - Danh - Thùy - Thực, tập
                  trung vào sự chân thật của các sự kiện, trải nghiệm của bản
                  thân tại thời điểm hiện tại. Để từ đó bản thân giảm bớt các
                  vấn nạn mà do suy nghĩ của chính mình đem lại và tăng sự an
                  vui trong cuộc sống. 5, Về trí tuệ: Nâng tầm bản thân để đạt
                  được trí tuệ tầng bậc 3. Giảm bớt suy tưởng để sống với thực
                  tại, từ đó làm chủ được những gì mình nói và biết; có được sự
                  an vui trong cuộc sống. 6, Về năng lực: Tập trung đi sâu vào
                  chuyên môn để trở thành chuyên gia. Nâng cao khả năng, trình
                  độ, cố gắng học hỏi, tiến bộ mỗi ngày; đồng thời chia sẻ kiến
                  thức, giúp đỡ được những đồng nghiệp xung quanh. Từ đó xây
                  dựng và tạo lập các mối quan hệ phát triển trong công việc nói
                  riêng và cuộc sống nói chung. 7, Về phẩm chất: thực hiện các
                  hành động cũng như lựa chọn cái nghe, nhìn, nói và hiểu để cải
                  thiện 5 yếu tố Nhân, Lễ, Nghĩa, Trí, Tín ở cả 4 động lực bản
                  thân, gia đình, tổ chức và xã hội. Trong thời gian tới, với
                  bản thân, trước hết chú trọng trong việc ăn uống, nghỉ ngơi,
                  an toàn; thực hiện những cảm kết mà chính bản thân đã đề ra;
                  với gia đình, tập trung tạo sự yêu thương, gắn kết thông qua
                  cách lắng nghe, giúp đỡ mọi người; với tổ chức, giúp đỡ, chia
                  sẻ thông tin trong công việc, gửi những lời cảm ơn đến đồng
                  nghiệp đã giúp đỡ mình, thực hiện những cam kết đã đề ra trong
                  công việc; còn với xã hội, giúp đỡ những người xung quanh nhằm
                  lan tỏa tình thương, giữ chữ tín với mọi người như gặp mặt
                  đúng giờ, thực hiện những việc làm đã nói.
                </p>
                <div className="flex items-center justify-start gap-4 mt-12">
                  <img
                    src="https://rendemy.org/_next/image?url=%2Fassets%2Fimages%2Fdefault-thumbnail.webp&w=128&q=100"
                    alt="thumb-nail"
                    width={56}
                    height={56}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-xl font-medium text-[#202d40]">
                      Anonymous User
                    </p>
                    <span className="text-lg text-[#566776]">Course</span>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-4 absolute right-0 bottom-0">
                  <button
                    type="button"
                    className="w-14 h-14 rounded-full flex items-center justify-center bg-[#f5f5f5]"
                    // onClick={() => swiperFlashSale.current?.slidePrev()}
                  >
                    <ArrowIcon className="rotate-180" />
                  </button>
                  <button
                    type="button"
                    className="w-14 h-14 rounded-full flex items-center justify-center bg-[#f5f5f5]"
                    // onClick={() => swiperFlashSale.current?.slideNext()}
                  >
                    <ArrowIcon />
                  </button>
                </div>
              </div>
            </div>
            <div className="px-2 w-1/2 flex items-center justify-end relative">
              <img
                src="https://rendemy.org/_next/image?url=%2Fassets%2Fimages%2Fabout-us-listen-section-user.webp&w=2048&q=100"
                alt=""
                width={463}
                height={482}
                className="z-20"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 464 488"
                name="rendemy-light-textless"
                width="463"
                className="absolute right-0 -top-9 h-full"
              >
                <path
                  fill="url(#rendemy-light-textless_svg__a)"
                  stroke="#F9F9FB"
                  stroke-width="9"
                  d="M459.478 407.209v.006c-.805 23.541-.483 47.056-.003 70.474-.003 3.608-.442 4.528-.699 4.822-.116.134-.981 1-5.471.989h-.004c-147.194-.25-294.396-.25-441.608 0-3.923 0-5.095-.593-5.426-.875-.102-.087-.747-.642-.752-3.84.427-24.206.641-48.445-.002-72.777v-.014c-.125-4.216.71-5.042.994-5.27.654-.524 2.39-1.131 7.33-1.107h.006c53.77.191 107.645.164 161.536.136 19.024-.009 38.051-.019 57.076-.019 17.628 0 35.258.013 52.89.025 54.863.039 109.74.078 164.598-.259 5.618.001 7.609.755 8.378 1.422.492.426 1.324 1.599 1.157 6.287Z"
                ></path>
                <path
                  fill="url(#rendemy-light-textless_svg__b)"
                  stroke="#F9F9FB"
                  stroke-width="9"
                  d="M5.916 294.713c.022-8.703.076-17.329.13-25.896.17-26.906.336-53.226-.516-79.514v-.005c-.25-7.482.777-12.951 3.04-17.487 2.266-4.545 5.981-8.573 11.827-12.823C88.508 109.524 155.973 59.161 223.311 8.613c4.076-3.051 6.726-4.08 8.901-4.112 2.109-.031 4.73.869 8.758 4.043 21.957 17.38 44.626 33.735 67.193 50.017l3.788 2.733c1.672 1.212 2.796 2.089 3.531 2.82.14.139.25.257.335.355-.478.63-1.471 1.603-3.369 3.008A103090.594 103090.594 0 0 0 7.066 293.935c-.352.262-.726.514-1.15.778Z"
                ></path>
                <path
                  fill="url(#rendemy-light-textless_svg__c)"
                  stroke="#F9F9FB"
                  stroke-width="9"
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
                    <stop stop-color="#ED372D"></stop>
                    <stop offset="1" stop-color="#FC7D36"></stop>
                  </linearGradient>
                  <linearGradient
                    id="rendemy-light-textless_svg__b"
                    x1="43.787"
                    x2="389.311"
                    y1="302.461"
                    y2="230.783"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#ED372D"></stop>
                    <stop offset="1" stop-color="#FC7D36"></stop>
                  </linearGradient>
                  <linearGradient
                    id="rendemy-light-textless_svg__c"
                    x1="304.682"
                    x2="505.448"
                    y1="304.015"
                    y2="268.564"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#ED372D"></stop>
                    <stop offset="1" stop-color="#FC7D36"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
