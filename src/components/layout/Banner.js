import classes from "./Banner.module.css";
import image from "../layout/images/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";

function Banner() {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      Chez vous, partout et ailleurs
    </div>
  );
}
export default Banner;
