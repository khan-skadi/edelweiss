import React from "react";
import MiniHeader from "../header/MiniHeader";
import useStyles from "./Gallery.styles";

const Gallery = () => {
  const { sectionGallery } = useStyles();

  return (
    <>
      <MiniHeader />
      <div className={sectionGallery}>
        <h1>Gallery</h1>
      </div>
    </>
  );
};

export default Gallery;
