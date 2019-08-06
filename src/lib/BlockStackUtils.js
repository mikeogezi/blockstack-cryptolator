import { UserSession } from 'blockstack';

export default class BlockStackUtils {
  static init (that) {
    that.userSession = new UserSession();
  }

  static isSignedInOrPending (that) {
    const session = that.userSession;

    if (session.isUserSignedIn()) {
      console.log('User Signed In');
      return true;
    }
    else if (!session.isUserSignedIn() && session.isSignInPending()) {
      console.log('User Sign In Pending');
      session.handlePendingSignIn()
        .then(user => console.log('User Data', user));
      
      return true;
    }
    else {
      return false;
    }
  }

  static signIn (that) {
    if (!that.userSession) {
      BlockStackUtils.init(that);
    }
    const origin = window.location.origin;
    that.userSession.redirectToSignIn(`${origin}/app/`);
  }

  static logOut (that) {
    if (!that.userSession) {
      BlockStackUtils.init(that);
    }
    that.userSession.signUserOut('/');
  }
}