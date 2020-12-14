import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";

import UserPostCard from "../components/UserPostCard";

function UserPostListing({ uid }) {
  const [userPosts, setUserPosts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/fetch?uid=${uid}`)
      .then(function (response) {
        // get request to URL
        setUserPosts(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        // error handle
        console.warn(error);
      });
  }, []);

  if (loading) return null;

  return (
    <main className="UserPostListing">
      {userPosts.map((post, i) => (
        <UserPostCard key={i} postData={post} /> // unique key for each article component
      ))}
    </main>
  );
}

// export allows function to be used somewhere else
export default UserPostListing;
