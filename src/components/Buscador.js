import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { TextField } from '@mui/material'
import { IconButton } from '@mui/material';
import { Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';
import Letra from './Letra';



const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& >*": {
            width: "auto",
        }
    }
}))

const Buscador = ({ search, setSearch, setError }) => {
    const classes = useStyles();

    const handleSubmit = event => {
        event.preventDefault();
        
             setSearch({
                artist: event.target.artist.value,
                song: event.target.song.value,
                request: true
            })
       
    };

    const handletReset = event => {
        setSearch({
            artist: "",
            song: "",
            request: false
        });
        setError(false);
    };

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            Validate
            autoComplete="on"
            onSubmit={handleSubmit}
            onReset={handletReset}
        >
            <div className={classes.root}>
                <IconButton type="reset" color="primary">
                    <HomeIcon fontSize="large" />
                </IconButton>

                <TextField id="artist" name="artist" label="Artista" variant="outlined" size="small" required validate value={search.artist} onChange={e => { setSearch({ ...search, artist: e.target.value, request: false }) }} />
                <TextField id="song" name="song" label="Canción" variant="outlined" size="small" required validate value={search.song} onChange={e => { setSearch({ ...search, song: e.target.value, request: false }) }} />
                <IconButton variant="contained" type="submit" color="primary">
                    <SearchIcon fontSize="large" />
                </IconButton>
            </div>
        </Box >
    )
}

export default Buscador;