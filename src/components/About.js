import React from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles} from "@material-ui/core";
import '../stylesheets/About.css'

{/* styles */}
const styles = {
    root: {
        flexGrow: 1,
        height: '100vh',
        display: 'flex'
    },
    grid: {
        color: 'black',
        backgroundColor: 'white'
    },
    gridleft: {
        backgroundColor: 'white'

    },
    gridright: {
        backgroundColor: 'white'
    },
};

class About extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={0} className={classes.grid}>
                    <Grid item xs={5} className={classes.gridleft}>
                        <img src={require('../images/peterpropic.jpg')} alt="Peter" className="aboutimg" />
                    </Grid>
                    <Grid item xs={7} className={classes.gridright}>
                        <div className="aboutdiv">
                            <h1 className="aboutheader">Hello !</h1>
                            <h2 className="aboutsubheader"> My name is Peter</h2>
                        <p className="aboutpara">
                                Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                                dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                                Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
                                sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
                        </p>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }

}

export default withStyles(styles)(About);
