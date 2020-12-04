import React from "react";
import SignUpForm from "../components/SignUpForm";

function SignUp({ SignUpFunction }) {
  return (
    <main className="SignUp">
      <SignUpForm SignUpFunction={SignUpFunction} />
    </main>
  );
}

// export allows function to be used somewhere else
export default SignUp;
