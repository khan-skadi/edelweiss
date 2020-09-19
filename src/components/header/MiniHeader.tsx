import React from "react";
import useStyles from "./MiniHeader.styles";

// Mui
import { Breadcrumbs, Typography, Link } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

function handleBreadcrumbClick(
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const MiniHeader = () => {
  const { sectionMiniHeader, innerHeader, container } = useStyles();

  return (
    <div className={sectionMiniHeader}>
      <div className={innerHeader}>
        <div className={container}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Link color="inherit" href="/" onClick={handleBreadcrumbClick}>
              Home
            </Link>
            <Link color="inherit" href="#!" onClick={handleBreadcrumbClick}>
              Gallery
            </Link>
          </Breadcrumbs>
        </div>
      </div>
    </div>
  );
};

export default MiniHeader;
