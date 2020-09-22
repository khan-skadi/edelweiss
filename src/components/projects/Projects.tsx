import React from "react";
import useStyles from "./Projects.styles";
import ProjectsDesktop from "./ProjectsDesktop";
import ProjectsMobile from "./ProjectsMobile";

import { ObjectLiteral } from "../../utils/interface/interface";

// Instagram API
// const appId = "637025016892275";
// const redirectUri = "https://edelweissstone.com.au"; // /auth

// const fetchIg = `https://api.instagram.com/oauth/authorize?client_id=${appId}&redirect_uri=${redirectUri}&scope=user_profile,user_media&response_type=code`;

const Projects = (props: ObjectLiteral) => {
  const {
    sectionProjects,
    projectsDesktop,
    projectsMobile,
    container
  } = useStyles();

  return (
    <section className={sectionProjects}>
      <div className={container}>
        <div className={projectsDesktop}>
          <ProjectsDesktop />
        </div>
        <div className={projectsMobile}>
          <ProjectsMobile />
        </div>
      </div>
    </section>
  );
};

export default Projects;
