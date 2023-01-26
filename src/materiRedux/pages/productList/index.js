import { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAll } from "../../store/course/action";
// import { httpService } from "../../utils/service";
import styles from "./productList.module.css";

const ProductListPage = () => {
  const { entities } = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchProducts = async () => {
    // const response = await httpService.get("/product");
    await dispatch(getAll());

    console.log("response", entities);
  };
  const goToDetail = (prodId) => {
    navigate(`/detail/${prodId}`);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className={styles.container}>
      {entities.map((item) => {
        return (
          <div key={item.id} style={{ cursor: "pointer" }}>
            <Card
              onClick={() => goToDetail(item.id)}
              style={{ width: "18rem" }}
            >
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <p
                  style={{
                    textAlign: "right",
                  }}
                >
                  $ {item.price}
                </p>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default ProductListPage;
