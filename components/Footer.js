import React from "react";
import { Box, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
    textAlign: "center",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="body1" color="textPrimary">
        &copy; {new Date().getFullYear()} Code hosted on
      </Typography>
      <Link href="https://github.com/ryikeda/" rel="noopener" target="_blank">
        <Typography variant="body1">Github</Typography>
      </Link>
    </Box>
  );
};

export default Footer;
