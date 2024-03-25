import { useEffect, useState } from "react";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";
import { client } from "../client";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  // fetching user's details
  useEffect(() => {
    if (user && user.access_token) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          // console.log(res.data);
          localStorage.setItem("@shareme_user", JSON.stringify(res.data));
          const doc = {
            // document for the newly logged in user
            _id: res.data.id,
            _type: "user",
            userName: res.data.name,
            image: res.data.picture,
          };

          // create new user document in sanity CMS
          client.createIfNotExists(doc).then(() => {
            navigate("/", { replace: true });
          });
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"></video>
        {/* Google Button and Logo Container */}
        <div className="absolute flex flex-col justify-center items-center inset-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} alt="logo" width="130px" />
          </div>
          {/* Google Button Container */}
          <div className="shadow-2xl">
            {/* Google Login button */}
            <button
              type="button"
              className="bg-mainColor flex justify-center items-center py-2 px-3 rounded-lg cursor-pointer outline-none"
              onClick={() => login()}>
              <FcGoogle className="mr-4" /> Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;

/*
// google sign in button
<GoogleLogin onSuccess={responseGoogle} onError={responseGoogle} />

// The useGoogleLogin API allows us to sign in to Google with a custom button. That is if we don’t want to use the GoogleLogin button that @react-oauth/google provides

// to view logged in user
<div>
  <img src={profile.picture} alt="user image" />
  <h3>User Logged in</h3>
  <p>Name: {profile.name}</p>
  <p>Email Address: {profile.email}</p>
  <br />
  <br />
  <button onClick={logOut}>Log out</button>
</div>
*/
