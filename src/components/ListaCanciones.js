import React from 'react'
import { Link } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import { List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from '@mui/material';
import { Avatar } from '@mui/material';
import { IconButton } from '@mui/material';
import { Launch } from '@mui/icons-material';
import { Alert, Dialog } from '@mui/material';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
        margin: "auto"
    },
    demo: {
        backgroundColor: theme.palette.background.paper
    },
    title: {
        margin: theme.spacing(4, 0, 2)
    },
    alert: {
        fontSize: "1.5rem",
        justifyContent: "center",
        alignItems: "center"
    }
}));


const ListaCanciones = ({ mySongs, setMySongs }) => {
    const classes = useStyles();

    const deleteSong = id => {
        let songs = mySongs.filter((el, index) => index !== id);
        setMySongs(songs);
        localStorage.setItem("mySongs", JSON.stringify(songs));
    };

    return (
        <div className={classes.root}>
            <div className={classes.demo}>
                {mySongs.length === 0 ? (
                    <Alert severity="error" className={classes.alert}>
                        No tienes canciones guardadas
                    </Alert>
                ) : (
                    <List>
                        {mySongs.map((el, index) => (
                            <ListItem key={index}>
                                <ListItemAvatar>
                                    <Avatar alt={el.artist} src={el.avatar} />
                                </ListItemAvatar>
                                <ListItemText primary={el.song} secondary={el.artist} />
                                <ListItemSecondaryAction>
                                    <IconButton
                                        edge="end"
                                        component={Link}
                                        to={`/cancion/${index}`}
                                    >
                                        <Launch />
                                    </IconButton>
                                    <Dialog id={index} deleteSong={deleteSong} />
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
                )}
            </div>
        </div>
    );
}

export default ListaCanciones
