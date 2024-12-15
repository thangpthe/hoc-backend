const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const projectSchema = new mongoose.Schema({
  name: String,
  startDate: String,
  endDate: String,
  description: String,
});

const taskSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    usersInfo: userSchema,
    projectInfo: projectSchema,
    status: String,
    startDate: String,
    endDate: String,
  },
  {
    timestamps: true,
  }
);
taskSchema.plugin(mongoose_delete, { overrideMethods: "all" });
const Task = mongoose.model("task", taskSchema);

module.exports = Task;
