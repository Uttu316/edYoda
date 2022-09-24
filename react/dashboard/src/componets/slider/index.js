import SimpleImageSlider from "react-simple-image-slider";
import image1 from "../../assets/images/tinder-1.webp";
import image2 from "../../assets/images/tinder-2.jpeg";
import image3 from "../../assets/images/tinder-3.jpeg";

const images = [{ url: image1 }, { url: image2 }, { url: image3 }];

const Slider = () => {
  return (
    <div>
      <SimpleImageSlider
        width={"100%"}
        height={320}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};

export default Slider;
