import React, { useState, useEffect } from "react";
import { Box, Typography } from "@material-ui/core";
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
const Header = ({ isHomepage, isAbout }) => {
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
        {isHomepage ? (
          <Box component="div" className={classes.headerText}>
            <Typography variant="h6">
              Hi there and welcome 👋🏻.
              <br />
              I'm a full-stack engineer based in Tokyo. It always amazes me how
              when can solve real problems with code, in fact it's one of the
              reasons that led me to this path.
            </Typography>
          </Box>
        ) : null}
        {isAbout ? (
          <Box component="div" mt={5}>
            <Typography variant="h5" color="textPrimary">
              A bit more about me...
            </Typography>
            <Typography variant="h6" className={classes.headerText}>
              I spent my childhood in Brazil, my teen years in Japan and I went
              to the USA for a college degree. By living and working in such
              different environments I found myself having to adapt to
              situations that most people will never have the chance to
              experience. It can be stressful sometimes, however, all those
              experiences allowed me to have a unique perspective on problem
              solving, which can be very helpful when developing a new
              application.
            </Typography>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Header;
