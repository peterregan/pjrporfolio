import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core";
import "../stylesheets/About.css";

/* body text paragraph for this page*/
const aboutparaText = `My name is Peter Regan and here is a little about myself. 
I am currently a Junior at Hobart and William Smith Colleges 
studying to obtain a B.S. in computer Science coupled with 
complementary Mathematics and Physics Minors.
I am currently seeking job opportunities involing software engineering,
web design, machine learning, and or data science.`;

/* inline jsx styles for page*/
const styles = {
  root: {
    flexGrow: 1,
    height: "100vh", // make root div size of whole page
    display: "flex"
  },
  grid: {},
  gridleft: {
    backgroundColor: "white" // color
  },
  gridright: {
    backgroundColor: "white" // color
  }
};

class About extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={0} className={classes.grid}>
          <Grid item xs={6} className={classes.gridleft}>
            <div className="aboutdivleft">
              <img
                src={require("../images/aboutmepic.jpg")}
                alt="aboutme"
                className="aboutimg"
              />
            </div>
          </Grid>
          <Grid item xs={6} className={classes.gridright}>
            <div className="aboutdivright">
              <h1 className="aboutheader"> About Me </h1>
              <p className="aboutpara">{aboutparaText}</p>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(About);
