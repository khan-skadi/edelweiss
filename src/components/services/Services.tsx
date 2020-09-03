import React from "react";
import SectionDesktop from "./SectionDesktop";
import SectionMobile from "./SectionMobile";

import useStyles from "./Services.styles";
import { ObjectLiteral } from "../../utils/interface/interface";

import "./Services.css";

const Services = () => {
  const { sectionDesktop, sectionMobile, sectionServices } = useStyles();

  return (
    <section className={sectionServices}>
      <div className={sectionDesktop}>
        <SectionDesktop />
      </div>
      <div className={sectionMobile}>
        <SectionMobile />
      </div>
    </section>
  );
};

export default Services;
