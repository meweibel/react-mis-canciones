import React from 'react'
import { makeStyles } from '@mui/styles'
import { Card, CardActions, CardContent, CardMedia} from '@mui/material'
import { Button } from '@mui/material'
import { Typography } from '@mui/material'
import { AddCircle } from '@mui/icons-material'

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
    addBtn: {
      justifyContent: "flex-end"
    }
  });

   
  const Letra = ({
    currentSong,
    setCurrentSong,
    mySongs,
    setMySongs,
    setSearch
  }) => {
    const classes = useStyles();
  
    const handleClick = e => {
      console.log(mySongs, currentSong);
      setMySongs(mySongs => [...mySongs, currentSong]);
      setSearch({
        artist: "",
        song: "",
        request: false
      });
      setCurrentSong({});
    };
  
    return (
      <Card className={classes.root}>
        <CardMedia
          className={classes.media} 
          image={currentSong.avatar}
          title={currentSong.artist}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            component="h2"
            className={classes.title}
          >
            {currentSong.artist} - {currentSong.song}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.lyrics}
          >
            {currentSong.lyrics}
          </Typography>
        </CardContent>
        <CardActions className={classes.addBtn}>
          <Button size="large" color="primary" onClick={handleClick}>
            <AddCircle />
            Agregar
          </Button>
        </CardActions>
      </Card>
    );
  };
  
  export default Letra;