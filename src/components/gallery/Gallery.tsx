import React from "react";
import MiniHeader from "../header/MiniHeader";
import useStyles from "./Gallery.styles";

const Gallery = () => {
  const {
    sectionGallery,
    titleMain,
    container,
    title,
    galleryWrap
  } = useStyles();

  return (
    <>
      <MiniHeader />
      <section className={sectionGallery}>
        <div className={titleMain}>
          <div className={container}>
            <h1 className={title}>Gallery</h1>
          </div>
        </div>
        <div className={galleryWrap}></div>
      </section>
    </>
  );
};

export default Gallery;
