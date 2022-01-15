import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: "45rem",
    margin: "0 2rem",
    marginTop: "1.5rem",
    marginBottom: "2.5rem",
  },
  media: {
    height: "40rem",
  },
  typographyTitle: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
    },
  },
  typography: {
    height: "3rem",
    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "justify",
    },
  },
  icon: {
    color: "#95999B",
    "&:hover": {
      color: "#e1a628",
    },
  },
}));

function ProjectCard({ images, gitHubUrl, demo, technologies, year }) {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <Carousel showThumbs={false}>
            {images.map((image, i) => (
              <CardMedia
                key={i}
                className={classes.media}
                image={image}
                title="project image"
              />
            ))}
          </Carousel>
        </CardActionArea>
        <CardActions className="card-footer">
          {demo !== " " && (
            <IconButton size="small" href={demo} target="_blank">
              <LaunchIcon fontSize="small" className={classes.icon} />
            </IconButton>
          )}

          {gitHubUrl !== " " && (
            <IconButton size="small" href={gitHubUrl} target="_blank">
              <GitHubIcon fontSize="small" className={classes.icon} />
            </IconButton>
          )}

          {technologies.map((techIcon, i) => (
            <div key={i} className="logoContainer">
              <img width="30px" src={techIcon} alt=""/>
            </div>
          ))}

          <Typography gutterBottom variant="subtitle2">
            {year}
          </Typography>
        </CardActions>
      </Card>
    </div>
  );
}

export default ProjectCard;
