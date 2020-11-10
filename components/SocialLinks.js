import React from "react";
import { Box, Divider, Link, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "../components/Icon";

import { SOCIAL_LINKS } from "../components/sharedData/SOCIAL";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  icon: {
    marginLeft: theme.spacing(2),
  },
}));

const SocialLinks = () => {
  const classes = useStyles();

  return (
    <>
      <Divider />
      <Box className={classes.root}>
        <Box mb={3}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}
          >
            {SOCIAL_LINKS.map(({ name, url }) => {
              return (
                <Link href={url} rel="noopener" target="_blank" key={name}>
                  <Grid
                    item
                    xs={4}
                    sm={2}
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    className={classes.icon}
                  >
                    <Icon type={name} width={35} />
                  </Grid>
                </Link>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default SocialLinks;
