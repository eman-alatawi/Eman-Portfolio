import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import LanguageIcon from "@material-ui/icons/Language";
import WorkIcon from "@material-ui/icons/Work";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import BookIcon from "@material-ui/icons/Book";
import udacityLogo from "../images/udacity-seeklogo.svg";
import generalAsseblyLogo from "../images/general-assembly.svg";
import cyberxLogo from "../images/CyberX-logo.png";
import miskLogo from "../images/MiSK_Foundation_logo.svg";
import simplilearnLogo from "../images/SimplilearnLogo.png"

import { GiArtificialIntelligence, GiStairsGoal } from "react-icons/all";


const useStyles = makeStyles((theme) => ({
  typographyTitle: {
    textAlign: "left",
    fontWeight: "bold",
    fontFamily: "sans-serif",
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 16,
    },
  },
  typographySub: {
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 16,
    },
  },
  typographyDate: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 16,
    },
  },
  paper: {
    padding: "0.375rem 1rem",
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  imgWidth: {
    [theme.breakpoints.down("sm")]: {
      width: 50,
    },
    [theme.breakpoints.up("md")]: {
      width: 80,
    },
  },
  miskLogo: {
    [theme.breakpoints.down("sm")]: {
      width: 30,
    },
    [theme.breakpoints.up("md")]: {
      width: 50,
    },
  },
}));

export default function TimelineComponent() {
  const classes = useStyles();

  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.typographyDate}
          >
            Jun 2020 - Jul 2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <LanguageIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" className={classes.typographyTitle}>
              Internship
            </Typography>
            <Typography className={classes.typographySub}>
              <img src={cyberxLogo} className={classes.imgWidth} />
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.typographyDate}
          >
            Dec 2020 - Mar 2021
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" className={classes.typographyTitle}>
              Java Developer-participant
            </Typography>
            <Typography className={classes.typographySub}>
              <img src={generalAsseblyLogo} className={classes.imgWidth} />
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.typographyDate}
          >
            May 2021 - Jun 2021
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" className={classes.typographyTitle}>
              The Future of Work Fundamentals
            </Typography>
            <Typography className={classes.typographySub}>
              {" "}
              <img src={miskLogo} className={classes.miskLogo} />{" "}
              <img src={udacityLogo} className={classes.imgWidth} />{" "}
            </Typography>
            {/* <Typography className={classes.typographySub}>  <img src={udacityLogo} className="m-2"/> Udacity </Typography> */}
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.typographyDate}
          >
            Aug 2021 - Sep 2021
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <GiArtificialIntelligence size="1.5rem" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" className={classes.typographyTitle}>
              AI for Business Nanodegree
            </Typography>
            <Typography className={classes.typographySub}>
              <img src={udacityLogo} className={classes.imgWidth} />{" "}
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.typographyDate}
          >
            Sep 2021 - Present
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <GiStairsGoal size="1.5rem" />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" className={classes.typographyTitle}>
            Full Stack Developer (MERN) - Internship 
            </Typography>
            <Typography className={classes.typographySub}>
              <img src={simplilearnLogo} className={classes.imgWidth} />{" "}
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <BookIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" className={classes.typographyTitle}>
              Continue Learning
            </Typography>
            <Typography className={classes.typographySub}>
              Because this is the life I love!
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
