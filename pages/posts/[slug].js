import React from "react";
import matter from "gray-matter";
import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ReactMarkdown from "react-markdown";

import Layout from "../../components/Layout";

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    borderRadius: "50%",
    border: "2px #3f51b5 solid",
    padding: "3px",
    marginTop: "20px",
  },
}));

const Post = ({ content, data }) => {
  const classes = useStyles();
  const frontmatter = data;
  const { title, author } = frontmatter;
  const avatar = `https://images.weserv.nl/?url=https://unavatar.now.sh/github/${author.github}&w=40`;

  return (
    <Layout>
      <Box mt={8} className={classes.root}>
        <Typography variant="h3" color="textPrimary">
          {title}
        </Typography>
      </Box>

      <img src={avatar} className={classes.avatar} />
      <Typography variant="body1" color="textPrimary">
        by {author.name}
      </Typography>
      <Typography variant="body1" color="textPrimary">
        <ReactMarkdown source={content} escapeHtml={false} />
      </Typography>
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
