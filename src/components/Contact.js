import React from "react";
import Grid from "@material-ui/core/Grid";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import { withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import "../stylesheets/Contact.css";

/*styles */
const styles = {
  root: {
    display: "flex", // display
    margin: "5%"
  },
  grid: {
    backgroundColor: "white", //color
    borderRadius: "25px",
    borderStyle: "solid",
    borderColor: "#2ebf91",
    margin: "auto",
    fontSize: "24px", // text/color
    align: "center" // alignment
  },
  gridleft: {},
  gridright: {}
};

/* contact page */
class Contact extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={0} className={classes.grid}>
          <Grid item xs={4} className={classes.gridleft}>
            <div className="leftdiv">
              <h1 className="leftheader">Peter Regan</h1>
              <img
                className="contactimg"
                src={require("../images/contactpic.jpg")}
                alt="contact"
              />
            </div>
          </Grid>
          <Grid item xs={8} className={classes.gridright}>
            <div className="rightdiv">
              <div className="rightheaderdiv">
                <h1 className="rightheader">Contact Me</h1>
                <h2 className="dots">. . . . . .</h2>
              </div>
              <ul className="contacts">
                <li>
                  <PhoneIcon style={{ fontSize: "50px" }} />
                  <Typography
                    style={{ padding: "25px", fontWeight: "bold" }}
                    variant="h5"
                  >
                    Cell: (703) - 586 - 8548
                  </Typography>
                </li>
                <li>
                  <PhoneIcon style={{ fontSize: "50px" }} />
                  <Typography
                    style={{ padding: "25px", fontWeight: "bold" }}
                    variant="h5"
                  >
                    Home: (703) - 221 - 1933
                  </Typography>
                </li>
                <li>
                  <EmailIcon style={{ fontSize: "50px" }} />
                  <Typography
                    style={{ padding: "25px", fontWeight: "bold" }}
                    variant="h5"
                  >
                    School Email: peter.regan @ hws.edu
                  </Typography>
                </li>
                <li>
                  <EmailIcon style={{ fontSize: "50px" }} />
                  <Typography
                    style={{ padding: "25px", fontWeight: "bold" }}
                    variant="h5"
                  >
                    General Email: pjr79wlc @ gmail.com
                  </Typography>
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
