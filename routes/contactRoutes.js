const router = require("express").Router();

router.post("/", async (req, res) => {
  try {
    res.json({
      success: true,
      message: "Contact saved successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;