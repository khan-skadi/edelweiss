import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchGallery, IGallery } from '../../redux/actions/galleryActions';
import { StoreState } from '../../redux/store';
import useStyles from './Services.styles';

import SectionDesktop from './SectionDesktop';
import SectionMobile from './SectionMobile';

import './Services.css';

interface ServicesProps {
  fetchGallery: () => void;
  gallery: IGallery[];
}

const Services = (props: ServicesProps) => {
  const { sectionDesktop, sectionMobile, sectionServices } = useStyles();
  const { fetchGallery, gallery } = props;

  useEffect(() => {
    fetchGallery();

    //eslint-disable-next-line
  }, []);

  console.log('services gallery: ', gallery);

  return (
    <section className={sectionServices}>
      <div className={sectionDesktop}>
        <SectionDesktop data={gallery} />
      </div>
      <div className={sectionMobile}>
        <SectionMobile />
      </div>
    </section>
  );
};

const mapStateToProps = (state: StoreState) => ({
  gallery: state.gallery.gallery
});

const mapActionsToProps = {
  fetchGallery
};

export default connect(mapStateToProps, mapActionsToProps)(Services);
