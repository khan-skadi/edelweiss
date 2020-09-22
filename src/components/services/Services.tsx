<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import axios from "axios";
=======
import React from "react";
>>>>>>> develop
import SectionDesktop from "./SectionDesktop";
import SectionMobile from "./SectionMobile";

import useStyles from "./Services.styles";

import "./Services.css";

const Services = () => {
<<<<<<< HEAD
  const [data, setData] = useState(null);
  const { sectionDesktop, sectionMobile, sectionServices } = useStyles();

  useEffect(() => {
    axios
      .get("/api/v1/gallery")
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, []);
=======
  const { sectionDesktop, sectionMobile, sectionServices } = useStyles();
>>>>>>> develop

  return (
    <section className={sectionServices}>
      <div className={sectionDesktop}>
<<<<<<< HEAD
        <SectionDesktop data={data} />
=======
        <SectionDesktop />
>>>>>>> develop
      </div>
      <div className={sectionMobile}>
        <SectionMobile />
      </div>
    </section>
  );
};

export default Services;
