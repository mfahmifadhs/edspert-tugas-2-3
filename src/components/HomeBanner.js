import { Col, Image, Row } from "react-bootstrap";
import styles from './HomeBanner.module.css';

function Banner(props) {
   return <h2 className="text-warning">Halo, {props.name}</h2>;
 }

const HomeBanner = () => {
   return (
      <div className={styles.container}>
         <div className={styles.content}>
            <Row>
               <Col md={6} style={{ paddingTop: '130px' }}>
                  <Banner name="Jadi expert bersama edspert.id" />
                  <h5 className="text-white">
                     Tingkatkan skill dan pengetahuan bersama para mentor terbaik di bidangnya, untuk siapkan karir impian anda.
                  </h5>
               </Col>
               <Col md={4}>
                  <Image src={'/images/user-banner.png'} />
               </Col>
            </Row>
         </div>
      </div>
   );
}

export default HomeBanner;