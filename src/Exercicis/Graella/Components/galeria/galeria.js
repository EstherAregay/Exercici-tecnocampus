import React from "react";
import Img1 from "../fotos/imatge1.jpeg";
import Img2 from "../fotos/imatge2.jpeg";
import Img3 from "../fotos/imatge3.jpeg";
import Img4 from "../fotos/imatge4.jpeg";
import "./galeria.css";

const galeria = () => {
  let info = [
    {
      id: 1,
      imgSrc: "Img1",
    },
    {
      id: 2,
      imgSrc: "Img2",
    },
    {
      id: 3,
      imgSrc: "Img3",
    },
    {
      id: 4,
      imgSrc: "Img4",
    },
  ];

  return (
    <>
      <div className="gallery">
        {info.map((item, index) => {
          return (
            <div className="fotos" key={index}>
              <img src={item.imgSrc} style={{ width: "100%" }}></img>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default galeria;
