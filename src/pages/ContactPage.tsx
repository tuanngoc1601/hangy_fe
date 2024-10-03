import { Link } from "react-router-dom";
import Container from "../components/layout/Container";
import BreadcrumbIcon from "../components/icons/BreadcrumbIcon";
import PhoneContactIcon from "../components/icons/PhoneContactIcon";
import MailContactIcon from "../components/icons/MailContactIcon";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [textMessage, setTextMessage] = useState<string>("");
  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(name, email, phone, textMessage);
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
      <div className="flex w-full my-12 gap-10">
        <div className="w-[340px] flex flex-none flex-col shadow-lg p-6 gap-6 bg-white">
          <div className="text-base text-start flex flex-col gap-4">
            <div className="flex items-center justify-start gap-4">
              <PhoneContactIcon />
              <h3 className="capitalize text-xl font-medium text-start">
                Call to us
              </h3>
            </div>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </div>
          <div className="h-px w-full bg-black/50"></div>
          <div className="text-base text-start flex flex-col gap-4">
            <div className="flex items-center justify-start gap-4">
              <MailContactIcon />
              <h3 className="capitalize text-xl font-medium text-start">
                Write to us
              </h3>
            </div>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
        </div>
        <div className="w-full shadow-lg p-6 bg-white">
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="px-4 py-2 outline-none rounded-sm bg-[#f5f5f5] flex-1 text-base text-black/50"
              />
              <input
                type="text"
                name="email"
                placeholder="Your Email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 outline-none rounded-sm bg-[#f5f5f5] flex-1 text-base text-black/50"
              />
              <input
                type="text"
                name="email"
                placeholder="Your Phone *"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="px-4 py-2 outline-none rounded-sm bg-[#f5f5f5] flex-1 text-base text-black/50"
              />
            </div>
            <div className="w-full h-full flex-1">
              <textarea
                placeholder="Your Message"
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
                className="rounded-sm capitalize px-4 py-2 outline-none text-white bg-primary hover:opacity-70 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}
