import { useNavigate } from "react-router-dom";
import Container from "../components/layout/Container";

export default function CompleteOrder() {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="flex items-center justify-center my-20 bg-background">
        <div className="bg-card rounded-lg shadow-lg p-8 text-center max-w-xl">
          <div className="mb-4 flex items-center justify-center">
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="100" cy="100" r="50" fill="#1c95c9" />

              <path
                d="M85 100l10 10l20 -20"
                stroke="white"
                stroke-width="10"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <circle cx="40" cy="20" r="2" fill="#1c95c9" />
              <circle cx="170" cy="30" r="4" fill="#1c95c9" />
              <circle cx="70" cy="160" r="5" fill="#1c95c9" />
              <circle cx="150" cy="140" r="3" fill="#1c95c9" />
              <circle cx="30" cy="120" r="3" fill="#1c95c9" />
              <circle cx="160" cy="100" r="3" fill="#1c95c9" />
              <circle cx="180" cy="70" r="4" fill="#1c95c9" />
              <circle cx="110" cy="30" r="2" fill="#1c95c9" />
              <circle cx="50" cy="180" r="2" fill="#1c95c9" />
              <circle cx="90" cy="40" r="3" fill="#1c95c9" />
              <circle cx="130" cy="10" r="2" fill="#1c95c9" />
              <circle cx="170" cy="150" r="2.5" fill="#1c95c9" />
              <circle cx="20" cy="100" r="2" fill="#1c95c9" />
              <circle cx="130" cy="170" r="1.5" fill="#1c95c9" />
              <circle cx="30" cy="50" r="3" fill="#1c95c9" />
            </svg>
          </div>
          <h1 className="text-2xl font-semibold text-foreground">
            Bạn đã đặt hàng thành công!
          </h1>
          <p className="text-muted-foreground my-6">
            Kiện hàng sẽ được shop chuẩn bị và đóng gói gửi đến khách hàng. Cảm
            ơn quý khách hàng đã tin tưởng và ủng hộ sản phẩm của shop!
          </p>
          <div className="flex justify-center space-x-4 text-sm">
            <button
              className="border bg-white hover:bg-gray-100 px-4 py-2 rounded-sm"
              onClick={() => navigate("/order/detail", { replace: true })}
            >
              Chi tiết đơn hàng
            </button>
            <button
              className="bg-primary text-white hover:bg-primary/80 px-8 py-2 rounded-sm"
              onClick={() => navigate("/products")}
            >
              Tiếp tục
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
