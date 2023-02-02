import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAll } from "../../store/course/action";
import { Card, Container, Row, Col } from "react-bootstrap";
import styles from "./productList.module.css";
const ProductListPage = () => {
   const { entities } = useSelector((state) => state.course);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const fetchProducts = async () => {
      // const response = await httpService.get('/product');
      await dispatch(getAll())
      console.log("response", entities)
   }
   const goToDetail = (prodId) => {
      navigate(`/detail/${prodId}`);
   }
   useEffect(() => {
      fetchProducts()
   }, [])

   return (
      <div className={styles.container}>

         <Container>
            <Row>
               {entities.map((item) => {
                  return (
                     <Col md={4} className="mt-3">
                        <div key={item.id} style={{ cursor: 'pointer', height: '100%' }}>
                           <Card onClick={() => goToDetail(item.id)}  style={{ height: '100%', borderRadius: '25px' }}>
                              <Card.Header style={{ backgroundColor: '#152A46' }}>
                                 <Row>
                                    <Col md={5}>
                                       <img src={item.image} style={{ width: '100%' }} />
                                    </Col>
                                    <Col md={7}>
                                       <h6 className="card-title small text-warning">Intensive Bootcamp</h6>
                                       <h6 className="small text-white">Programming Laravel</h6>
                                       <small className="text-white">(Getting Started with Laravel 9)</small>
                                    </Col>
                                 </Row>
                              </Card.Header>
                              <Card.Body>
                                 <div className="form-group row contentCard small">
                                    <label className="text-muted col-md-4">Course</label>
                                    <span className="col-md-8">{item.title}</span>
                                    <label className="text-muted col-md-4">Price</label>
                                    <span className="col-md-8">Rp {item.price}0</span>
                                    <label className="text-muted col-md-4">Description</label>
                                    <span className="col-md-8">{item.description}</span>
                                 </div>
                              </Card.Body>
                           </Card>
                        </div>
                     </Col>
                  )
               })}

            </Row>
         </Container>
      </div>
   )
}

export default ProductListPage;