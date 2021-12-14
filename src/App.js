import React from "react";
import { Routes, Route } from "react-router-dom";
import Pages from "./components/Pages";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Posts from "./components/Posts";
import Nav from "./components/Nav";
import Google from "./components/Google";
import ForgotPassword from "./components/ForgetPassword";
import ResetPassword from "./components/ResetPassword";
import Activate from "./components/Activate";

/////////////////////////////////////////////////////////

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Pages />} />
        <Route exact path="/Signin" element={<Signin />} />
        <Route exact path="/ResetPassword" element={<ResetPassword />} />
        <Route exact path="/forgotPassword" element={<ForgotPassword />} />
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path="/activate" element={<Activate />} />
        <Route exact path="/Google" element={<Google />} />
        <Route exact path="/Dashboard" element={<Dashboard />} />
        <Route exact path="/Posts" element={<Posts />} />
        {/* <Route exact path="/Post" element={<Post />} /> */}
      </Routes>
    </>
  );
}
export default App;
