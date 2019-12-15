import React from "react";
import { withStyles } from '@material-ui/core/';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";



// styles for the navbar
const styles = {
    root: {
        backgroundColor: 'black',
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


}




// export the NavBar component to be used elsewhere
class NavBar extends React.Component {

    render() {
    // implement UI styles
    const { classes } = this.props;
    let buttons = this.props.buttons.map((button) => (<Button href={button.link} color='inherit'>{button.name}</Button>));
                // create all the buttons for the navbar
    return(
    <div >
            <AppBar className={classes.root} position = 'static'>
                <Toolbar className={classes.toolbar}>
                    <Typography variant = 'h6' className={classes.title}>
                        {this.props.noTitle ?  '': this.props.title}
                    </Typography>
                    <div className={classes.buttons}>
                    {buttons}
                    </div>
                </Toolbar>
            </AppBar>
        </div>

    );
}
}
export default withStyles(styles)(NavBar);
