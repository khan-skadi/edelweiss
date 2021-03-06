import React from 'react';
import useStyles from './FooterDesktop.styles';

import Icon from '@material-ui/core/Icon';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import ClockIcon from '@material-ui/icons/Schedule';

import logo from '../../assets/logo/logo395x89-1.png';

const FooterDesktop = () => {
  const {
    footerMain,
    footerTop,
    container,
    footerLeft,
    leftTitle,
    leftUl,
    footerMiddle,
    middleLogo,
    middleUl,
    middleSocial,
    socialFb,
    socialInsta,
    icon,
    footerRight,
    rightTitle,
    rightUl,
    footerBottom,
    hours,
    days
  } = useStyles();

  React.useEffect(() => {
    // const vmro = function(window: any, document: Document) {
    (function (window: any, document: Document) {
      const loader = function () {
        const script = document.createElement('script');
        const tag = document.getElementsByTagName('script')[0];
        script.src = 'https://cdn.iubenda.com/iubenda.js';
        tag.parentNode && tag.parentNode.insertBefore(script, tag);
      };
      if (window.addEventListener) {
        window.addEventListener('load', loader, false);
      } else if (window.attachEvent) {
        window.attachEvent('onload', loader);
      } else {
        window.onload = loader;
      }
    })(window, document);

    // vmro(window, document);

    //   <script type="text/javascript">
    //   (function (w, d) {
    //     var loader = function () {
    //       var s = d.createElement('script'),
    //         tag = d.getElementsByTagName('script')[0];
    //       s.src = 'https://cdn.iubenda.com/iubenda.js';
    //       tag.parentNode.insertBefore(s, tag);
    //     };
    //     if (w.addEventListener) {
    //       w.addEventListener('load', loader, false);
    //     } else if (w.attachEvent) {
    //       w.attachEvent('onload', loader);
    //     } else {
    //       w.onload = loader;
    //     }
    //   })(window, document)
    // </script>
  });

  return (
    <div className={footerMain}>
      <div className={footerTop}>
        <div className={container}>
          <div className={footerLeft}>
            <div className={leftTitle}>Services</div>
            <ul className={leftUl}>
              <li>
                <a href="#!">Kitchen Benchtops</a>
              </li>
              <li>
                <a href="#!">Fireplaces</a>
              </li>
              <li>
                <a href="#!">Bathroom / Laundry Vanities</a>
              </li>
              <li>
                <a href="#!">Renovations</a>
              </li>
            </ul>
          </div>
          <div className={footerMiddle}>
            <div className={middleLogo}>
              <a href="#!">
                <img src={logo} alt="Edelweiss Stone Logo" />
              </a>
            </div>
            <ul className={middleUl}>
              <li>
                <p>Our Address</p>
                <span>4/3 Dursley Rd, Yennora, NSW 2161</span>
              </li>
              <li>
                <p>Phone</p>
                <a href="tel:0431 703 388">0431 703 388</a>
              </li>
              <li>
                <p>Fax</p>
                <span>(02) 9826 8008</span>
              </li>
              <li>
                <p>Email</p>
                <a href="mailto:info@edelweissstone.com.au">
                  info@edelweissstone.com.au
                </a>
              </li>
              <li>
                <a
                  href="https://www.iubenda.com/privacy-policy/81793199"
                  className="iubenda-white iubenda-embed"
                  title="Privacy Policy "
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
            <div className={middleSocial}>
              <p>Follow Us On</p>
              <a
                className={socialFb}
                href="https://www.facebook.com/Edelweiss-stone-495239060955229"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className={icon} component={FacebookIcon} />
              </a>
              <a
                className={socialInsta}
                href="https://www.instagram.com/edelweissstone/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className={icon} component={InstagramIcon} />
              </a>
            </div>
          </div>
          <div className={footerRight}>
            <div className={rightTitle}>Projects</div>
            <ul className={rightUl}>
              <li>
                <a href="#!">Kitchens</a>
              </li>
              <li>
                <a href="#!">Fireplaces</a>
              </li>
              <li>
                <a href="#!">Bathroom / Laundry Vanities</a>
              </li>
              <li>
                <a href="#!">Renovations</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={footerBottom}>
        <div className={container}>
          <div className={hours}>
            <Icon component={ClockIcon} /> Work
            <br /> Hours
          </div>
          <ul className={days}>
            <li>
              Mon - Fri
              <span>7:30 am to 4:30 pm</span>
            </li>
            <li>
              Saturdays
              <span>9:00 am to 1:00 pm</span>
            </li>
            <li>
              Sundays
              <span>by Appointment</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterDesktop;
