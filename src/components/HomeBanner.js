import { Image } from "react-bootstrap";

const HomeBanner = () => {
  return (
    <div>
      <div>
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
