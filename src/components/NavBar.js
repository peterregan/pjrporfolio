import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";



// styles for the navbar
const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: 'rgba(0,0,0,.7)',
        color: 'white',
        display: 'flex',
    },
    toolbar: {
    },
    title: {
        whiteSpace: 'nowrap'
    },
    buttons: {
        width: '100%',
        textAlign: 'right',
        whiteSpace: 'nowrap',
    }


}));

// export the NavBar component to be used elsewhere
export default function Navbar(props){

    // create all the buttons for the navbar
    let buttons = props.buttons.map((button) => (
        <Button href={button.link} color='inherit'>{button.name}</Button>
    ))

    // implement UI styles
    const classes = useStyles();
    return(<div >
            <AppBar className={classes.root} position = 'static'>
                <Toolbar className={classes.toolbar}>
                    <Typography variant = 'h6' className={classes.title}>
                        {props.title}
                    </Typography>
                    <div className={classes.buttons}>
                    {buttons}
                    </div>
                </Toolbar>
            </AppBar>
        </div>

    );
}
