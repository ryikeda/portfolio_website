import React from "react";
import { Box, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SocialLinks from "../components/SocialLinks";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
    textAlign: "center",
    padding: theme.spacing(3),
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <SocialLinks />
      <Typography component="span" variant="body1" color="textPrimary">
        &copy; {new Date().getFullYear()} Code hosted on&nbsp;
      </Typography>
      <Link href="https://github.com/ryikeda/" rel="noopener" target="_blank">
        <Typography component="span" variant="body1">
          Github
        </Typography>
      </Link>
    </Box>
  );
};

export default Footer;
