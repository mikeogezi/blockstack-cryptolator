import { UserSession, AppConfig } from 'blockstack';

export default class BlockStackUtils {
  static init (that) {
    const appConfig = new AppConfig(['store_write', 'publish_data']);
    that.userSession = new UserSession({ appConfig });
  }

  static isSignedInOrPending (that) {
    return true;
    // const session = that.userSession;

    // if (session.isUserSignedIn()) {
    //   console.log('User Signed In');
    //   return true;
    // }
    // else if (!session.isUserSignedIn() && session.isSignInPending()) {
    //   console.log('User Sign In Pending');
    //   session.handlePendingSignIn()
    //     .then(user => console.log('User Data', user));
      
    //   return true;
    // }
    // else {
    //   return false;
    // }
  }

  static signIn (that) {
    BlockStackUtils._assertInit(that);
    const origin = window.location.origin;
    that.userSession.redirectToSignIn(`${origin}/app/`);
  }

  static _assertInit (that) {
    if (!that.userSession) {
      BlockStackUtils.init(that);
    }
  }

  static logOut (that) {
    BlockStackUtils._assertInit(that);
    that.userSession.signUserOut('/');
  }
}