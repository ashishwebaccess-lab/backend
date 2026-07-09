const router = require("express").Router();
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;



  if (
    email === "ashishsony@gmail.com" &&
    password === "310805"
  ) {
    const token = jwt.sign(
      { email },
      process.env.JWT_SECRET
    );

    return res.json({ token });
  }

  res.status(401).json({
    message: "Invalid Credentials",
  });
});

module.exports = router;