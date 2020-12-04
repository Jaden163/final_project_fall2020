import React from "react";
import LogInForm from "../components/LogInForm";

function LogIn({ LogInFunction }) {
  return (
    <main className="LogIn">
      <LogInForm LogInFunction={LogInFunction} />
    </main>
  );
}

// export allows function to be used somewhere else
export default LogIn;
