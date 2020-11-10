import React from "react";
import Link from "next/link";
import { Grid, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Code as CodeIcon,
  Brightness5Outlined as SunIcon,
  NightsStayOutlined as MoonIcon,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(1),
    marginLeft: theme.spacing(3),
  },
  navLink: {
    cursor: "pointer",
    padding: theme.spacing(0.4),
    borderRadius: theme.spacing(0.5),
    marginLeft: theme.spacing(0.3),
    "&:hover": {
      backgroundColor: theme.palette.text.primary,
      color: theme.palette.background.default,
    },
  },
  modeSwitch: {
    cursor: "pointer",
  },
}));

const Navbar = ({ mode, switchMode }) => {
  const classes = useStyles();

  const menu = [
    {
      path: "/",
      name: "0.START",
    },
    {
      path: "/about",
      name: "1.ABOUT",
    },
    {
      path: "/blog",
      name: "2.BLOG",
    },
    {
      path: "/projects",
      name: "3.PROJECTS",
    },
  ];

  return (
    <Box className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid
          item
          container
          xs={10}
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item>
            <Link href="/" as="/">
              <Typography variant="body2" color="textPrimary">
                <CodeIcon />
              </Typography>
            </Link>
          </Grid>
          {menu.map(({ path, name }) => (
            <Grid item key={name}>
              <Link href={path} as={path}>
                <Typography
                  variant="body2"
                  color="textPrimary"
                  className={classes.navLink}
                >
                  {name}
                </Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={2}>
          <Box className="NavbarModeSwitchBtn" onClick={() => switchMode()}>
            <Typography color="textPrimary" className={classes.modeSwitch}>
              {mode === "dark" ? <SunIcon /> : <MoonIcon />}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Navbar;
