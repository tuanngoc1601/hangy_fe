import { jwtDecode } from "jwt-decode";

function validateEmail(email: string) {
  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return pattern.test(email);
}

export function checkValidFormLogin({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const error = { email: "", password: "" };
  if (!email || !password) {
    if (!email) error.email = "Vui lòng điền vào mục này.";
    if (!password) error.password = "Vui lòng điền vào mục này.";
  }
  if (email && !validateEmail(email)) error.email = "Email này không hợp lệ.";
  if (password && password.length < 8)
    error.password = "Mật khẩu tối thiểu 8 ký tự.";

  return error;
}

export function checkValidFormRegister(
  email: string,
  username: string,
  password: string,
  confirmPassword: string
) {
  const error = { email: "", password: "", username: "", confirmPassword: "" };
  if (!email) error.email = "Vui lòng điền vào mục này.";
  if (!password) error.password = "Vui lòng điền vào mục này.";
  if (!username) error.username = "Vui lòng điền vào mục này.";
  if (!confirmPassword) error.confirmPassword = "Vui lòng điền vào mục này.";

  if (email && !validateEmail(email)) error.email = "Email này không hợp lệ.";
  if (password && password.length < 8)
    error.password = "Mật khẩu tối thiểu 8 ký tự.";
  if (username && username.length < 5)
    error.username = "Tên người dùng tối thiểu 5 ký tự.";
  if (confirmPassword && confirmPassword !== password)
    error.confirmPassword = "Mật khẩu xác thực chưa chính xác.";

  return error;
}

export function checkIfTokenExpired(token: string): boolean {
  // check token payload
  const tokenPayload: any = jwtDecode(token);
  // check token expiration date in payload
  const tokenExpiration = tokenPayload.exp;
  const now = new Date().getTime() / 1000; // token exp shaved off milliseconds
  // if (expiration date is greater than current date)
  return now > tokenExpiration;
}

export function getTimeDifference(time?: string | null): string | null {
  if (!time) return null;

  const currentTime = new Date();
  const targetDate = new Date(time);
  const difference = targetDate.getTime() - currentTime.getTime();

  if (difference <= 0) {
    return "";
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  const formattedDays = days < 10 ? `0${days}` : days;
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${formattedDays}:${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
