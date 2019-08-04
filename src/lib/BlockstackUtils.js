import {
  AppConfig,
  UserSession
} from 'blockstack';

export default class BlockstackUtils {
  static init (that) {
    that.appConfig = new AppConfig();
    that.userSession = new UserSession();
  }

  static isSignedIn (that) {
    return that.userSession.isUserSignedIn();
  }

  static signIn (that, redirectURI) {
    if (!that.userSession) {
      BlockstackUtils.init(that);
    }
    that.userSession.redirectToSignIn(redirectURI || '/');
  }

  static logOut (that) {
    if (!that.userSession) {
      BlockstackUtils.init(that);
    }
    that.userSession.signUserOut();
  }
}