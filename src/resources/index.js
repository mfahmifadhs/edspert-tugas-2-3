import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout"
import VerifCheckout from "./pages/verification";
import CheckoutPage from "./pages/checkout";
import DetailPage from "./pages/detail";
import ProductListPage from "./pages/productList";
import Contact from "./pages/contact";
import store from "./store";

const router = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  children: [
    {
      index: true,
      element: <ProductListPage />
    },
    {
      path: 'detail/:id',
      element: <DetailPage />
    },
    {
      path: 'checkout',
      element: <CheckoutPage />
    },
    {
      path: 'verification',
      element: <VerifCheckout />
    },
    {
      path: 'contact',
      element: <Contact />
    }
  ]
}])

const MateriRestRouter = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
};

export default MateriRestRouter;
