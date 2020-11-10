import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DAILY_STACK, FAMILIAR_TECH } from "./sharedData/SKILLS";
import Icon from "./Icon";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
  },
  container: {
    marginTop: theme.spacing(2),
  },
}));

const Skills = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="h5" color="textPrimary">
        My current daily stack
      </Typography>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={2}
        className={classes.container}
      >
        {DAILY_STACK.map((skill, i) => (
          <Grid
            item
            xs={4}
            sm={2}
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Icon type={skill} width={30} key={i} />
            <Typography component="span" variant="body2" color="textPrimary">
              {skill}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Box mt={5}>
        <Typography variant="h5" color="textPrimary">
          Familiar technogies
        </Typography>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          spacing={2}
          className={classes.container}
        >
          {FAMILIAR_TECH.map((skill, i) => (
            <Grid
              item
              xs={4}
              sm={2}
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Icon type={skill} width={30} key={i} />
              <Typography component="span" variant="body2" color="textPrimary">
                {skill}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Skills;
