const Project = require("../models/Project");

const fs = require("fs");
const path = require("path");


exports.deleteProject = async (
  req,
  res
) => {
  try {
    const project =
      await Project.findById(
        req.params.id
      );

    if (!project) {
      return res.status(404).json({
        message:
          "Project not found",
      });
    }

    const filePath = path.join(
      __dirname,
      "..",
      "uploads",
      project.mediaUrl
    );

    if (
      fs.existsSync(filePath)
    ) {
      fs.unlinkSync(filePath);
    }

    await Project.findByIdAndDelete(
      req.params.id
    );

    res.json({
      success: true,
      message:
        "Project deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.uploadProject = async (req, res) => {
  try {
    console.log(req.body); // Debug

    const project = await Project.create({
      title: req.body.title,
      category: req.body.category,

      mediaType: req.file.mimetype.includes("video")
        ? "video"
        : "image",

      mediaUrl: req.file.filename,
    });

    res.status(201).json(project);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
exports.getProjects = async (
  req,
  res
) => {
  try {
    const projects =
      await Project.find().sort({
        createdAt: -1,
      });

    res.json(projects);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};