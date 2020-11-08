import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";

import Icon from "./Icon";

const ProjectCard = ({ data: { name, title, description, techStack } }) => {
  return (
    <Grid item sm={6}>
      <Card square>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {" "}
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
            <Typography
              variant="body2"
              color="textPrimary"
              component="p"
            ></Typography>
            <Box mt={1}>
              {techStack.map((tech, i) => {
                return <Icon type={tech} width={20} key={i} />;
              })}
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default ProjectCard;
