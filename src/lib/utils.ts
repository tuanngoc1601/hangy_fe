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
