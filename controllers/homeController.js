const connection = require("../config/database");
const {
  getAllUsers,
  updateUserById,
  getUserById,
  deleteUserById,
} = require("../services/CRUDService");

const User = require("../models/user");

const getHomePage = async (req, res) => {
  let results = await User.find({});
  return res.render("homepage.ejs", { listUsers: results });
};



const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  await User.create({
    email,
    name,
    city,
  });

  res.send("Create user success");
};

const getCreatePage = (req, res) => {
  res.render("createuser.ejs");
};

const getUpdatePage = async (req, res) => {
  const userID = req.params.id;
  // let user = await getUserById(userID);
  let user = await User.findById(userID);
  res.render("edit.ejs", { userEdit: user });
};

const postUpdateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  let userId = req.body.userId;
  // await updateUserById(email, city, name, userId);
  await User.updateOne(
    { _id: userId },
    { name: name, email: email, city: city }
  );
  res.redirect("/");
};

const postDeleteUser = async (req, res) => {
  const userID = req.params.id;
  let user = await User.findById(userID);
  res.render("delete.ejs", { userEdit: user });
};

const postHandleRemoveUser = async (req, res) => {
  const id = req.body.userId;
  await User.deleteOne({ _id: id });
  res.redirect("/");
};
module.exports = {
  getHomePage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser,
};
