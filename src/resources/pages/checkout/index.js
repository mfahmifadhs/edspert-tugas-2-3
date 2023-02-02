import { Button, ButtonGroup, Card, Col, Container, Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CheckoutPage = ({ handleVerification }) => {
   const navigate = useNavigate()
   const { entities } = useSelector((state) => state.cart)
   const countTotal = (data) => {
      const result = data.reduce((prev, curr) => {
         return prev + parseInt(curr.price, 10)
      }, 0);
      return result;
   }

   const verifCheckout = () => {
      navigate('/verification')
   }

   return (
      <Container style={{ padding: '54px 0' }}>
         <span className="small">Checkout {'>'} Intruksi Bayar</span>
         <h3>Checkout</h3>
         <Row>
            <Col md={5}>
               <Card style={{ borderRadius: '24px', marginTop: '15px' }}>
                  <Card.Body className="mb-4">
                     <h6 className="mt-4">Pilih Metode Pembayaran</h6>
                     <p className="mt-5">
                        Bank Transfer (Verifikasi Menual) <br />
                        <span className="text-muted small">
                           Pembayaran melalui Bank Transfer Mandiri atau BCA.
                           Metode bayar ini memerlukan verifikasi pembayaran manual melalui Whatsapp
                        </span>
                        <hr />
                        <div style={{ border: '1px solid #C9CCCF', padding: '20px 10px' }}>
                           <input type="radio" />{" "}
                           Bank Mandiri
                        </div>
                        <div style={{ border: '1px solid #C9CCCF', padding: '20px 10px' }}>
                           <input type="radio" />{" "}
                           Bank BCA
                        </div>
                     </p>
                     <p className="mt-4">
                        Bank Transfer (Verifikasi Otomatis) <br />
                        <span className="text-muted small">
                           Pembayaran melalui virtual account berbagai bank. Metode bayar ini akan diverifikasi secara otomatis.
                        </span>
                        <hr />
                        <div style={{ border: '1px solid #C9CCCF', padding: '20px 10px' }}>
                           <input type="radio" />{" "}
                           Bank Mandiri
                        </div>
                        <div style={{ border: '1px solid #C9CCCF', padding: '20px 10px' }}>
                           <input type="radio" />{" "}
                           Bank BCA
                        </div>
                     </p>
                  </Card.Body>
               </Card>
            </Col>
            <Col md={7}>
               <Card style={{ borderRadius: '24px', marginTop: '15px' }}>
                  <Card.Body className="mb-4">
                     <h6 className="mt-4">Ringkasan Pemesanan</h6>
                     <div className="mt-4">
                        <label>Kode Promo :</label>
                        <input className="form-control mt-2 mb-2" placeholder="Masukkan Kode Promo" />
                        <Button>Terapkan</Button>
                     </div>
                     <Table striped hover border className="mt-4">
                        <thead>
                           <tr>
                              <td><b>Nama Kelas</b></td>
                              <td><b>Harga Kelas</b></td>
                           </tr>
                        </thead>
                        <tbody>
                           {entities.map(item => {
                              return (
                                 <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>Rp {item.price}</td>
                                 </tr>
                              )
                           })}
                        </tbody>
                        <tfoot>
                           <tr>
                              <td><b>Total Pembayaran</b></td>
                              <td>Rp {countTotal(entities)}.00</td>
                           </tr>
                        </tfoot>
                     </Table>
                     <div className="mt-5">
                        <p>
                           Dengan menekan tombol Bayar kamu telah menyetujui syarat dan ketentuan yang berlaku,
                           silahkan baca kembali Syarat & ketentuan yang berlaku.
                        </p>
                        <p style={{float: 'right'}}>
                           <Button style={{borderRadius: '24px', width: '100px'}} onClick={verifCheckout}>
                              Bayar
                           </Button>
                        </p>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </Container>
   )
}

export default CheckoutPage;