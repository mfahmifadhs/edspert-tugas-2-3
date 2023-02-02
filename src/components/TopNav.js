import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from './TopNav.module.css';
import { FiShoppingCart } from 'react-icons/fi';

const TopNav = ({ handleHome, handleContact }) => {
   return (
      <>
         <div className={styles.container}>
            <div className="row">
               <div className="col-md-6 text-white">
                  <h1>Edspert.id</h1>
               </div>
               <div className="col-md-6">
                  <p style={{textAlign: 'right'}}>
                     <Button
                        onClick={handleHome}
                        style={{
                           textDecoration: 'none',
                           color: 'white',
                           marginRight: '20px'
                        }}
                     >
                        Beranda
                     </Button>
                     <Button
                        onClick={handleContact}
                        style={{
                           textDecoration: 'none',
                           color: 'white',
                           marginRight: '50px'
                        }}
                     >
                        Kontak
                     </Button>
                     <Button onClick='#'>
                        <FiShoppingCart />
                     </Button>
                  </p>
               </div>
            </div>
         </div>
      </>
   );
}

export default TopNav;