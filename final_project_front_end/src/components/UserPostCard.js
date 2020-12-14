import React from "react";
import UserReplyCard from "../components/UserReplyCard";

// passed down from another component (ArticleListing)
function UserPostCard({ postData }) {
  console.log(postData);
  return (
    <div className="UserPostCard">
      <p className="PostContent">{postData.content}</p>
      {postData.replies.map((reply, i) => (
        <UserReplyCard key={i} replyData={reply} /> // unique key for each article component
      ))}
    </div>
  );
}

export default UserPostCard;
