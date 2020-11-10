import React from "react";
import matter from "gray-matter";
import Link from "next/link";
import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { formatDate } from "../helpers";

import Layout from "../components/Layout";
import Header from "../components/Header";

const useStyles = makeStyles((theme) => ({
  date: {
    color: theme.palette.grey[600],
  },
  link: {
    cursor: "pointer",
  },
  title: {
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

const Blog = ({ content }) => {
  const classes = useStyles();
  return (
    <Layout>
      <Header isStatic />
      <Box mt={5}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          spacing={6}
        >
          {content.map(({ document, slug }) => {
            const {
              data: { title, date },
            } = document;

            return (
              <Link href={`/posts/${slug}`} key={slug}>
                <Grid item xs={12} sm={6} className={classes.link}>
                  <Typography variant="body2" className={classes.date}>
                    {formatDate(date)}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="textPrimary"
                    className={classes.title}
                  >
                    {title}
                  </Typography>
                </Grid>
              </Link>
            );
          })}
        </Grid>
      </Box>
    </Layout>
  );
};

Blog.getInitialProps = async (context) => {
  const content = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);
    const data = keys.map((key, index) => {
      const slug = key
        .replace(/^.*[\\\/]/, "")
        .split(".")
        .slice(0, -1)
        .join(".");
      const value = values[index];
      const document = matter(value.default);
      return { document, slug };
    });

    return data
      .slice()
      .sort(
        (a, b) =>
          new Date(b.document.data.date) - new Date(a.document.data.date)
      );
  })(require.context("../content", true, /\.md$/));

  return {
    content,
  };
};

export default Blog;
