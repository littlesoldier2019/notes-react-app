import React from 'react';
import useStyles from './useStyles';
import Typography from '@material-ui/core/Typography';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <a href="https://github.com/littlesoldier2019">
        littlesoldier2019
        </a>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const Footer = (props) => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
                Helmi Nguyen
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                A project for learning purpose. For more projects, please checkout my Github
            </Typography>
            <Copyright />
        </footer>
    )
}

export default Footer;