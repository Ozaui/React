import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const BASE_URL = "http://localhost:3005";

function App() {
  //Get
  const getAllUsers = async () => {
    const response = await axios.get(`${BASE_URL}/users`);
    console.log(response.data);
  };
  const getUserById = async (userId) => {
    const response = await axios.get(`${BASE_URL}/users/${userId}`);
    console.log(response.data);
  };

  //Post
  const createUser = async (newUser) => {
    axios.post(`${BASE_URL}/users`, newUser);
  };

  //Update
  const updateUser = async (userId, updatedUser) => {
    await axios.put(`${BASE_URL}/users/${userId}`, updatedUser);
  };

  //Delete
  const deletUserById = async (userId) => {
    const deletedUser = await axios.delete(`${BASE_URL}/users/${userId}`);
    console.log(deletedUser.data);
  };

  useEffect(() => {
    //get
    // getAllUsers();
    // getUserById(1);

    //post
    // const newUser = {
    //   username: "username(test)",
    //   password: "Password(test)",
    // };
    // createUser(newUser);

    //update/put
    // updateUser("ee9e", {
    //   username: "uptaded name2(test)",
    //   password: "updated password2(test)",
    // });

    //delete
    deletUserById(`3`);
  }, []);
  return <></>;
}

export default App;
