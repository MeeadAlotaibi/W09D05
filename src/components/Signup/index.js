import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { active } from "../../reducers/auth";
import Google from "../Google";
import axios from "axios";
import "./style.css";

/////////////////////////////////////////////////////////

function Signup() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(false);

  /////////////////////////////////////////////////////////

  const signup = async () => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/signup`, {
        email,
        username,
        password,
      });
      console.log(res.data);
      dispatch(active(res.data.token));
      // console.log(data);
    } catch (error) {
      console.log(error);
      console.log(error.response.data.message);
      setMessage(error.response.data.message);
    }
  };

  /////////////////////////////////////////////////////////

  return (
    <>
      <div className="signup">
        <div>
          <input
            className="email"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <input
            className="username"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <input
            className="password"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="btn">
          <button className="btnSignup " onClick={signup}>
            Sign up
          </button>
        </div>

        {message}
        <Google />
        <p>
          Already have an account?{" "}
          <span>
            <Link to="/Signin">Sign in</Link>
          </span>
        </p>
      </div>
    </>
  );
}
export default Signup;
