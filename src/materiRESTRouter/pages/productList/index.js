import { useEffect } from "react";
import { httpService } from "../../utils/service";

const ProductListPage = () => {
  const fetchProducts = async () => {
    const response = await httpService.get("/product");

    console.log("response", response);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return <div>product list</div>;
};

export default ProductListPage;
