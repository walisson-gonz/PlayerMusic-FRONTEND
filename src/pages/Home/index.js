import React from 'react';
import { makeStyles } from '@material-ui/core';
import Header from '../../components/Header';
//import Ad from './components/Ad';
import SideBar from '../../components/SideBar';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    toolbar: {
        minHeight: 85,
    }
})

function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <div className={classes.toolbar}></div>
            <SideBar />

        </div>
    )
}

export default Home;