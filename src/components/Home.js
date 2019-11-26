import React from 'react';
import Link from '@material-ui/core/Link'
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import {withStyles} from "@material-ui/core";


const styles = {
    root:{
        display: 'flex',
        justifyContent: 'center',
    },
    body:{

    },
    links: {
        marginTop: '200px',
        display: 'flex',
        justifyContent: 'space-between',
        width: '25%',
    },

};

class Home extends React.Component {

    render() {
        const { classes } = this.props;
        return (
        // implement UI styles

            <div className={classes.root}>
                <h1>Home</h1>
            <body className={classes.body}>
            <h2 >Aspiring Software Engineer</h2>


            {/*social links*/}
            <div className={classes.links}>
                {/*Linked in*/}
                <Link href="https://www.linkedin.com/in/peter-regan-590886162/">
                    <LinkedInIcon/>
                </Link>
                {/*Instagram*/}
                <Link href="https://www.instagram.com/pregan14/">
                    <InstagramIcon/>
                </Link>
                {/*Git Hub*/}
                <Link href="https://github.com/peterregan">
                    <GitHubIcon/>
                </Link>
                {/*Facebook*/}
                <Link href="https://www.facebook.com/peter.regan.3511">
                    <FacebookIcon/>
                </Link>
            </div>
            </body></div>
        )
    }

}

export default withStyles(styles)(Home);