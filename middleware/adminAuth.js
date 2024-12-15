import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.json({ success: false, message: "Not authorized" });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (decodedToken !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({ success: false, message: "Not authorized" });
    }

    /* if the token is matching with admin email and password, then proceed to the next endpoint */
    next();
  } catch (error) {
    console.log("error in adminAuth middleware", error.message);
    res.json({ success: false, message: error.message });
  }
};

export default adminAuth;
