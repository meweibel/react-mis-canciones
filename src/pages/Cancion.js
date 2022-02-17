import React from 'react';
import { Link,  useParams } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Card, CardActions, CardContent, CardMedia } from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import Home from '@mui/icons-material/Home';

const useStyles = makeStyles({
    root: {
        maxWidth: 800,
        margin: "2rem auto"
    },
    lyrics: {
        whiteSpace: "pre-wrap !important"
    },
    title: {
        marginBottom: "3rem !important"
    },
    media: {
        backgroundSize: "cover",
        height: "50vh"
    },
    goHome: {
        justifyContent: "center"
    }
});

const Canciones = ({ mySongs }) => {

    const classes = useStyles();

    let { id } = useParams(),
    song = mySongs[id];

    return (
        <Card className={classes.root}>
            <CardActions className={classes.goHome}>
                <Button size="large" color="primary" component={Link} to="/">
                    <Home />
                    Home
                </Button>
            </CardActions>
            <CardMedia
                className={classes.media}
                image={song.avatar}
                title={song.artist}
            />
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h4"
                    component="h2"
                    className={classes.title}
                >
                    {song.artist} - {song.song}
                </Typography>
                <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.lyrics}
                >
                    {song.lyrics}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Canciones;