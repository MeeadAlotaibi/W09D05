import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Pages from "../Pages";
import { IoHeartSharp, IoHeartOutline } from "react-icons/io5";
import axios from "axios";
import "./style.css";
import img from "./../Img/images.png";

/////////////////////////////////////////////////////////

function Posts() {
  let navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("");
  const [desc, setDesc] = useState("");
  const [isLiked, setIsLiked] = useState("like");

  /////////////////////////////////////////////////////////

  useEffect(() => {
    getPosts();
  }, []);
  /////////////////////////////////////////////////////////

  const state = useSelector((state) => {
    return {
      sign: state.sign, //state.sign.token
    };
  });
  console.log(state, "staate");
  console.log(posts);

  /////////////////////////////////////////////////////////

  const getPosts = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/`, {
        headers: { Authorization: `Bearer ${state.sign.token}` },
      });
      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  /////////////////////////////////////////////////////////

  const createPost = async () => {
    console.log("desc", desc);
    console.log(state.sign.token);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/newpost`,
        { desc },
        {
          headers: { Authorization: `Bearer ${state.sign.token}` },
        }
      );
      getPosts();
    } catch (error) {
      console.log(error);
    }
  };
  /////////////////////////////////////////////////////////

  const like = async (id) => {
    console.log(id);
    const result = await axios.put(
      `${process.env.REACT_APP_BASE_URL}/likes/`,
      { by: state.sign.id, onPost: id },
      {
        headers: {
          Authorization: `Bearer ${state.sign.token}`,
        },
      }
    );
    if (isLiked == "like") setIsLiked("unlike");
    else {
      setIsLiked("like");
    }
    getPosts();
  };
  /////////////////////////////////////////////////////////

  const deletee = async (id) => {
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/deletePost/${id}`,
        {
          headers: { Authorization: `Bearer ${state.sign.token}` },
        }
      );
    } catch (error) {
      console.log(error);
    }
    getPosts();
  };

  /////////////////////////////////////////////////////////


  return (
    <>
      
      <>
        <div className="post">
          <h1> Write tweet:</h1>
          <textarea
            className="text"
            rows="2"
            cols="30"
            onChange={(e) => setDesc(e.target.value)}
          />
          <button calssName="btnTweet" onClick={createPost}>
            send
          </button>
        </div>

        {/* <label>Choose Photo </label>
        <input type="file" name="post" onChange={handleChange} />
        <img src={url} alt="firebase" />
        <progress value={progress} max="100" /> */}
        {/* <button onClick={createPost}>Post</button> */}
      </>
      {posts.map((item) => (
        <div key={item._id} className="continner">
          <div className="userP">
            <img src={img} alt="img" className="proifleImg" />
            <h4>{item.user.userName}</h4>
            <div className="tweet">
              <h4>{item.desc}</h4>
              <button className="likes" onClick={() => like(item._id)}>
                {isLiked}
              </button>
              <button onClick={() => deletee(item._id)}> delete </button>
            </div>

            {/* <img src={item.img} alt="img" /> */}
            {/* <button onClick={() => deleteUsers(item._id)}>Delete</button> */}
          </div>

          {/* <hr /> */}
        </div>
      ))}
    </>
  );
}

export default Posts;
