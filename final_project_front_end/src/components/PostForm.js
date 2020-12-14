import React from "react";

function PostForm({ userInfo }) {
  return (
    <main className="Post_Form_Wrapper">
      <form className="Post_Form">
        <textarea
          className="Post_Form_Content"
          name="content"
          placeholder="Let your thoughts flow..."
        ></textarea>
        <div className="Post_Form_Div">
          <input
            type="submit"
            value="Send"
            className="Post_Form_Button"
          ></input>
        </div>
      </form>
    </main>
  );
}

export default PostForm;
