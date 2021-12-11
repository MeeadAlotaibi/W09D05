import React from "react";
import { Routes, Route } from "react-router-dom";
import Pages from "./components/Pages";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
// import Tasks from "./components/Tasks";
import Google from "./components/Google";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Pages />} />
        <Route exact path="/Signin" element={<Signin />} />
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path="/Google" element={<Google />} />
        <Route exact path="/Dashboard" element={<Dashboard />} />
        {/* <Route exact path="/Task" element={<Task />} /> */}
      </Routes>
    </>
  );
}

export default App;
