import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import { ObjectLiteral } from "../../utils/interface/interface";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    }
  })
);

const SectionMobile = (props: ObjectLiteral) => {
  const classes = useStyles();

  return <div>Section Mobile</div>;
};

export default SectionMobile;
