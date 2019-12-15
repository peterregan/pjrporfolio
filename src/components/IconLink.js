import React from "react";
import { withStyles } from "@material-ui/core";
import Link from "@material-ui/core/Link";

/* inline jsx styles for components*/
const styles = {
  link: {
    color: "white",
    paddingLeft: "25px",
    paddingRight: "25px"
  }
};

/* An Icon Link which takes in an a link and icon as properties.*/
class IconLink extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Link className={classes.link} href={this.props.link}>
        {this.props.icon}
      </Link>
    );
  }
}

export default withStyles(styles)(IconLink);
