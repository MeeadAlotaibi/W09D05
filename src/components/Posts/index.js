import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
const BASE_URL = "http://localhost:5000"; //"https://project2-tuwaiq.herokuapp.com";

function Posts() {
  const [post, setPost] = useState([]);
  let navigate = useNavigate(); //// ...استخدمها اذا ابيه ينتقل من مكان الى آخر
const state = useSelector((state) => {
  return {
    sign: state.sign,
  };
});
console.log(state.sign.token);
  /////////////////// وظيفة اليوزإفكت تعطيه أمر بأنهاول مايدخل الصفحة يعرض لي هذي البيانات
  useEffect(() => {
    getAllpost(); /// تروح تستدعي الداله اللي جابت البيانات في الباك إند
  }, []);

  /////////////////// تروح تجيب البيانات من الباك اند
  const getAllpost = async () => {
    const post = await axios.get(
      `${BASE_URL}/`,
      {
        headers: {
          Authorization: `Bearer ${state.sign.token}`,
        },
      } 
    );
    console.log(post.data); ///////// <=== عشان نشوف الداتا في الكونسول ونتاكد انها وصلت لنا !!
    setPost(post.data); //////// <===وتخزنهم في هذا المتغير  وتتغير الكلتشر بدال ماهي ارراي فاضية تصير تحتوي على هذه البيانات
  };

  /////////////////////////////////////////////////////////////////////////////////////////

  const goInside = (id) => {
    /////// بعدين اقول له روح ادخل على هذا العنصر و اعطيته الباث تبعه
    console.log(id);
    navigate(`/culture/${id}`);
  };

  return (
    /////// هنا يعرض لي ع البراوزر
    <div className="allCluture">
      {/* <img className="backImg1" src={Cult} alt="backImg" /> */}
      <h1 className="text1">Time line</h1>

      {post.map((elem) => {
        
        return (
          <>
            <div
              onClick={() => {
                goInside(elem._id);
              }}
              className="oneCluture"
            >
              {/* <img className="immm" src={elem.img} alt="culture" /> */}
              <h5 className="cultureName"> {elem.desc} </h5>
            </div>
          </>
        );
      })}
    </div>
  );
}
export default Posts;
