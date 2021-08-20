import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { ButtonGroup } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import MusicNoteIcon from '@material-ui/icons/MusicNote';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        //height: '86vh',
        position: 'fixed',
        textAlign: 'center',
    },
    vh: {
        display: 'block',
        height: '86vh',
    },
    linhas: {
        boxShadow: 'none',
        padding: theme.spacing(2),
    },
    mr: {
        marginBottom: 10
    },
    textMr: {
        margin: 0,
        marginLeft: 16,
    }
}));

function SideBar() {
    const classes = useStyles();

    return (
        <div>
            <Grid md={2} container className={classes.root}>
                <Box >
                    <p>A perseverança nunca me abandona.</p>
                    <p>Gostou do projeto?</p>
                    <Button
                        variant='outlined'
                        color='primary'>
                        Veja outros
                    </Button>
                </Box>

                <Box
                    display="flex"
                    alignItems="flex-end"
                    m={1}
                    p={1} >
                    <ButtonGroup
                        variant='contained'
                        color='secondary'
                        orientation='vertical'
                        size='large'
                        fullWidth='true'
                    >
                        <Button className={classes.mr}>
                            <MusicNoteIcon /> <p className={classes.textMr}>Músicas</p>
                        </Button>
                        <Button className={classes.mr}>
                            <FavoriteIcon /><p className={classes.textMr}>Favoritos</p>
                        </Button>
                        <Button className={classes.mr}>
                            <ClearAllIcon /><p className={classes.textMr}>Explorar</p>
                        </Button>
                        <Button className={classes.mr}>
                            <LibraryMusicIcon /><p className={classes.textMr}>Playlists</p>
                        </Button>
                    </ButtonGroup>

                </Box>
            </Grid>
        </div>
    )
}

export default SideBar;