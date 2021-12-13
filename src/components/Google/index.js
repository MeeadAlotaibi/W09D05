import React from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";

function Google() {
  const responseSuccessGoogle = async (response) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/googleSignin`,
        {
          token: response.tokenId,
        }
      );
      console.log("Google signin success", res);
    } catch (error) {
      console.log(error);
    }
  };

  const responseErrorGoogle = (response) => {
    console.log("Somthing went wrong!");
  };

  return (
    <>
      <h1>Signin with Google</h1>
      <GoogleLogin
        clientId="1035985780644-dbl3vrpva42vql7lr6aqn3l1u425pil6.apps.googleusercontent.com"
        buttonText="Signin with Google"
        onSuccess={responseSuccessGoogle}
        onFailure={responseErrorGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </>
  );
}

export default Google;
