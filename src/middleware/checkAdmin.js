import { StatusCodes } from "http-status-codes";
const checkBoth = (req, res, next) => {
  try {
    if (
      req.user &&
      (req.user.role.role === "SUPER-ADMIN" || req.user.role.role === "ADMIN")
    ) {
      next();
    } else {
      throw new Error();
    }
  } catch (err) {
    res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ success: false, message: "unAuthorized" });
  }
};

export default checkBoth;
