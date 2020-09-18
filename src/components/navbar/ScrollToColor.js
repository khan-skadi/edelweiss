import React from "react";
import { useScrollTrigger } from "@material-ui/core";

export default function ScrollToColor(props) {
  const {
    threshold,
    bgColorBefore,
    bgColorAfter,
    textColorBefore,
    textColorAfter,
    fadeIn,
    fadeOut,
    paddingBefore,
    paddingAfter,
    children,
    ...other
  } = {
    threshold: 1000,
    bgColorBefore: "transparent",
    bgColorAfter: "#343a40",
    textColorBefore: "black",
    textColorAfter: "white",
    fadeIn: "0.3s ease-in",
    fadeOut: "0.3s ease-out",
    paddingBefore: "1.563rem",
    paddingAfter: "15px",
    ...props
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: threshold,
    target: props.window ? window() : undefined
  });

  return React.cloneElement(children, {
    style: {
      background: trigger
        ? "#000"
        : "linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 30%, rgba(0, 0, 0, 0.0) 100%)",
      transition: trigger ? "none" : fadeOut
    },
    ...other
  });
}
