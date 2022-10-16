// import App from "./App.js"
// const moogose = require('mongoose');
// const mongurl = 'mongodb+srv://undecidable:hacker2022@cluster0.g6jbwxd.mongodb.net/test';
// moogose.connect(mongurl, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   }).then(() => {
//     console.log('Connected to MongoDB');
//   }).catch((err) => {
//     console.log('Error connecting to MongoDB', err);
//   });
  
//   require("./components/common/Login.jsx");
  
//   const User = moogose.model("UserInfo");
//   App.post('./login', async(req, res) => {
//     const { name, password } = req.body;
//     try {
//       const user = await User.create({ name, password });
//       res.send({ status : "ok" });
//       } catch (err) {
//         res.send({ status: 'Login failed' });
//       }
//   });
// const userSchema = new moogose.Schema({
//     name: String,
//     //email: String,
//     password: String,
// }, 
// { 
//     collection: "UserInfo"
// });

// module.exports = moogose.model('UserInfo', userSchema);

import React, { Component } from "react";

export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        this.setState({ userData: data.data });
      });
  }
  render() {
    return (
      <div>
        Name<h1>{this.state.userData.fname}</h1>
        Email <h1>{this.state.userData.email}</h1>
      </div>
    );
  }
}