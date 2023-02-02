import { Button, Card, Col, Container, Image, Row, Toast } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../store/course/action";
import { useEffect, useState } from "react";
import { addItem } from "../../store/cart/slice";
import { FiCheckSquare } from 'react-icons/fi';

const DetailPage = () => {
   const { id } = useParams();
   const dispatch = useDispatch();
   const { entity } = useSelector((state) => state.course);
   const [show, setShow] = useState(false);

   const fetchProduct = async (productId) => {
      await dispatch(getDetail(productId));
   }

   const tambah = (item) => {
      dispatch(addItem(item))
      setShow(true)
   }

   useEffect(() => {
      fetchProduct(id)
   }, [])
   return (
      <>
         <Container style={{ padding: "54px 0" }}>
            <Row>
               <Col md={3}>
                  <Toast bg={'Success'} onClose={() => setShow(false)} show={show} delay={3000} autohide>
                     <Toast.Body>Berhasil Menambah Kelas !</Toast.Body>
                  </Toast>
                  <Card style={{ borderRadius: '24px', marginTop: '15px' }}>
                     <Card.Body>
                        <h6 style={{ backgroundColor: '#152A46', color: 'white', padding: '10px 5px' }}>Materi</h6>
                        <h6>Fasilitas</h6>
                        <hr />
                        <center>
                           <Button
                              onClick={() => tambah(entity)}
                              className="btn btn-warning text-white small font-weight-bold rounded-pill"
                           >{" "}
                              Daftar Kelas {" "}
                           </Button>
                        </center>
                     </Card.Body>
                  </Card>
               </Col>
               <Col md={9}>
                  <Row>
                     <Col md={12}>
                        <Card style={{ borderRadius: '24px', padding: '10px 5px', marginTop: '15px' }}>
                           <Card.Body>
                              <h2 className="mb-4">Materi</h2>
                              <Image
                                 style={{ width: "20%", height: "100%", objectFit: "contain" }}
                                 src={entity.image} />
                              <h6 className="mt-4">
                                 <FiCheckSquare className="text-warning" /> {entity.title}
                              </h6>
                              <span className="text-muted">
                                 {entity.description}
                              </span>
                              <h6 className="text-muted mt-2">
                                 Rp {entity.price}0
                              </h6>
                           </Card.Body>
                        </Card>
                     </Col>
                     <Col md={12}>
                        <Card style={{ borderRadius: '24px', padding: '10px 5px', marginTop: '15px' }}>
                           <Card.Body>
                              <h2 className="mb-4">Fasilitas</h2>
                              <h6 className="mt-4">
                                 <FiCheckSquare className="text-warning" /> E-Sertifikat
                              </h6>
                              <h6 className="mt-4">
                                 <FiCheckSquare className="text-warning" /> Portfolio
                              </h6>
                              <h6 className="mt-4">
                                 <FiCheckSquare className="text-warning" /> Job Connector
                              </h6>
                              <h6 className="mt-4">
                                 <FiCheckSquare className="text-warning" /> Career Development
                              </h6>
                           </Card.Body>
                        </Card>
                     </Col>
                  </Row>
               </Col>
            </Row>
         </Container>
         <div style={{ backgroundColor: '#152A46', padding: '150px 24px' }}>
            <h1 className="text-center text-white">
               Sudah Siap Bergabung ?
            </h1>
         </div>
      </>
   )
}

export default DetailPage;