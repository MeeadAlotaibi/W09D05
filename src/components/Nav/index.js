import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import logo from "./../../images/Vision.png";
import { ImBookmarks } from "react-icons/im";
import "./style.css";
/////////////////////////////////////////////////////////

const Nav = () => {
  let navigate = useNavigate();

  /////////////////////////////////////////////////////////

  function logout() {
    navigate(`/`);
    localStorage.removeItem("userId");
    window.location.reload(false);
  }
  /////////////////////////////////////////////////////////

  function hide() {
    window.location.reload(false); /// reload(true)
  }
  /////////////////////////////////////////////////////////
  return (
    <div className="containerNav">
      <ul className="ulNav">
        <li className="lii">
          <h4>
            {localStorage.getItem("userId") ? (
              <Link
                className="linkk"
                to="/"
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </Link>
            ) : (
              ""
            )}
          </h4>
        </li>

        <li className="lii">
          <h4 className="icon">
            {localStorage.getItem("userId") ? (
              <Link
                className="linkk"
                to="/bookMark"
                onChange={() => {
                  hide();
                }}
              >
                <ImBookmarks />
              </Link>
            ) : (
              ""
            )}
          </h4>
        </li>
        <li className="lii">
          <h4>
            {localStorage.getItem("userId") ? (
              <Link
                className="linkk"
                to="/profile"
                onChange={() => {
                  hide();
                }}
              >
                Profile
              </Link>
            ) : (
              ""
            )}
          </h4>
        </li>
        <li className="lii">
          <h4>
            <Link id="firstli" className="linkk" to="/">
              Home
            </Link>
          </h4>
        </li>
      </ul>
      <div>{/* <img className="logoImg" src={logo} alt="logoImg" /> */}</div>
    </div>
  );
};

export default Nav;
