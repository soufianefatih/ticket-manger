const jwt = require("jsonwebtoken");

exports.virifylogin =  function (req, res, next) {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send("Acess Denied");
  }
  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) {
      res.json({ success: false, message: "Failed to authenticate token " });
    } else {
      req.user = user;
      next();
    }
  });
};
