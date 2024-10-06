import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { LayoutFull } from "./pages/Layout";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import GoogleLogin from "./pages/auth/GoogleLogin";
import FacebookLogin from "./pages/auth/FacebookLogin";
import { ProtectedRoute } from "./pages/auth/ProtectedRoute";
import AboutPage from "./pages/AboutPage";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import PaymentPage from "./pages/PaymentPage";
import ProductsPage from "./pages/ProductsPage";
import ProfilePage from "./pages/ProfilePage";
import ContactPage from "./pages/ContactPage";
import CompleteOrder from "./pages/CompleteOrder";

const router = createBrowserRouter([
  {
    Component: LayoutFull,
    children: [
      { path: "/", Component: HomePage, id: "index" },
      { path: "/hangy-about", Component: AboutPage, id: "about" },
      { path: "/products", Component: ProductsPage, id: "products" },
      {
        path: "/products/:slug",
        Component: ProductDetail,
        id: "product-detail",
      },
      { path: "/cart", Component: CartPage, id: "cart" },
      {
        path: "/checkout",
        Component: PaymentPage,
        id: "payment",
      },
      {
        path: "/order/complete",
        Component: CompleteOrder,
        id: "orderComplete",
      },
      {
        path: "/profile",
        Component: ProfilePage,
        id: "profile",
      },
      { path: "/contact", Component: ContactPage, id: "contact" },
    ],
  },
  {
    Component: ProtectedRoute,
    children: [
      { path: "/auth/login", Component: LoginPage, id: "login" },
      { path: "/auth/register", Component: RegisterPage, id: "register" },
      {
        path: "/auth/google/callback",
        Component: GoogleLogin,
        id: "google-login",
      },
      {
        path: "/auth/facebook/callback",
        Component: FacebookLogin,
        id: "facebook-login",
      },
    ],
  },
]);

function App() {
  return (
    <div className="min-h-screen w-full h-full flex flex-col items-center justify-start bg-white text-[#222222]">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
