const Project = require("../models/project");
const aqp = require("api-query-params");
const Task = require("../models/task");

const createProjectService = async (data) => {
  if (data.type === "EMPTY-PROJECT") {
    let result = await Project.create(data);
    return result;
  }
  if (data.type === "ADD-USERS") {
    console.log("check data:", data);
    let myProject = await Project.findById(data.projectId).exec();
    for (let i = 0; i < data.userArr.length; i++) {
      myProject.userInfo.push(data.userArr[i]);
    }
    let newResult = await myProject.save();
    console.log(myProject);

    return newResult;
  }

  if (data.type === "ADD-TASKS") {
    console.log("check data:", data);
    let myProject = await Project.findById(data.projectId).exec();
    for (let i = 0; i < data.taskArr.length; i++) {
      myProject.tasks.push(data.taskArr[i]);
    }
    let newResult = await myProject.save();
    console.log(myProject);

    return newResult;
  }

  if (data.type === "REMOVE-USERS") {
    let myProject = await Project.findById(data.projectId).exec();
    for (let i = 0; i < data.userArr.length; i++) {
      myProject.userInfo.pull(data.userArr[i]);
    }
    let result = await myProject.save();
    return result;
  }
  return null;
};

const getAllProjectService = async (queryString) => {
  const { filter, limit, population } = aqp(queryString);
  const page = queryString.page;
  let offset = (page - 1) * limit;
  delete filter.page;
  result = await Project.find(filter)
    .populate(population)
    .skip(offset)
    .limit(limit)
    .exec();
  return result;
};

const updateAProjectService = async (data) => {
  try {
    let project = await Project.updateOne(
      { _id: data.id },
      { name: data.name, endDate: data.endDate, description: data.description }
    );
    console.log(project);
    return project;
  } catch (error) {
    return null;
  }
};

const deleteAProjectService = async (data) => {
  try {
    let result = await Project.deleteOne({ _id: data.id });
    return result;
  } catch (error) {
    return null;
  }
};
module.exports = {
  createProjectService,
  getAllProjectService,
  updateAProjectService,
  deleteAProjectService,
};
