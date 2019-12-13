import React from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles} from "@material-ui/core";
import AboutText from '../textbodies/AboutText';

{/* styles */}
const styles = {
    root: {
        backgroundColor: 'red',
        height: '100%',
        width: '100%'
    },
    grid: {
        marginTop: '3%',
    },
    gridleft: {


    },
    gridright: {
        backgroundColor: 'blue',
        color: 'white',

    },
    image: {
        marginLeft: '10%',
        width: '400px',
        height: '500px',
    }
};

class About extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={3} className={classes.grid}>
                    <Grid item xs={5} className={classes.gridleft}>
                        <img src={require('../images/peterpropic.jpg')} alt="Peter" className={classes.image} />
                    </Grid>
                    <Grid item xs={7} className={classes.gridright}>
                        <h1>Welcome!</h1>
                        <h2>My name is Peter</h2>
                        <body>{AboutText}</body>
                    </Grid>
                </Grid>
            </div>
        )
    }

}

export default withStyles(styles)(About);
