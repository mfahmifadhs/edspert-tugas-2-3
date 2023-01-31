import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const { entities } = useSelector((state) => state.cart);
  const countTotal = (data) => {
    const result = data.reduce((prev, curr) => {
      return prev + parseInt(curr.price, 10);
    }, 0);
    return result;
  };
  return (
    <Container style={{ padding: "24px 0" }}>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h1>Ringkasan Pesanan</h1>
          <p>
            Et eiusmod culpa Lorem enim sint voluptate do ipsum irure incididunt
            est minim proident. Aliquip eiusmod cupidatat duis in dolor
            excepteur exercitation deserunt duis do. Culpa ipsum magna officia
            adipisicing consequat et fugiat laborum. Nostrud aliquip incididunt
            id est.
          </p>

          <p>Berikut barang yang ada di keranjang anda</p>
          <Table striped hover>
            <thead>
              <tr>
                <th>Nama</th>
                <th>Harga</th>
              </tr>
            </thead>
            <tbody>
              {entities.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>$ {item.price}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td>Total</td>
                <td>$ {countTotal(entities)}.00</td>
              </tr>
            </tfoot>
          </Table>

          <h5>Metode Bayar:</h5>
          <p>
            Silahkan melakukan transfer ke rekening a.n Abc jjaja nomor rekening
            1234 2323 2323 5554
          </p>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button size={"lg"}>Bayar</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;
