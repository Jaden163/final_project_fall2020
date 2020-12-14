import React from "react";

function LogInForm({ LogInFunction }) {
  return (
    <main className="LogIn_Page_Wrapper">
      <div className="LogIn_Form_Wrapper">
        <div className="LogIn_Form_Container">
          <p className="LogIn_Form_Title">
            <span className="Color">Welcome</span> Back
          </p>
          <form className="LogIn_Form" onSubmit={(e) => LogInFunction(e)}>
            <div className="LogIn_Form_Div">
              <input
                className="LogIn_Form_Input"
                type="email"
                name="email"
                placeholder="Email"
                required="require"
              />
            </div>

            <div className="LogIn_Form_Div">
              <input
                className="LogIn_Form_Input"
                type="password"
                name="password"
                placeholder="Password"
                required="require"
              />
            </div>

            <div className="LogIn_Form_Div">
              <input
                type="submit"
                value="Log In"
                className="LogIn_Form_Button"
              ></input>
            </div>
          </form>

          <div className="LogIn_Form_Seperator">
            <span className="LogIn_Form_TextInSeperator">or</span>
          </div>

          <div className="LogIn_Form_Div">
            <a href="/signup" className="LogIn_Form_Anchor_Button">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LogInForm;
