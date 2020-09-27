import React from 'react';
import useStyles from './MiniHeader.styles';

// Mui
import { Breadcrumbs, Link } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { ObjectLiteral } from '../../utils/interface/interface';

function handleBreadcrumbClick(
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) {
  event.preventDefault();
}

const MiniHeader = (props: ObjectLiteral) => {
  const { sectionMiniHeader, innerHeader, container } = useStyles();
  const { tab } = props;
  const tabLocation = tab && tab.toLowerCase();
  console.log('tabLocation: ', tabLocation);

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
            <Link
              color="inherit"
              href={`/${tabLocation}`}
              onClick={handleBreadcrumbClick}
            >
              {tab}
            </Link>
          </Breadcrumbs>
        </div>
      </div>
    </div>
  );
};

export default MiniHeader;
