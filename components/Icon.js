import React from "react";
import simpleIcons from "simple-icons";
import { Box, makeStyles } from "@material-ui/core";

const Icon = ({ type, width }) => {
  const icon = simpleIcons.get(type);
  let fill;

  const useStyles = makeStyles((theme) => ({
    root: {
      width,
      fill: icon.hex === "000000" ? theme.palette.text.primary : `#${icon.hex}`,
      display: "inline-block",
      margin: "0 3px",
      textAlign: "center",
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
