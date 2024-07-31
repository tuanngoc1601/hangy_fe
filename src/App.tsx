import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { LayoutFull } from "./pages/Layout";

const router = createBrowserRouter([
  {
    Component: LayoutFull,
    children: [{ path: "/", Component: HomePage, id: "index" }],
  },
]);

function App() {
  return (
    <div className="min-h-screen w-full h-auto flex flex-col items-center justify-center bg-white overflow-hidden">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
