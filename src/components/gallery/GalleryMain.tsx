import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { categories } from '../../utils/constants';
import clsx from 'clsx';
import useStyles from './Gallery.styles';
import MiniHeader from '../header/MiniHeader';
import Gallery from 'react-grid-gallery';

// Mui
import { Button } from '@material-ui/core';

// Props
import { GalleryProps } from '../../utils/interface/interface';
import { fetchGallery } from '../../redux/actions/galleryActions';
import { StoreState } from '../../redux/store';

const GalleryMain = (props: GalleryProps) => {
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
    loadMore,
    currentButton
  } = useStyles();
  const { gallery, fetchGallery } = props;
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

  useEffect(() => {
    fetchGallery();
    //eslint-disable-next-line
  }, []);

  const isLocationAdmin = window.location.href.includes('/admin');

  const galleryImages = gallery.map((image) => {
    const captioned = `"${image.name}" - ${image.description}`;
    return {
      src: image.path,
      caption: captioned,
      thumbnail: image.path,
      thumbnailWidth: 240,
      thumbnailHeight: 200
    };
  });

  const handleCategoryClick = (cat: string): void => {
    setActiveCategory(cat);
  };

  return (
    <>
      {!isLocationAdmin && <MiniHeader tab="Gallery" />}
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
                  {categories.map((cat, index) => {
                    console.log('category: ', cat);
                    return (
                      <li key={index}>
                        <Button
                          className={clsx(
                            catButton,
                            cat === activeCategory ? currentButton : ''
                          )}
                          variant="contained"
                          disableElevation
                          onClick={() => handleCategoryClick(cat)}
                        >
                          {cat}
                        </Button>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className={gridList}>
                <Gallery images={galleryImages} />
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

const mapStateToProps = (state: StoreState) => ({
  gallery: state.gallery.gallery
});

const mapActionsToProps = {
  fetchGallery
};

export default connect(mapStateToProps, mapActionsToProps)(GalleryMain);
