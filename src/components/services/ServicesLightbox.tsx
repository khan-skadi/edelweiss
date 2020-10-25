import React from 'react';

// Images
import benchtop from '../../assets/images/kitchen/benchtop2.jpg';
import bathroom from '../../assets/images/bathroom/bathroom.jpg';
import renovations from '../../assets/images/renovations/renovations.jpg';
import fireplace from '../../assets/images/fireplace/fireplace.jpg';
import stoneStaircases from '../../assets/images/staircases/stoneStaircases.png';
import monument from '../../assets/images/monuments/stoneMonument.png';
import stoneFloor from '../../assets/images/floors/stoneFloor.png';
import stoneWall from '../../assets/images/walls/stoneWall.png';
import stoneShopFronts from '../../assets/images/shopFronts/shopFronts.png';

const ServicesLightbox = () => {
  return (
    <>
      <div className="lightbox-target" id="servImg1">
        <img src={benchtop} alt="Kitchen Benchtops" />
        {/* eslint-disable-next-line */}
        <a href="#!" className="lightbox-close"></a>
      </div>
      <div className="lightbox-target" id="servImg2">
        <img src={bathroom} alt="Bathrooms / Laundry Vanities" />
        {/* eslint-disable-next-line */}
        <a href="#!" className="lightbox-close"></a>
      </div>
      <div className="lightbox-target" id="servImg3">
        <img src={renovations} alt="Renovations" />
        {/* eslint-disable-next-line */}
        <a href="#!" className="lightbox-close"></a>
      </div>
      <div className="lightbox-target" id="servImg4">
        <img src={stoneShopFronts} alt="Stone Splashbacks" />
        {/* eslint-disable-next-line */}
        <a href="#!" className="lightbox-close"></a>
      </div>
      <div className="lightbox-target" id="servImg5">
        <img src={fireplace} alt="Fireplaces" />
        {/* eslint-disable-next-line */}
        <a href="#!" className="lightbox-close"></a>
      </div>
      <div className="lightbox-target" id="servImg6">
        <img src={stoneStaircases} alt="Stone Staircases" />
        {/* eslint-disable-next-line */}
        <a href="#!" className="lightbox-close"></a>
      </div>
      <div className="lightbox-target" id="servImg7">
        <img src={monument} alt="Stone Monuments" />
        {/* eslint-disable-next-line */}
        <a href="#!" className="lightbox-close"></a>
      </div>
      <div className="lightbox-target" id="servImg8">
        <img src={stoneFloor} alt="Stone Floors" />
        {/* eslint-disable-next-line */}
        <a href="#!" className="lightbox-close"></a>
      </div>
      <div className="lightbox-target" id="servImg9">
        <img src={stoneWall} alt="Stone Walls" />
        {/* eslint-disable-next-line */}
        <a href="#!" className="lightbox-close"></a>
      </div>
    </>
  );
};

export default ServicesLightbox;
