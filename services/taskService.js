const Task = require("../models/task");
const aqp = require("api-query-params");

const createTaskService = async (data) => {
  if (data.type === "EMPTY-TASK") {
    let result = await Task.create(data);
    return result;
  }
};

const getAllTaskService = async (queryString) => {
  const { filter, limit } = aqp(queryString);
  const page = queryString.page;
  let offset = (page - 1) * limit;
  delete filter.page;
  let result = await Task.find(filter).skip(offset).limit(limit).exec();
  return result;
};

const updateATaskService = async (data) => {
  try {
    let result = await Task.updateOne(
      { _id: data.id },
      {
        ...data,
      }
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};

const deleteATaskService = async (data) => {
  try {
    let result = await Task.deleteOne({ _id: data.id });
    return result;
  } catch (error) {
    return null;
  }
};

module.exports = {
  createTaskService,
  getAllTaskService,
  updateATaskService,
  deleteATaskService,
};
