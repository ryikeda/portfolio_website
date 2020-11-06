import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <div className="Layout-content">{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
