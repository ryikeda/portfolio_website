import React from "react";

import { Box, Typography, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  headerText: {
    marginTop: theme.spacing(3),
    color: theme.palette.grey[600],
  },
  img: {
    width: "100%",
  },
}));

const ProfileInfo = () => {
  const classes = useStyles();
  return (
    <Box component="div" mt={5}>
      <Typography variant="h5" color="textPrimary">
        A bit more about me...
      </Typography>
      <Typography variant="h6" className={classes.headerText}>
        <p>
          I spent my childhood in Brazil, my teen years in Japan and I went to
          the USA for my college degree. Nowadays, I live in Japan where I work
          as a software engineer.
        </p>
        <p>
          When I’m not coding or studying I usually hang out with my one year
          old son and my wife. I also like to play the guitar or watch a movie
          to relax.
        </p>
      </Typography>
      <Box mt={3}>
        <Card className={classes.card}>
          <img src="/images/beach.jpg" className={classes.img}></img>
        </Card>
      </Box>
    </Box>
  );
};

export default ProfileInfo;
