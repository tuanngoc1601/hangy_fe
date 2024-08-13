import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { LayoutFull } from "./pages/Layout";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import GoogleLogin from "./pages/auth/GoogleLogin";

const router = createBrowserRouter([
  {
    Component: LayoutFull,
    children: [{ path: "/", Component: HomePage, id: "index" }],
  },
  {
    children: [
      { path: "/auth/login", Component: LoginPage, id: "login" },
      { path: "/auth/register", Component: RegisterPage, id: "register" },
      { path: "/auth/google/callback", Component: GoogleLogin, id: "google-login" },
    ],
  },
]);

function App() {
  return (
    <div className="min-h-screen w-full h-full flex flex-col items-center justify-start bg-white overflow-hidden text-[#222222]">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
