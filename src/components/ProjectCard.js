import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  root: {
    maxWidth: "21.57rem",
    minHeight: "25rem",
    margin: "1rem",
  },
  media: {
    height: "15rem",
    objectFit: "contain",
    objectPosition: "center",
  },
});

function ProjectCard({ title, imgUrl, gitHubUrl, discription, year }) {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={imgUrl}
            title="project image"
          />
          <CardContent className="content">
            <Typography gutterBottom variant="h5">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {discription}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="card-footer">
          <IconButton size="small" href={gitHubUrl} target="_blank">
            <GitHubIcon fontSize="small" />
          </IconButton>
          <Typography gutterBottom variant="subtitle2">
            {year}
          </Typography>
        </CardActions>
      </Card>
    </div>
  );
}

export default ProjectCard;
