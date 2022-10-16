import React from 'react'
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap'
import { BrowserRouter, Link } from "react-router-dom";
// import MongoDB from 'mongodb';
// import { UserInfo } from '/src/userinfo.ts';
import './Login.css'
// import { Dashboard } from 'components/commons/pages'
import { Component } from 'react';

// function Login() {
//     this.state = {
//         username: '',
//         password: '',
//     };

//     handleSubmit = (e) => {
//         e.preventDefault();
//         const { username, password } = this.state;
//         console.log(username);
//         fetch("http://localhost:3000/login", {
//             method: "POST",
//             crossDomain: true,
//             headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json",
//                 "Access-Control-Allow-Origin": "*",
//                 },
//                 body: JSON.stringify({
//                     username: username,
//                     password: password,
//                 }),
//             }).then((response) => response.json())
//             .then((data) => {
//                 console.log(data);
//             });
//         };
//     return (
//         <>
//             <Form className="login">
//                 <Form.Group>
//                     <Form.Label className="title">Welcome</Form.Label>
//                 </Form.Group>
//                 <Form.Group>
//                     <Form.Label className="title-desc">Get started</Form.Label>
//                 </Form.Group>
//                 <Form.Group className="mt-5">
//                     <Form.Control placeholder="username" className="field" >
//                         <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
//                     </Form.Control>
//                 </Form.Group>
//                 <Form.Group className="mt-5">
//                     <Form.Control type="password" placeholder="password" className="field"></Form.Control>
//                 </Form.Group>
//                 <Form.Group className="mt-2">
//                     <button className="button-submit">LOSN</button>
//                 </Form.Group>
//                 <Form.Group className="mt-2">
//                    <a href="/" className="create-account">Create a New Account</a>
//                 </Form.Group>
//             </Form>
//         </>     
//     )
//     }

// export default Login;

//const mongo = require('mongodb');
//const mongurl = 'mongodb+srv://undecidable:hacker2022@cluster0.g6jbwxd.mongodb.net/test';
//mongo.connect(mongurl, {
//    useNewUrlParser: true,
//    useUnifiedTopology: true
//}).then(() => {
//    console.log('Connected to MongoDB');
//}).catch((err) => {
//    console.log('Error connecting to MongoDB', err);
//});

//const User = mongo.model("UserInfo");
//App.post('./login', async(req, res) => {
//    const { name, password } = req.body;
//    try {
//    const user = await User.create({ name, password });
//    res.send({ status : "ok" });
//    } catch (err) {
//        res.send({ status: 'Login failed' });
//    }
//});
//const userSchema = new mongo.Schema({
//    name: String,
//    password: String,
//}, 
//{
//    collection: "UserInfo"
//});

//module.exports = mongo.model('UserInfo', userSchema);

export default class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        password: "",
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
      e.preventDefault();
      const { username, password } = this.state;
      console.log(username, password);
      fetch("http://localhost:3000/login", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
            username,
            password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status == "ok") {
            alert("login successful");
            window.localStorage.setItem("token", data.data);
            window.location.href = "./userDetails";
          }
        });
    }
    render() {
      return (

        <Form className="login">
            <Form.Group>
                <Form.Label className="login-title">Sign in</Form.Label>
            </Form.Group>
            <Form.Group>
                <Form.Label className="login-text">Email</Form.Label>
                <Form.Control></Form.Control>
            </Form.Group>
            <Form.Group className="mt-3">
                <Form.Label className="login-text">Password</Form.Label>
                <Form.Control></Form.Control>
            </Form.Group>
            <Form.Group className="mt-4">
               <input type="file" className="login-button" />
            </Form.Group>
            <Form.Group className="mt-2">
                <Form.Label className="login-desc">Create a new account</Form.Label>
            </Form.Group>   
        </Form>

      );
    }
  }