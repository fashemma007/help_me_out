const { User } = require('../models');

/**
 * User's endpoint controllers
 */
class UserControllers {
  // GET USER PROFILE
  static async getUserProfile(req, res) {
    const userId = req.user.id;
    const user = await User.findOne({ where: { id: userId } });

    try {
      const {
        id,
        orgId,
        firstName,
        lastName,
        profilePic,
        email,
        phone,
        lunchCreditBalance,
        bankNumber,
        bankCode,
        bankName,
        bankRegion,
        currency,
        currencyCode,
        isAdmin,
      } = user;
      if (user) {
        res.json({
          id,
          orgId,
          firstName,
          lastName,
          profilePic,
          email,
          isAdmin,
          phone,
          lunchCreditBalance,
          bankNumber,
          bankCode,
          bankName,
          bankRegion,
          currency,
          currencyCode,
        });
      } else {
        res.status(404);
        throw new Error('User not found');
      }
    } catch {
      res.status(400);
      throw new Error('Invalid / expired user token. Please login!!!');
    }
  }
}

module.exports = UserControllers;
