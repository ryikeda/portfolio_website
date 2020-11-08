import React, { useState, useEffect } from "react";
import { Box, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import dynamic from "next/dynamic";
import { config } from "react-spring";
import { ACTIONS } from "./sharedData/ACTIONS";

const TextTransition = dynamic(() => import("react-text-transition"), {
  ssr: false,
});

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
  },
  headerText: {
    marginTop: theme.spacing(5),
    color: theme.palette.grey[600],
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
    <>
      <Box component="div" className={classes.root}>
        <Typography variant="h2" color="textPrimary">
          Rafael{" "}
          <TextTransition
            text={ACTIONS[index % ACTIONS.length]}
            springConfig={config.gentle}
            style={{ display: "inline-block" }}
          />
        </Typography>
        <Box component="div" className={classes.headerText}>
          <Typography variant="h6">
            Hi there and welcome 👋🏻.
            <br />
            I'm a full-stack engineer based in Tokyo. It always amazes me how
            when can solve real problems with code, in fact it's one of the
            reasons that led me to this path.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Header;
