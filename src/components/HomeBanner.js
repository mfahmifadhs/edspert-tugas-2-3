import { Image } from "react-bootstrap";

const HomeBanner = () => {
   return (
      <div>
         <div>
            <div>
               <h1>Selamat Datang</h1>
               <p>
               Minim dolor
               </p>
            </div>
            <Image src={'/images/girl.png'} />
         </div>
      </div>
   );
}

export default HomeBanner;