import React from "react";
import matter from "gray-matter";
import Link from "next/link";
import { Grid } from "@material-ui/core";

import Layout from "../components/Layout";

const Blog = ({ title }) => {
  return <Layout>{title}</Layout>;
};

Blog.getInitialProps = async (ctx) => {
  const { slug } = ctx.query;

  return { slug };
};

export default Blog;
