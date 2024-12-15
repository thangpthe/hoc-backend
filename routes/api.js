const express = require("express");
const routerAPI = express.Router();
const {
  getUsersAPI,
  postCreateUserAPI,
  putUpdateUserAPI,
  deleteUserAPI,
  postUploadSingleFileApi,
  postUploadMultipleFileApi,
} = require("../controllers/apiController");
const {
  postCreateCustomer,
  postCreateArrayCustomer,
  getAllCustomers,
  putUpdateCustomer,
  deleteACustomer,
  deleteArrayCustomer,
} = require("../controllers/customerController");
const { postCreateProject, getAllProject,updateAProject,deleteAProject } = require("../controllers/projectController");
const { postCreateTask, getAllTask, updateATask, deleteATask } = require("../controllers/taskController");
// API user
routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", postCreateUserAPI);
routerAPI.put("/users", putUpdateUserAPI);
routerAPI.delete("/users", deleteUserAPI);

// API customer
routerAPI.post("/customers", postCreateCustomer);
routerAPI.post("/customers-many", postCreateArrayCustomer);
routerAPI.get("/customers", getAllCustomers);
routerAPI.put("/customers", putUpdateCustomer);
routerAPI.delete("/customers", deleteACustomer);
routerAPI.delete("/customers-many", deleteArrayCustomer);
// API file
routerAPI.post("/file", postUploadSingleFileApi);
routerAPI.post("/files", postUploadMultipleFileApi);

//API project
routerAPI.post("/projects",postCreateProject);
routerAPI.get("/projects",getAllProject);
routerAPI.put("/projects",updateAProject);
routerAPI.delete("/projects",deleteAProject);

routerAPI.post("/tasks",postCreateTask);
routerAPI.get("/tasks",getAllTask);
routerAPI.put("/tasks",updateATask);
routerAPI.delete("/tasks",deleteATask);

routerAPI.get("/info", (req, res) => {
  return res.status(200).json({
    data: req.query,
  });
});


routerAPI.get("/info/:name/:address", (req, res) => {
  return res.status(200).json({
    data: req.params,
  });
});

module.exports = routerAPI;
