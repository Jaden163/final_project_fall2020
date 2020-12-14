import React from "react";

function DiscoverForm({
  discoverPost,
  discoverPostID,
  ReplyMessage,
  RejectMessage,
}) {
  return (
    <main className="Discover_Page_Wrapper">
      <div className="Discover_Form_Wrapper">
        <div className="Discover_Form_Container">
          <form className="Discover_Form" onSubmit={(e) => ReplyMessage(e)}>
            <p className="Discover_Content">{discoverPost.content}</p>
            <textarea
              className="Discover_Form_Content"
              name="replyContent"
              placeholder="Share your thoughts..."
            ></textarea>
            <input
              type="submit"
              value="Reply"
              name="reply"
              className="Reply_Post_Form_Button"
            ></input>
          </form>
          <form className="Discover_Form" onSubmit={(e) => RejectMessage(e)}>
            <input
              type="submit"
              value="Release Bottle"
              name="reject"
              className="Reply_Reject_Form_Button"
            ></input>
          </form>
        </div>
      </div>
    </main>
  );
}

export default DiscoverForm;
