import React from 'react'
import Header from './Header';
import { connect } from 'react-redux';
import { 
  signIn,
  logOut
} from "../actions/index";
import store from '../store/index';
import { Box } from '@material-ui/core';
import BlockstackUtils from '../lib/BlockstackUtils';

class LogOut extends React.Component {
  componentWillMount () {
    BlockstackUtils.signOut();
  }

  render () {
    return (
      <Box>
        <Header>Logging Out...</Header>
      </Box>
    );
  }
};

const mapStateToProps = state => ({
  signedIn: state.signedIn,
  user: state.user
});

export default connect(mapStateToProps)(LogOut);