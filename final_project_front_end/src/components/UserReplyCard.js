import React from "react";

// passed down from another component (ArticleListing)
function UserReplyCard({ replyData }) {
  return (
    <div className="UserReplyCard">
      <p className="ReplyContent">{replyData}</p>
    </div>
  );
}

export default UserReplyCard;
