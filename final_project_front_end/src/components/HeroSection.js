import React from "react";

function HeroSection() {
  return (
    <main className="HeroSection">
      <div className="HeroSection_Left">
        <div className="HeroSection_Left_Title">
          <p className="HeroSection_Left_Title_Content Color">Message</p>
          <p className="HeroSection_Left_Title_Content">in a bottle</p>
        </div>

        <div className="HeroSection_Left_Details">
          <p className="HeroSection_Left_Details_Content">
            Life is full of waves
          </p>
          <p className="HeroSection_Left_Details_Content">
            Let your emotions <span className="Color">flow</span>{" "}
          </p>
        </div>

        <div>
          <a href="/signup" class="Anchor_Button">
            Sign Up
          </a>
        </div>
      </div>
      <div className="HeroSection_Right">Animated Picture???</div>
    </main>
  );
}

export default HeroSection;
