import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';

const Header = () => {
    return (
        <AppBar position="relative">
          <Toolbar>
            <Link to='/'>
              <Typography variant="h6" color="inherit" noWrap>
                StorYtEl
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
    )
}

export default Header;