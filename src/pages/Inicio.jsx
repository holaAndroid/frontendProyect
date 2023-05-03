import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

// const spanStyle = {
//   padding: "20px",
//   background: "#efefef",
//   color: "#000000",
// };

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};
const slideImages = [
  {
    url: "https://res.cloudinary.com/dzfi2sk1i/image/upload/v1682594945/slider1_htxhi1.png",
    caption: "Slide 2",
  },
  {
    url: "https://res.cloudinary.com/dzfi2sk1i/image/upload/v1682594953/slider2_wanlse.png",
    caption: "Slide 2",
  },
  {
    url: "https://res.cloudinary.com/dzfi2sk1i/image/upload/v1682594441/X13Ymrt_db5qk1.jpg",
    caption: "Slide 3",
  },
];
const Inicio = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            >
              {/* <span style={spanStyle}>{slideImage.caption}</span> */}
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Inicio;
