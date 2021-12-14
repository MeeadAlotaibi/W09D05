import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { reset } from "../../reducers/auth";
import axios from "axios";
import "./style.css";

/////////////////////////////////////////////////////////

function ForgotPassword() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [sendEmail, setSendEmail] = useState(false);
  const [message, setMessage] = useState(false);

  /////////////////////////////////////////////////////////

  const forgotPassword = async () => {
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/forgotPassword`,
        {
          email,
        }
      );
      // console.log(res.data.token);
      dispatch(reset(res.data.token));
      setSendEmail(true);
    } catch (error) {
      console.log(error);
      setMessage(true);
    }
  };

  /////////////////////////////////////////////////////////
  return (
    <>
      <div className="forget">
        {sendEmail ? (
          "Email have been sent"
        ) : (
          <>
            {message ? "enter your email" : ""}
            <input
              className="email2"
              type="email"
              placeholder="enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="forgetBtn " onClick={forgotPassword}>
              Send email
            </button>
          </>
        )}
      </div>
    </>
  );
}
export default ForgotPassword;
