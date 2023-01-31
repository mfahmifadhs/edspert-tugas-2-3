import { useEffect, useState } from "react";
import { Col, Container, Image, Row, Button, Toast } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../../store/course/action";
import { addItem } from "../../store/cart/slice";

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { entity } = useSelector((state) => state.course);
  const [show, setShow] = useState(false);

  const fetchProduct = async (productId) => {
    await dispatch(getDetail(productId));
  };
  const tambah = (item) => {
    dispatch(addItem(item));
    setShow(true);
  };

  useEffect(() => {
    fetchProduct(id);
  }, []);
  return (
    <Container style={{ paddingTop: "24px" }}>
      <Row>
        <Col md={{ span: 4, offset: 2 }}>
          <Image
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            src={entity.image}
          />
        </Col>
        <Col md={4}>
          <h3>{entity.title}</h3>
          <p>{entity.description}</p>
          <h5>$ {entity.price}</h5>

          <Button onClick={() => tambah(entity)}> +Keranjang </Button>
        </Col>
      </Row>
      <Toast
        bg={"Success"}
        onClose={() => setShow(false)}
        show={show}
        delay={3000}
        autohide
      >
        <Toast.Body>Sukses ditambahkan</Toast.Body>
      </Toast>
    </Container>
  );
};

export default DetailPage;
