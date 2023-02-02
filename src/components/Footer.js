import { Col, Container, Image, Row } from "react-bootstrap";
import styles from './Footer.module.css';

const Footer = () => {
   return (
      <section className={styles.footer}>
         <Container>
            <Row className="text-secondary">
               <Col md={4}>
                  <h2>
                     Edspert.id
                  </h2>
                  <p className="small mt-4 text-muted">
                     Jl. Watugede No.58, Wonorejo, Sariharjo, Kec. Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581
                  </p>
                  <p className="small mt-4 text-muted">
                     +6282123824483
                  </p>
                  <p className="small mt-4 text-muted">
                     halo@widyaedu.com
                  </p>
               </Col>
               <Col md={2}>{" "}</Col>
               <Col md={2}>
                  <h5>Program</h5>
                  <h6 className="mt-4 small">Bidang Ilmu</h6>
                  <h6 className="mt-4 small">Mini Bootcamp</h6>
                  <h6 className="mt-4 small">bootcamp</h6>
               </Col>
               <Col md={2}>
                  <h5>Bidang Ilmu</h5>
                  <h6 className="mt-4 small">Digital Marketing</h6>
                  <h6 className="mt-4 small">Product Management</h6>
                  <h6 className="mt-4 small">English</h6>
                  <h6 className="mt-4 small">Programming</h6>
               </Col>
               <Col md={2}>
                  <h5>Tentang Edspert</h5>
                  <h6 className="mt-4 small">Bantuan</h6>
                  <h6 className="mt-4 small">Kontak Kami</h6>
                  <h6 className="mt-4 small">Media Sosial</h6>
               </Col>
            </Row>
         </Container>
      </section>
   );
}

export default Footer;