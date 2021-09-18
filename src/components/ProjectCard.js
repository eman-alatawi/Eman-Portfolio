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

const useStyles = makeStyles((theme) => ({
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
    typographyTitle: {
        [theme.breakpoints.down("sm")]: {
          textAlign: 'center',
        },
        [theme.breakpoints.up("md")]: {
            textAlign: 'center',
        },
    },
    typography: {
        [theme.breakpoints.down("sm")]: {
          textAlign: 'left',
        },
        [theme.breakpoints.up("md")]: {
            textAlign: 'justify',
        },
    }
}));

function ProjectCard({ title, imgUrl, gitHubUrl, discription, technologies, year }) {
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
                        <Typography gutterBottom variant="h5" className={classes.typographyTitle}>
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.typography}>
                            {discription}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className="card-footer">
                    <IconButton size="small" href={gitHubUrl} target="_blank">
                        <GitHubIcon fontSize="small" />
                    </IconButton>
                    {technologies.map(techIcon => (
                        <img width="30px" src={techIcon} />
                    ))}
                    {/* <img width="20px"  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDU0OC4yOSA1NDguMjkxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik0yNzYuMDQzLDI0NC4yMTZjLTI0LjU3NSwwLTM4Ljc0MSwyNC4wODctMzguNzQxLDUzLjg2MmMtMC4yNDEsMzAuMjI4LDE0LjQwNyw1My4zODIsMzguNSw1My4zODIgICAgYzI0LjMyMywwLDM4LjUxMi0yMi45MiwzOC41MTItNTQuMDkxQzMxNC4zMTMsMjY4LjMwMywzMDAuNjA0LDI0NC4yMTYsMjc2LjA0MywyNDQuMjE2eiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJCTxwYXRoIGQ9Ik00ODYuMiwxOTYuMTE2aC0xMy4xNjRWMTMyLjU5YzAtMC4zOTktMC4wNjQtMC43OTUtMC4xMTYtMS4yYy0wLjAyMS0yLjUyLTAuODI0LTQuOTk3LTIuNTUxLTYuOTZMMzY0LjY1NiwzLjY3NyAgICBjLTAuMDMxLTAuMDMxLTAuMDY0LTAuMDQ0LTAuMDg1LTAuMDc1Yy0wLjYyOS0wLjcwNC0xLjM2NC0xLjI5LTIuMTQxLTEuNzk2Yy0wLjIzMS0wLjE1NC0wLjQ2Mi0wLjI4My0wLjcwNC0wLjQxOSAgICBjLTAuNjcyLTAuMzY1LTEuMzg2LTAuNjcyLTIuMTIxLTAuODkzYy0wLjE5OS0wLjA1Mi0wLjM3Ny0wLjEzNC0wLjU3Ni0wLjE4NkMzNTguMjI5LDAuMTE4LDM1Ny40LDAsMzU2LjU2MiwwSDk2Ljc1NyAgICBDODQuODkzLDAsNzUuMjU2LDkuNjQ5LDc1LjI1NiwyMS41MDJ2MTc0LjYxM0g2Mi4wOTNjLTE2Ljk2NywwLTMwLjczMywxMy43NTYtMzAuNzMzLDMwLjczM3YxNTkuODEyICAgIGMwLDE2Ljk2MSwxMy43NjYsMzAuNzMxLDMwLjczMywzMC43MzFoMTMuMTYzVjUyNi43OWMwLDExLjg1NCw5LjYzNywyMS41MDEsMjEuNTAxLDIxLjUwMWgzNTQuNzc3ICAgIGMxMS44NTMsMCwyMS41MDItOS42NDcsMjEuNTAyLTIxLjUwMVY0MTcuMzkySDQ4Ni4yYzE2Ljk3NywwLDMwLjcyOS0xMy43NzEsMzAuNzI5LTMwLjczMVYyMjYuODQ5ICAgIEM1MTYuOTMsMjA5Ljg3Miw1MDMuMTc3LDE5Ni4xMTYsNDg2LjIsMTk2LjExNnogTTk2Ljc1NywyMS41MDJoMjQ5LjA1M3YxMTAuMDA2YzAsNS45NDMsNC44MTgsMTAuNzUxLDEwLjc1MSwxMC43NTFoOTQuOTczICAgIHY1My44NjFIOTYuNzU3VjIxLjUwMnogTTM1My4wMzMsMzc2Ljk2bC0xMC4zOTQsMjcuODg0Yy0yMi42NjYtNi42MTktNDEuNTY1LTEzLjQ3OS02Mi44MjgtMjIuNDQ1ICAgIGMtMy41MjctMS40MTgtNy4zMTctMi4xMzItMTEuMDk0LTIuMzYyYy0zNS45MDktMi4zNTItNjkuNDQ5LTI4LjgxOS02OS40NDktODAuNzc4YzAtNDcuNzExLDMwLjIzNi04My42MjMsNzcuNzEtODMuNjIzICAgIGM0OC42NzUsMCw3NS4zNTEsMzYuODU0LDc1LjM1MSw4MC4zMTdjMCwzNi4xNDItMTYuNzY2LDYxLjYzOC0zNy43ODUsNzEuMDkxdjAuOTQ1ICAgIEMzMjYuODI4LDM3MS41MjgsMzQwLjUxOSwzNzQuMzY3LDM1My4wMzMsMzc2Ljk2eiBNNzIuOTEyLDM3MC4xMTZsNy4zMjgtMjkuNzY0YzkuNjksNC45NiwyNC41NTQsOS45MTUsMzkuOTE3LDkuOTE1ICAgIGMxNi41MjUsMCwyNS4yNzEtNi44NCwyNS4yNzEtMTcuMjI4YzAtOS45MjgtNy41Ni0xNS41OTctMjYuNjkxLTIyLjQ0MmMtMjYuNDU3LTkuMjE3LTQzLjY5Ni0yMy44NTgtNDMuNjk2LTQ3LjAxNCAgICBjMC0yNy4xNjMsMjIuNjgtNDcuOTQ4LDYwLjIzMS00Ny45NDhjMTcuOTU0LDAsMzEuMTg0LDMuNzkxLDQwLjYyMyw4LjAzbC04LjAyMSwyOS4wNjFjLTYuMzc1LTMuMDc2LTE3LjcxMS03LjU2NC0zMy4zLTcuNTY0ICAgIGMtMTUuNTk5LDAtMjMuMTYzLDcuMDc5LTIzLjE2MywxNS4zNTdjMCwxMC4xNSw4Ljk3NywxNC42NDYsMjkuNTMzLDIyLjQ0N2MyOC4xMDgsMTAuMzk0LDQxLjMzMiwyNS4wMjMsNDEuMzMyLDQ3LjQ2NCAgICBjMCwyNi42OTktMjAuNTU3LDQ5LjM2NS02NC4yNTMsNDkuMzY1Qzk5Ljg0NCwzNzkuNzg1LDgxLjg5OSwzNzUuMDYsNzIuOTEyLDM3MC4xMTZ6IE00NTEuNTM0LDUyMC45NjJIOTYuNzU3di0xMDMuNTdoMzU0Ljc3NyAgICBWNTIwLjk2MnogTTQ3NS4zODcsMzc3LjQyOGgtOTkuNDU1VjIxOC4yMzFoMzYuMTU4djEyOC45N2g2My4yOTdWMzc3LjQyOHoiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+" /> */}
                    <Typography gutterBottom variant="subtitle2">
                        {year}
                    </Typography>
                </CardActions>
            </Card>
        </div>
    );
}

export default ProjectCard;
