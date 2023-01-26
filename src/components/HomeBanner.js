import { Image } from "react-bootstrap";
import styles from "./HomeBanner.module.css";

const HomeBanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <h1>Selamat datang</h1>
          <p>
            Minim dolor eiusmod nostrud irure magna ex. Commodo consequat culpa
            et tempor esse. Irure do tempor laboris ex velit nulla minim. Ipsum
            deserunt non elit nulla exercitation adipisicing consectetur. Qui
            ipsum tempor ipsum proident cillum.
          </p>
        </div>
        <Image src={"/images/girl.png"} />
      </div>
    </div>
  );
};

export default HomeBanner;
