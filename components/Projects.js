import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { PROJECTS, HP_PROJECTS } from "./sharedData/PROJECTS";

import ProjectCard from "./ProjectCard";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
  },
  projectsContainer: {
    marginTop: theme.spacing(2),
  },
}));

const Projects = ({ isHomepage }) => {
  let source = PROJECTS;
  if (isHomepage) source = HP_PROJECTS;

  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="h5" color="textPrimary">
        {isHomepage ? "Recent Projects" : "Projects"}
      </Typography>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        spacing={2}
        className={classes.projectsContainer}
      >
        {source.map((proj, i) => (
          <ProjectCard data={proj} key={i} />
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
