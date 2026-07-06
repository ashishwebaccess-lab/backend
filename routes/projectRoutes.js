const router =
  require("express").Router();

const upload = require(
  "../middleware/Upload"
);

const {
  uploadProject,
  getProjects,
  deleteProject,
} = require(
  "../controllers/projectController"
);

router.post(
  "/upload",
  upload.single("media"),
  uploadProject
);
router.delete(
  "/:id",
  deleteProject
);
router.get("/", getProjects);

router.delete("/:id", deleteProject);

module.exports = router;