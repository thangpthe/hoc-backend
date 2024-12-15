const {
  createProjectService,
  getAllProjectService,
  updateAProjectService,
  deleteAProjectService,
} = require("../services/projectService");

const postCreateProject = async (req, res) => {
  let project = await createProjectService(req.body);
  console.log("check prj:", project);
  return res.status(200).json({
    EC: 0,
    data: project,
  });
};

const getAllProject = async (req, res) => {
  let project = await getAllProjectService(req.query);
  return res.status(200).json({
    EC: 0,
    data: project,
  });
};

const updateAProject = async (req, res) => {
  let result = await updateAProjectService(req.body);
  console.log(result);
  return res.status(200).json({
    EC: 0,
    data: result,
  });
};

const deleteAProject = async (req, res) => {
  let result = await deleteAProjectService(req.body);
  return res.status(200).json({
    EC: 0,
    data: result,
  });
};
module.exports = {
  postCreateProject,
  getAllProject,
  updateAProject,
  deleteAProject,
};
