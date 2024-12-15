const {
  createTaskService,
  getAllTaskService,
  updateATaskService,
  deleteATaskService,
} = require("../services/taskService");

const postCreateTask = async (req, res) => {
  let task = await createTaskService(req.body);
  return res.status(200).json({
    EC: 0,
    data: task,
  });
};

const getAllTask = async (req, res) => {
  let task = await getAllTaskService(req.query);
  return res.status(200).json({
    EC: 0,
    data: task,
  });
};

const updateATask = async (req, res) => {
  let task = await updateATaskService(req.body);
  return res.status(200).json({
    EC: 0,
    data: task,
  });
};

const deleteATask = async (req, res) => {
  let result = await deleteATaskService(req.body);
  return res.status(200).json({
    EC: 0,
    data: result,
  });
};

module.exports = {
  postCreateTask,
  getAllTask,
  updateATask,
  deleteATask,
};
