import React from 'react';
import { makeStyles } from '@material-ui/core';
import Header from './components/Header';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column'
    }
})

function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
        </div>
    )
}

export default Home;