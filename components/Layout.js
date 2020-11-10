import React, { useState, useEffect } from "react";
import { Container, Box } from "@material-ui/core";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core/styles";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => {
  const loadMode =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("BLOG_MODE") || "light"
      : "light";
  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState(loadMode);

  const theme = createMuiTheme({
    palette: {
      type: mode,
    },
  });
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.text.primary,
    },
  }));

  const switchMode = () => {
    const setTo = mode === "dark" ? "light" : "dark";
    setMode(setTo);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
    localStorage.setItem("BLOG_MODE", mode);
    setMounted(true);
  }, [mode]);

  useEffect(() => {
    if (loadMode) return;
  }, []);

  if (!mounted) return <div />;

  return (
    <ThemeProvider theme={theme}>
      <ScopedCssBaseline />
      <Navbar mode={mode} switchMode={switchMode} />
      <Container maxWidth="md">
        <Box>{props.children}</Box>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
