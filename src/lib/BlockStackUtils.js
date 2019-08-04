export default class BlockStackUtils {
  static isSignedInOrPending (that) {
    const session = that.userSession;

    if (session.isUserSignedIn()) {
      console.log('User Signed In');
      return true;
    }
    else if (!session.isUserSignedIn() && session.isSignInPending()) {
      console.log('User Sign In Pending');
      session.handlePendingSignIn()
        .then(user => console.log('User Data', user))
        .catch(err => console.error(err))
      return false;
    }
    else {
      return false;
    }
  }
}