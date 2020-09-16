import React from "react";
import { ObjectLiteral } from "../../utils/interface/interface";
import useStyles from "./Footer.styles";
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";

import Icon from "@material-ui/core/Icon";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import ClockIcon from "@material-ui/icons/Schedule";

import logo from "../../assets/logo/logo395x89-1.png";

const Footer = (props: ObjectLiteral) => {
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
