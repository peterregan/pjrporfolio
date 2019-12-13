import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import Grid from '@material-ui/core/Grid';
import {withStyles} from "@material-ui/core";
import IconLink from "./IconLink";
import Avatar from "@material-ui/core/Avatar";


{/* styles */}
const styles = {
    root:{
        marginLeft: '18%', // margins, padding, borders
        marginRight: '18%',
        marginTop: '3%',
        marginBottom: '3%',

        display: 'flex', // display

        textAlign: 'center',
        textDecorationColor: 'white',
        color: 'white'
    },
    grid:{
        backgroundColor: 'rgba(0,0,0,.7)', //color

        padding: '4%', // margins, padding, borders
        borderRadius: '25px',
        margin: 'auto',

        fontSize: '24px', // text/color

        align: 'center', // alignment


    },
    bigAvatar:{
        marginLeft: 'auto', // margins, padding, borders
        marginRight: 'auto',

        width: '150px', // size
        height: '150px',

    },
    links: {
        fontSize: '50px', // text/color
    },

};

// Home Page
class Home extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid  className={classes.grid}>
                    <Grid item xs={12}>
                        <Avatar src={require('../images/peterpropic.jpg')} alt="Peter" className={classes.bigAvatar}/>
                        <h1>Peter Regan</h1>
                        <h2>Aspiring Software Engineer</h2>
                        <h1>. . . . . . . . . . . . . . . . . . . . . . . . .</h1>
                        <h2>Java | Javascript | React | Python | R</h2>

            {/*social links*/}
            <div className={classes.links}>
                {/*Linked in*/}
                <IconLink link="https://www.linkedin.com/in/peter-regan-590886162/" icon={<LinkedInIcon className={classes.links}/>}/>
                {/*Instagram*/}
                <IconLink link="https://www.instagram.com/pregan14/" icon={<InstagramIcon className={classes.links}/>}/>
                {/*Git Hub*/}
                <IconLink link="https://github.com/peterregan" icon={<GitHubIcon className={classes.links}/>} />
                {/*Facebook*/}
                <IconLink link="https://www.facebook.com/peter.regan.3511" icon={<FacebookIcon className={classes.links}/>}/>
            </div>
                </Grid>
                </Grid>
            </div>
        )
    }

}

export default withStyles(styles)(Home);