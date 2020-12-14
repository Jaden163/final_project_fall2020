import React, { useState, useEffet, useEffect } from "react";

import HeroSection from "../components/HeroSection";

function Home() {
  const [sampleAPIData, setSampleAPIData] = useState([]);

  return (
    <main className="Home">
      <HeroSection />
    </main>
  );
}

// export allows function to be used somewhere else
export default Home;
