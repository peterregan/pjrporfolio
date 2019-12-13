import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import Grid from '@material-ui/core/Grid';
import {withStyles} from "@material-ui/core";
import IconLink from "./IconLink";
import Avatar from "@material-ui/core/Avatar";


const styles = {
    root:{
        marginTop: '3%',
        marginLeft: '20%',
        marginRight: '20%',
        display: 'flex',
        textAlign: 'center',
        textDecorationColor: 'white',
        color: 'white'
    },
    grid:{
        padding: '2%',
        backgroundColor: 'rgba(0,0,0,.75)',
        fontSize: '24px',
        align: 'center',
        margin: 'auto',
        borderRadius: '25px',
    },
    bigAvatar:{
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '150px',
        height: '150px',

    },
    links: {
        fontSize: '50px',
    },

};

class Home extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={0} className={classes.grid}>
                    <Grid item xs={12}>

                        <Avatar src={require('../images/peterpropic.jpg')} alt="Peter" className={classes.bigAvatar}/>
                        <h1>Peter Regan</h1>
                        <h2>Aspiring Software Engineer</h2>
                        <h1>. . . . . . . . . . . . . . . . . . . . . . . . .</h1>
                        <h2>| Java | Javascript | React | Python | R |</h2>

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