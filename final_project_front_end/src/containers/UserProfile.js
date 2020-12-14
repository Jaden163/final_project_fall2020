import React from "react";
import axios from "axios";
import PostForm from "../components/PostForm";
import UserPostLising from "../components/UserPostListing";

function UserProfile({ userInfo }) {
  function PostMessage(e) {
    // stop form from submitting as normal
    e.preventDefault();
    const content = e.currentTarget.content.value;
    const uid = userInfo.uid;
    axios
      .get(`http://localhost:4000/post?uid=${uid}&content=${content}`)
      .then(function (response) {
        // get request to URL
      })
      .catch(function (error) {
        // error handle
        console.warn(error);
      });

    window.location.reload();
  }

  return (
    <main className="UserProfile">
      <div className="UserProfile_Wrapper">
        <PostForm userInfo={userInfo} PostMessage={PostMessage} />
        <UserPostLising uid={userInfo.uid} />
      </div>
    </main>
  );
}

// export allows function to be used somewhere else
export default UserProfile;
