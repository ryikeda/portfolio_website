import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core/styles";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => {
  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState("light");

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
  const classes = useStyles();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
    setMounted(true);
  }, [mode]);

  if (!mounted) return <div />;

  return (
    <ThemeProvider theme={theme}>
      <ScopedCssBaseline />
      <Navbar mode={mode} setMode={setMode} />
      <Container>
        <div>{props.children}</div>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
