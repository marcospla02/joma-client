import { useEffect, useState } from "react";
import "./Carrousel.css";

interface Image {
  images: string[];
}

const Carrousel = ({ images }: Image) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevOrNext(images);
    }, 3000);

    return () => clearInterval(interval);
  });

  const setPrevOrNext = (images: string[], next = true) => {
    setLoaded(false);

    setTimeout(() => {
      const condition = next
        ? selectedIndex < images.length - 1
        : selectedIndex > 0;
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : images.length - 1;
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 400);
  };

  const prev = () => {
    setPrevOrNext(images, false);
  };

  const next = () => {
    setPrevOrNext(images);
  };

  return (
    <div className="carrousel-container">
      <img
        src={`https://res.cloudinary.com/marcos02/image/upload/${selectedImage}`}
        alt="Banco"
        className={`carrousel-image ${loaded ? "loaded" : ""}`}
        width="1000px"
        height="400px"
        onLoad={() => setLoaded(true)}
      />
      <div className="carrousel__button-container">
        <button onClick={prev} className="carrousel__button">
          {"<"}
        </button>
        <button onClick={next} className="carrousel__button">
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Carrousel;

/* 
img1: "https://res.cloudinary.com/marcos02/image/upload/v1680614934/IMG-20200831-WA0027_bcg6le.jpg"
img2: https://res.cloudinary.com/marcos02/image/upload/v1680614913/WhatsApp_Image_2022-06-01_at_10.20.45_AM_eqqyxg.jpg"
img3:"https://res.cloudinary.com/marcos02/image/upload/v1680614896/WhatsApp_Image_2022-06-05_at_7.22.25_PM_1_g70w45.jpg"
Fijo de la url: "https://res.cloudinary.com/marcos02/image/upload/"
*/
