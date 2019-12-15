import React from "react";
import Grid from "@material-ui/core/Grid";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import { withStyles } from "@material-ui/core";
import IconLink from "./IconLink";
const styles = {
  root: {
    display: "flex", // display
    textAlign: "center",
    color: "white",
    margin: "10%"
  },
  grid: {
    backgroundColor: "white", //color
    padding: "4%", // margins, padding, borders
    borderRadius: "25px",
    borderStyle: "solid",
    borderColor: "black",
    margin: "auto",

    fontSize: "24px", // text/color
    align: "center" // alignment
  },
  gridleft: {
    backgroundColor: "red"
  },
  gridright: {
    backgroundColor: "blue",
    color: "black"
  }
};

class Contact extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={0} className={classes.grid}>
          <Grid item xs={4} className={classes.gridleft}>
            <div>
              <h1 className="leftheader">Peter Regan</h1>
              <img
                src={require("../images/aboutmepic.jpg")}
                className="aboutimg"
              />
            </div>
          </Grid>
          <Grid item xs={8} className={classes.gridright}>
            <div>
              <h1 className="rightheader">Contact Me</h1>
              <h2 className="dots">. . . . . .</h2>
              <ul className="contacts">
                <li>
                  <PhoneIcon />
                </li>
                <li>
                  <PhoneIcon />
                </li>
                <li>
                  <EmailIcon />
                </li>
                <li>
                  <EmailIcon />
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Contact);
