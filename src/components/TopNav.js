import { Button } from "react-bootstrap";
import styles from "./TopNav.module.css";
import { FiShoppingCart } from "react-icons/fi";

const TopNav = ({ handleHome, handleCheckout }) => {
  return (
    <div className={styles.container}>
      <Button onClick={handleHome}>Home</Button>
      <Button onClick={handleCheckout}>
        <FiShoppingCart />
      </Button>
    </div>
  );
};

export default TopNav;
