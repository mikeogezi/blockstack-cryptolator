import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import { 
  Typography,
  Button,
  Box,
  Grid
} from '@material-ui/core';

import Header from './Header';
import { Link } from 'react-router-dom';
import { APP_NAME } from '../constants/appInfo';

import { connect } from 'react-redux';
import { 
  signIn,
  logOut
} from '../actions/index';
import store from '../store/index';

import BlockstackUtils from '../lib/BlockstackUtils';

class SignIn extends React.Component {
  _onClick = async () => {
    BlockstackUtils.signIn('/bictionary/app/');
  }

  render () {
    const { classes } = this.props;

    return (
      <Box align="center">
        <Header>Sign In</Header>
        <Button align="center" onClick={e => this._onClick(e)} size="large" className={classes.button} variant="contained" color="primary">
          <Typography variant="button">
            Sign In With Blockstack
          </Typography>
        </Button>
      </Box>
    )
  }
}

const styles = (theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  container: {
    display: 'flex',
    flexGrow: 1,
    flexWrap: 'wrap',
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

const mapStateToProps = state => ({ 
  signedIn: state.signedIn,
  user: state.user
});

export default connect(mapStateToProps)(withStyles(styles)(SignIn));