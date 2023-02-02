import { Button, ButtonGroup, Card, Col, Container, Image, Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
   const { entities } = useSelector((state) => state.cart)
   const countTotal = (data) => {
      const result = data.reduce((prev, curr) => {
         return prev + parseInt(curr.price, 10)
      }, 0);
      return result;
   }
   return (
      <Container style={{ padding: '54px 0' }}>
         <span className="small">Checkout {'>'} Intruksi Bayar</span>
         <h3>Intruksi Bayar</h3>
         <Card style={{ borderRadius: '24px', marginTop: '15px' }}>
            <Card.Body className="mb-4">
               <Row>
                  <Col md={6} style={{ padding: '24px' }}>
                     <p>
                        <Row>
                           {entities.map(item => {
                              return (
                                 <>
                                    <Col md={2}>
                                       <Image
                                          style={{ width: "100%", height: "100%", objectFit: "contain" }}
                                          src={item.image} />
                                    </Col>
                                    <Col md={8}>
                                       {item.title} <br />
                                       Rp {item.price}0
                                    </Col>
                                 </>
                              )
                           })}
                        </Row>
                     </p>
                     <p>Metode Pembayaran</p>
                     <p className="text-muted">
                        Bank Transfer (verifikasi manual)-Mandiri
                     </p>
                     <p>
                        Bank Mandiri <br />
                        No Rek. 137000299089 <br />
                        <span className="text-muted">
                           a.n. PT Widya Kreasi Bangsa
                        </span>
                     </p>
                     <p>
                        Nominal yang harus dibayar senilai:
                        <h6><b>Rp {countTotal(entities)}.00</b></h6>
                     </p>
                  </Col>
                  <Col md={6}>
                     <h6 className="mb-4">Intruksi Pembayaran</h6>
                     <div className="small">
                        <p>1. Masukkan kartu ke mesing ATM Mandiri.</p>
                        <p>2. Pilih Bahasa.</p>
                        <p>3. Masukkan PIN ATM.</p>
                        <p>4. Pilih menu transaksi lainnya.</p>
                        <p>5. Pilih menu “Transfer”, lalu pilih ke relk Mandiri.</p>
                        <p>6. Masukkan no rekening yang dituju.</p>
                        <p>7. Masukkan nominal jumlah uang yang akan di transfer.</p>
                        <p>8. Layar ATM akan menampilkan data transaksi anda, jika data sudah benar pilih “YA”.</p>
                        <p>9. Selesai, struk akan keluar dari mesin ATM.</p>
                     </div>
                  </Col>
               </Row>
            </Card.Body>
            <Card.Footer style={{ backgroundColor: '#152A46', padding: '150px 24px' }}>
               <center>
                  <h4 className="text-white mb-4">Sudah Transfer? Lakukan verifikasi pembayaran segera!</h4>
                  <p>
                     <Button
                        className="btn btn-warning text-white small font-weight-bold rounded-pill"
                     >{" "}
                        Verifikasi Pembayaran
                     </Button>
                  </p>
               </center>
            </Card.Footer>
         </Card>
      </Container>
   )
}

export default CheckoutPage;