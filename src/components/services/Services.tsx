import React, { useState, useEffect } from "react";
import axios from "axios";
import SectionDesktop from "./SectionDesktop";
import SectionMobile from "./SectionMobile";

import useStyles from "./Services.styles";

import "./Services.css";

const Services = () => {
  const [data, setData] = useState(null);
  const { sectionDesktop, sectionMobile, sectionServices } = useStyles();

  useEffect(() => {
    axios
      .get("/api/v1/gallery")
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className={sectionServices}>
      <div className={sectionDesktop}>
        <SectionDesktop data={data} />
      </div>
      <div className={sectionMobile}>
        <SectionMobile />
      </div>
    </section>
  );
};

export default Services;
