import React from 'react';

import { makeStyles } from '@material-ui/core';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Avatar } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles ({
    appBar: {
        boxShadow: 'none'
    },
    img: {
        maxHeight: 40,
    },
    grow: {
        flexGrow: 1,
    },
    userSection: {
        display: 'flex',
        alignItems: 'center',
    },
    mr: {
        marginRight: 10,
    },
});

function Header() {
    const classes = useStyles();

    return (
        <AppBar position="fixed" color='primary'>
            <Toolbar>
                <img src="/images/deezer-logo-.png" alt="logo" className={classes.img} />

                <div className={classes.grow}></div>

                <div className={classes.userSection}>
                    <Button variant="contained" color="secondary" className={classes.mr}>
                        Flow
                    </Button>
                    <Avatar alt="Gonz" src="" />
                </div>

            </Toolbar>
        </AppBar>
    )
}

export default Header;