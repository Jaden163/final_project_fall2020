import React from "react";

function SignUpForm({ SignUpFunction }) {
  return (
    <div className="SignUp_Page_Wrapper">
      <div className="SignUp_Form_Wrapper">
        <div className="SignUp_Form_Container">
          <p className="SignUp_Form_Title">
            Join the <span className="Color">Chat</span>
          </p>
          <form className="SignUp_Form" onSubmit={(e) => SignUpFunction(e)}>
            <div className="SignUp_Form_Div">
              <input
                className="SignUp_Form_Input"
                type="email"
                name="email"
                placeholder="Email"
                required="require"
              />
            </div>

            <div className="SignUp_Form_Div">
              <input
                className="SignUp_Form_Input"
                type="password"
                name="password"
                placeholder="Password"
                required="require"
              />
            </div>

            <div className="SignUp_Form_Div">
              <input
                type="submit"
                value="Sign Up"
                className="SignUp_Form_Button"
              ></input>
            </div>
          </form>

          <div className="SignUp_Form_Seperator">
            <span className="SignUp_Form_TextInSeperator">or</span>
          </div>

          <div className="SignUp_Form_Div">
            <a href="/login" className="SignUp_Form_Anchor_Button">
              Log In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
