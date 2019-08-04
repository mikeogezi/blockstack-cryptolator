export default class BlockStackUtils {
  static async isSignedInOrPending (that) {
    const session = that.userSession;

    if (session.isUserSignedIn()) {
      console.log('User Signed In');
      return true;
    }
    else if (!session.isUserSignedIn() && session.isSignInPending()) {
      console.log('User Sign In Pending');
      const userData = await session.handlePendingSignIn();
      console.log('User Data', userData);
      return false;
    }
    else {
      return false;
    }
  }
}