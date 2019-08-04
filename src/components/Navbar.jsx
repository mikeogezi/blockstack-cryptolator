import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {
  Apps,
  OpenInNew,
  ExitToApp
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { APP_NAME } from '../constants/appInfo';
import { connect } from 'react-redux';

import { UserSession } from 'blockstack';

class Navbar extends React.Component {
  constructor (props) {
    super(props);
    
    this.userSession = new UserSession();
  }

  _renderSignInOrLogOut = (classes) => {
    if (this.userSession.isUserSignedIn()) {
      return (
        <Button color="inherit">
          <Link className={classes.iconLink} to="/log-out/">
            <ExitToApp className={classes.iconInButton} />
          </Link>
          <Link className={classes.link} to="/log-out/">
            Log Out
          </Link>
        </Button>
      )
    }

    return (
      <Button color="inherit">
        <Link className={classes.iconLink} to="/sign-in/">
          <OpenInNew className={classes.iconInButton} />
        </Link>
        <Link className={classes.link} to="/sign-in/">
          Sign In
        </Link>
      </Button>
    )
  }

  render () {
    const { classes } = this.props;

    console.log('Signed In', this.userSession.isUserSignedIn());

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <Link className={classes.link} to="/">{APP_NAME}</Link>
            </Typography>
            <Button color="inherit">
              <Link className={classes.iconLink} to="/app/">
                <Apps className={classes.iconInButton} />
              </Link>
              <Link className={classes.link} to="/app/">
                App
              </Link>
            </Button>
            { this._renderSignInOrLogOut(classes) }
          </Toolbar>
        </AppBar>
      </div>
    );
  }
};

const styles = (theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#2A7FFF'
  },
  iconInButton: {
    marginRight: theme.spacing(1),
  },
  link: {
    textDecoration: 'none',
    color: 'white'
  },
  iconLink: {
    marginBottom: theme.spacing(-0.5),
    textDecoration: 'none',
    color: 'white'
  }
}));

const mapStateToProps = state => {
  return { signedIn: state.signedIn };
};

export default connect(mapStateToProps)(withStyles(styles)(Navbar));