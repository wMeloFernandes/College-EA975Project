const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    jwt.verify(token, "BV3WdFPNddaTPcDigHWgGJLGCLHBn4p9");
    next();
  } catch (error) {
    res.status(401).json({ message: "Authentication failed!" });
  }
};
