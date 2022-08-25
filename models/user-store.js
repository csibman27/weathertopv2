"use strict";

const _ = require("lodash");
const JsonStore = require("./json-store");

const userStore = {
  store: new JsonStore("./models/user-store.json", { users: [] }),
  collection: "users",

  getAllUsers() {
    return this.store.findAll(this.collection);
  },

  addUser(user) {
    this.store.add(this.collection, user);
    this.store.save();
  },
  
  updateUser(user, updatedUser) {
    //getting information from the edituser form that data gets sent from the controller to here, we run a check to make sure that if a field is left blank
    // it will maintain the previous value there, this wont work if the field was left blank when registering a user
    user.firstName =
      updatedUser.firstName === "" ? user.firstName : updatedUser.firstName;
    user.lastName =
      updatedUser.lastName === "" ? user.lastName : updatedUser.lastName;
    user.email = updatedUser.email === "" ? user.email : updatedUser.email;
    user.password =
      updatedUser.password === "" ? user.password : updatedUser.password;
    this.store.save();
  },

  getUserById(id) {
    return this.store.findOneBy(this.collection, { id: id });
  },

  getUserByEmail(email) {
    return this.store.findOneBy(this.collection, { email: email });
  }
};

module.exports = userStore;