import React from "react";
import simpleIcons from "simple-icons";
import { Box, makeStyles } from "@material-ui/core";

const Icon = ({ type, width }) => {
  const icon = simpleIcons.get(type);
  console.dir(icon);
  const useStyles = makeStyles((theme) => ({
    root: {
      width,
      fill: `#${icon.hex}`,
      display: "inline-block",
      margin: "0 3px",
    },
  }));

  const classes = useStyles();

  return (
    <Box
      className={classes.root}
      component="span"
      data-icon={icon}
      dangerouslySetInnerHTML={{ __html: icon.svg }}
    ></Box>
  );
};

export default Icon;
