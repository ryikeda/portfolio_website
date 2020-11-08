import React, { useState, useEffect } from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import dynamic from "next/dynamic";
import { config } from "react-spring";
import { TEXTS } from "./sharedData/TEXT";

const TextTransition = dynamic(() => import("react-text-transition"), {
  ssr: false,
});

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
  },
}));
const Header = () => {
  const classes = useStyles();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => index + 1); // every 3 seconds
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Box className={classes.root}>
      <Typography variant="h2" color="textPrimary">
        Rafael{" "}
        <TextTransition
          text={TEXTS[index % TEXTS.length]}
          springConfig={config.gentle}
          style={{ display: "inline-block" }}
        />
      </Typography>
    </Box>
  );
};

export default Header;
