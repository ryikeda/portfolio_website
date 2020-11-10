import React from "react";
import Image from "next/image";
import {
  Box,
  Container,
  Typography,
  Avatar,
  CardMedia,
  Card,
  CardContent,
} from "@material-ui/core";
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
        I spent my childhood in Brazil, my teen years in Japan and I went to the
        USA for a college degree. By living and working in such different
        environments I found myself having to adapt to situations that most
        people will never have the chance to experience. It can be stressful
        sometimes, however, all those experiences allowed me to have a unique
        perspective on problem solving, which can be very helpful when
        developing a new application.
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
