import React from 'react';
import MiniHeader from '../header/MiniHeader';
import useStyles from './Gallery.styles';
import Gallery from 'react-grid-gallery';

// Mui
import { Button } from '@material-ui/core';

export const IMAGES = [
  {
    src: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
    thumbnail:
      'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 174
  },
  {
    src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
    thumbnail:
      'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: 'Boats (Jeshu John - designerspics.com)'
  },
  {
    src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
    thumbnail:
      'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },
  {
    src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
    thumbnail:
      'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },
  {
    src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
    thumbnail:
      'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },
  {
    src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
    thumbnail:
      'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212
  }
];

const GalleryMain = () => {
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
    'Kitchen Benchtops',
    'Monuments',
    'Staircases',
    'Bathrooms',
    'Vanities',
    'Shop Fronts',
    'Walls',
    'Fireplaces',
    'Floors'
  ];

  const renderHeader = window.location.href.includes('/admin');

  return (
    <>
      {!renderHeader && <MiniHeader tab="Gallery" />}
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
              <div className={gridList}>
                <Gallery images={IMAGES} />
              </div>
              <div style={{ clear: 'both' }}></div>
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

export default GalleryMain;
