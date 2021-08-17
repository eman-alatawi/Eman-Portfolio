import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import LanguageIcon from '@material-ui/icons/Language';
import WorkIcon from '@material-ui/icons/Work';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import BookIcon from '@material-ui/icons/Book';

const useStyles = makeStyles((theme) => ({
  typographyTitle: {
    fontSize: 16,
    textAlign: 'left'
  },
  typographySub: {
    fontSize: 12,
    textAlign: 'left'
  },
  paper: {
    padding: '0.375rem 1rem',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function TimelineComponent() {
    const classes = useStyles();

    return (
        <Timeline align="alternate">
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
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
                <Typography  className={classes.typographySub}>CyberX</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
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
                <Typography className={classes.typographySub}>General Assembly</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
          <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
              May 2021 - Jun 2021
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot>
                <WorkIcon />
              </TimelineDot>
              <TimelineConnector className={classes.secondaryTail} />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" className={classes.typographyTitle}>
                The Future of Work Fundamentals Phase-1
                </Typography>
                <Typography className={classes.typographySub}>Misk Foundation & Udacity </Typography>
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
                <Typography className={classes.typographySub}>Because this is the life I love!</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          
        </Timeline>
      );
}
