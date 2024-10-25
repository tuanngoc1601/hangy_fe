import { Link } from "react-router-dom";
import Container from "../components/layout/Container";
import BreadcrumbIcon from "../components/icons/BreadcrumbIcon";
import PhoneContactIcon from "../components/icons/PhoneContactIcon";
import MailContactIcon from "../components/icons/MailContactIcon";
import { useState } from "react";
import { useCreateContact } from "../apis/web";
import Spinner from "../components/common/Spinner";
import clsx from "clsx";
import toast from "react-hot-toast";
import { TOAST_IDS } from "../lib/constants";

export default function ContactPage() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const { dispatch: useContact, isMutating } = useCreateContact();
  const [textMessage, setTextMessage] = useState<string>("");
  function handleSubmit(e: any) {
    e.preventDefault();
    if (!name || !email || !phone || !textMessage) {
      toast.error("Dữ liệu không hợp lệ!", { id: TOAST_IDS.INVALID_DATA });
      return;
    }
    useContact({ name, email, phone, message: textMessage }).then((resp) => {
      if (!resp?.data) {
        toast.error("Something went wrong!", { id: TOAST_IDS.FETCH_ERROR });
        return;
      }
      setName("");
      setEmail("");
      setPhone("");
      setTextMessage("");
      toast.success("Đã gửi thông tin thành công!", {
        id: TOAST_IDS.SEND_CONTACT,
      });
    });
  }
  return (
    <Container>
      <div className="w-full mt-5 flex items-center justify-start gap-2 text-sm">
        <Link to={"/"} className="text-[#0055aa]">
          Trang chủ
        </Link>
        <BreadcrumbIcon />
        <span>Liên hệ</span>
      </div>
      <div className="flex sm:flex-row xs:flex-col w-full sm:my-12 xs:mb-12 xs:mt-6 gap-10">
        <div className="sm:w-[340px] flex sm:grow-0 sm:shrink flex-col shadow-lg p-6 gap-6 bg-white">
          <div className="text-base text-start flex flex-col gap-4">
            <div className="flex items-center justify-start gap-4">
              <PhoneContactIcon />
              <h3 className="capitalize text-xl font-medium text-start">
                Liên hệ Hangy
              </h3>
            </div>
            <p>Hỗ trợ chăm sóc răng miệng tận tâm từ Nha sĩ.</p>
            <p>Phone: 0971.334.888 - 0843.784.888</p>
          </div>
          <div className="h-px w-full bg-black/50"></div>
          <div className="text-base text-start flex flex-col gap-4">
            <div className="flex items-center justify-start gap-4">
              <MailContactIcon />
              <h3 className="capitalize text-xl font-medium text-start">
                Hỗ trợ
              </h3>
            </div>
            <p>Sẵn sàng giải đáp mọi thắc mắc từ 8h - 22h mỗi ngày.</p>
            <p>
              {" "}
              Bạn có thể nhắn tin trực tiếp trên Website để được hỗ trợ tốt
              nhất.
            </p>
            <p>Emails: hangy.official@gmail.com</p>
          </div>
        </div>
        <div className="w-full shadow-lg p-6 bg-white flex-1 sm:min-w-[400px]">
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-1 flex-col gap-6"
          >
            <div className="flex dl:flex-row xs:flex-col dl:items-center gap-4">
              <input
                type="text"
                name="name"
                placeholder="Họ và tên *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="px-4 py-2 outline-none rounded-sm bg-[#f5f5f5] flex-1 text-base text-black/50"
              />
              <input
                type="text"
                name="email"
                placeholder="Email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 outline-none rounded-sm bg-[#f5f5f5] flex-1 text-base text-black/50"
              />
              <input
                type="text"
                name="phone"
                placeholder="Số điện thoại *"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="px-4 py-2 outline-none rounded-sm bg-[#f5f5f5] flex-1 text-base text-black/50"
              />
            </div>
            <div className="w-full h-full flex-1">
              <textarea
                placeholder="Lời nhắn của bạn *"
                className="bg-[#f5f5f5] p-4 outline-none text-black/50 rounded-sm w-full h-full"
                rows={10}
                value={textMessage}
                onChange={(e) => setTextMessage(e.target.value)}
                style={{ resize: "none" }}
              ></textarea>
            </div>
            <div className="flex items-center justify-end">
              <button
                type="submit"
                className={clsx(
                  "rounded-sm capitalize px-4 py-2 outline-none text-white bg-primary hover:opacity-70 transition w-[145px] h-10 flex items-center justify-center",
                  isMutating && "opacity-70"
                )}
              >
                {isMutating ? <Spinner /> : "Gửi"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}
