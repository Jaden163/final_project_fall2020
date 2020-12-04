import React, { useState, useEffet, useEffect } from "react";
import axios from "axios";

import HeroSection from "../components/HeroSection";

function Home() {
  const [sampleAPIData, setSampleAPIData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000`)
      .then(function (response) {
        setSampleAPIData(response.data);
      })
      .catch(function (error) {
        console.log("error", error);
      });
  }, []);

  console.log({ sampleAPIData });

  return (
    <main className="Home">
      <HeroSection />
    </main>
  );
}

// export allows function to be used somewhere else
export default Home;
