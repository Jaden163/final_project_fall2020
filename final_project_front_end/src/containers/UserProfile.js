import React from "react";
import PostForm from "../components/PostForm";
import UserPostLising from "../components/UserPostListing";

function UserProfile({ userInfo }) {
  return (
    <main className="UserProfile">
      <div className="UserProfile_Wrapper">
        <PostForm userInfo={userInfo} />
        <UserPostLising />
      </div>
    </main>
  );
}

// export allows function to be used somewhere else
export default UserProfile;
