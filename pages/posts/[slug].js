import React from "react";
import matter from "gray-matter";
import { Box, Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import Markdown from "../../components/Markdown";
import Layout from "../../components/Layout";

import { formatDate } from "../../helpers";

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    borderRadius: "50%",
    border: "2px #3f51b5 solid",
    padding: "3px",
  },
}));

const Post = ({ content, data }) => {
  const classes = useStyles();
  const frontmatter = data;
  const { title, author, date, description } = frontmatter;

  const avatar = `https://images.weserv.nl/?url=https://unavatar.now.sh/github/${author.github}&w=40`;

  return (
    <Layout>
      <Box mt={8} className={classes.root}>
        <Typography variant="h3" color="textPrimary">
          {title}
        </Typography>
      </Box>
      <Box mt={3} mb={3}>
        <Typography
          className={classes.container}
          variant="body2"
          color="textPrimary"
        >
          <img src={avatar} className={classes.avatar} />{" "}
          <Box ml={1}>
            by {author.name} on {formatDate(date)}
          </Box>
        </Typography>
      </Box>
      <Divider />
      <Box mt={2}>
        <Markdown>{content}</Markdown>
      </Box>
    </Layout>
  );
};

Post.getInitialProps = async (ctx) => {
  const { slug } = ctx.query;
  // Import our .md file using the `slug` from the URL
  const content = await import(`../../content/${slug}.md`);
  // Parse .md data through `matter`
  const data = matter(content.default);

  // Pass data to our component props
  return { ...data };
};

export default Post;
