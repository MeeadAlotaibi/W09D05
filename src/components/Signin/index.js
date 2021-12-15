import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../reducers/sign";
import Google from "../Google";
import axios from "axios";
import "./style.css";

/////////////////////////////////////////////////////////

function Signin() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [emailORusername, setEmailORusername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  /////////////////////////////////////////////////////////

  const state = useSelector((state) => {
    return {
      sign: state.sign,
    };
  });
  // console.log(state.sign, "hhhhhhiiiiiiiiiii :(( I'm dying ....");

  /////////////////////////////////////////////////////////

  const signin = async () => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/signin`, {
        email: emailORusername,
        password,
      });
      // console.log(res , "hhhhhhiiiiiiiiiii :(( ...." );
      const data = {
        id: res.data.result._id,
        role: res.data.result.role.role,
        token: res.data.token,
      };
      dispatch(login(data));
      if (res.data.result.role.role === "admin") {
        navigate(`/Dashboard`);
      } else {
        navigate(`/Posts`);
      }
    } catch (error) {
      console.log(error);
      // console.log(error.response.data);
      setMessage(error.response.data);
    }
  };

  /////////////////////////////////////////////////////////

  return (
    <>
      <div className="signin">
        {state.sign.token ? (
          <>
            <input
              className="email1"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmailORusername(e.target.value)}
            />
            <input
              className="password1"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btnSignup" onClick={signin}>
              Sign in
            </button>
            {/* {message} */}
            {/* <Google /> */}
            <Link to="/ForgotPassword">
              <p> forgot password?</p>{" "}
            </Link>
            <p>
              Don't have an account?{" "}
              <span>
                <Link to="/Signup">Sign up</Link>
              </span>
              
            </p>
          </>
        ) : (
          <>
            {state.sign.role === "admin" ? (
            <Link to="/Dashboard">
              <buttoun>Dashboard</buttoun>
            </Link>
          ) : (
            <Link to="/Posts">
              <buttoun>Posts</buttoun>
            </Link>
          )}
          </>
        )}
      </div>
    </>
  );
}

export default Signin;
