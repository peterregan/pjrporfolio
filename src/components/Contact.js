import React from 'react';
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core";
const styles = {
    root: {
        display: "flex", // display
    
        textAlign: "center",
        textDecorationColor: "white",
        color: "white"
      },
      grid: {
        backgroundColor: "white", //color
        padding: "4%", // margins, padding, borders
        borderRadius: "25px",
        margin: "auto",
    
        fontSize: "24px", // text/color
    
        align: "center" // alignment
      },


};









class Contact extends React.Component {
render() {
      const { classes } = this.props;
      return (
        <div className={classes.root}>
          <Grid container spacing={0} className={classes.grid}>
            <Grid item xs={4} className={classes.gridleft}>
            </Grid>
            <Grid item xs={8} className={classes.gridright}>
            </Grid>
          </Grid>
        </div>
      );
    }
  }
  
  export default withStyles(styles)(Contact);
  