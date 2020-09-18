import React from "react";
import useStyles from "./Footer.styles";
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";

const Footer = () => {
  const { footer, footerDesktop, footerMobile } = useStyles();

  return (
    <footer className={footer}>
      <div className={footerDesktop}>
        <FooterDesktop />
      </div>
      <div className={footerMobile}>
        <FooterMobile />
      </div>
    </footer>
  );
};

export default Footer;
