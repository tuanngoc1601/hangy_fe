import { Avatar } from "../../assets";
import { useMe, useUpdateMe } from "../../apis/auth";
// import LoadingPage from "../LoadingPage";
import { useEffect, useState } from "react";
import Spinner from "../../components/common/Spinner";
import clsx from "clsx";
import toast from "react-hot-toast";
import { TOAST_IDS } from "../../lib/constants";

export default function ProfilePage() {
  const { data: me, mutate } = useMe();
  const { dispatch: updateUser, isMutating } = useUpdateMe();
  const [name, setName] = useState<string>(me?.name || "");
  const [phone, setPhone] = useState<string>(me?.phone || "");
  const [address, setAddress] = useState<string>(me?.address || "");
  const [gender, setGender] = useState<string>(me?.gender || "");
  function updateMe(e: any) {
    e.preventDefault();
    updateUser({ name, phone, address, gender }).then((resp) => {
      if (!resp?.data) {
        toast.error("Something went wrong!", { id: TOAST_IDS.FETCH_ERROR });
        return;
      }
      mutate();
      toast.success("Cập nhật thông tin thành công!", {
        id: TOAST_IDS.UPDATE_PROFILE,
      });
    });
  }

  useEffect(() => {
    if (me) {
      setName(me.name || "");
      setPhone(me.phone || "");
      setAddress(me.address || "");
      setGender(me.gender || "");
    }
  }, [me, setName, setPhone, setAddress, setGender]);

  // if (isLoading) return <LoadingPage />;

  return (
    <div className="w-full flex-1 bg-white mx:px-[30px] xs:px-3 mx:pb-8 xs:pb-2">
      <div className="py-[18px] leading-6 font-medium">
        <h2 className="capitalize text-lg text-[#333]">Hồ sơ của tôi</h2>
        <p className="text-sm mt-1 text-[#555] font-normal">
          Quản lý thông tin hồ sơ để bảo mật tài khoản
        </p>
      </div>
      <div className="h-px w-full bg-black/10"></div>
      <div className="pt-[30px] flex items-start">
        <div className="flex-1 md:pr-[50px] xs:p-0 w-full text-sm">
          <form method="put" onSubmit={updateMe}>
            <div className="flex items-center gap-8">
              <label className="min-w-[20%] text-right">Email</label>
              <input
                type="text"
                name="email"
                value={me?.email}
                disabled
                className="w-full px-4 py-2 bg-gray-100 outline-none rounded-sm border cursor-not-allowed"
              />
            </div>
            <div className="flex items-center gap-8 mt-4">
              <label className="min-w-[20%] text-right">Họ và tên</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 bg-white outline-none rounded-sm border"
              />
            </div>
            <div className="flex items-center gap-8 mt-4">
              <label className="min-w-[20%] text-right">Số điện thoại</label>
              <input
                type="text"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 bg-white outline-none rounded-sm border"
              />
            </div>
            <div className="flex items-center gap-8 mt-4">
              <label className="min-w-[20%] text-right">Địa chỉ</label>
              <input
                type="text"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-2 bg-white outline-none rounded-sm border"
              />
            </div>
            <div className="flex items-center gap-8 mt-4 py-2">
              <label className="min-w-[20%] text-right">Giới tính</label>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value={"male"}
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-1"
                />
                Nam
                <input
                  type="radio"
                  name="gender"
                  value={"female"}
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                  className="ms-4 mr-1"
                />
                Nữ
                <input
                  type="radio"
                  name="gender"
                  value={"other"}
                  checked={gender === "other"}
                  onChange={(e) => setGender(e.target.value)}
                  className="ms-4 mr-1"
                />
                Khác
              </div>
            </div>
            <div className="flex items-center gap-8 mt-4">
              <label className="min-w-[20%] text-right">Ngày sinh</label>
              <input
                type="date"
                name="birthdate"
                value={me?.birth_date || ""}
                className="w-full px-4 py-2 bg-white outline-none rounded-sm border"
              />
            </div>
            <div className="flex items-center justify-center mt-8">
              <button
                type="submit"
                className={clsx(
                  "px-4 py-2 bg-primary text-white outline-none rounded-sm hover:opacity-80 flex items-center justify-center transition",
                  isMutating && "opacity-80"
                )}
              >
                {isMutating ? <Spinner /> : "Lưu"}
              </button>
            </div>
          </form>
        </div>
        <div className="w-[280px] dl:flex flex-col flex-1 items-center border-s border-[#efefef] xs:hidden">
          <img
            src={Avatar}
            alt=""
            className="rounded-full w-[100px] h-[100px] object-cover my-5"
          />
          <div className="flex flex-col items-center">
            <button className="px-4 py-2 text-sm border outline-none h-10 hover:bg-gray-100 rounded-sm">
              Chọn Ảnh
            </button>
            <p className="text-[#999] text-center text-sm mt-2">
              Dung lượng file tối đa 1 MB <br /> Định dạng:.JPEG, .PNG
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
