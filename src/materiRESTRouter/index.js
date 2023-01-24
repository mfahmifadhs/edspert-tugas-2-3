import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import CheckoutPage from "./pages/checkout";
import DetailPage from "./pages/detail";
import ProductListPage from "./pages/productList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ProductListPage />,
      },
      {
        path: "detail/:id",
        element: <DetailPage />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
    ],
  },
]);
const MateriRestRouter = () => {
  return <RouterProvider router={router} />;
};

export default MateriRestRouter;
