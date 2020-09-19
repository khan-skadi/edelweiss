import React from "react";
import { isMainThread } from "worker_threads";
import MiniHeader from "../header/MiniHeader";
import useStyles from "./Gallery.styles";

// Mui
import { Button } from "@material-ui/core";

const Gallery = () => {
  const {
    sectionGallery,
    titleMain,
    container,
    title,
    galleryWrap,
    galleryInner,
    tags,
    tagsList,
    catButton,
    gridList,
    loadMore
  } = useStyles();

  const categories = [
    "Kitchen Benchtops",
    "Monuments",
    "Staircases",
    "Bathrooms",
    "Vanities",
    "Shop Fronts",
    "Walls",
    "Fireplaces",
    "Floors"
  ];

  return (
    <>
      <MiniHeader />
      <section className={sectionGallery}>
        <div className={titleMain}>
          <div className={container}>
            <h1 className={title}>Gallery</h1>
          </div>
        </div>
        <div className={galleryWrap}>
          <div className={container}>
            <div className={galleryInner}>
              <div className={tags}>
                <ul className={tagsList}>
                  {categories.map((cat) => (
                    <li>
                      <Button
                        className={catButton}
                        variant="contained"
                        disableElevation
                      >
                        {cat}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={gridList}>{/* Gallery Images */}</div>
              <div style={{ clear: "both" }}></div>
              <div className={loadMore}>
                <Button variant="contained" disableElevation>
                  Load More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
