import React from "react";

function HeroSection() {
  return (
    <div className="HeroSection">
      <div className="HeroSection_Left">
        <div className="HeroSection_Left_Title">
          <p className="HeroSection_Left_Title_Content">Just Start</p>
          <p className="HeroSection_Left_Title_Content Color">Chatting</p>
        </div>

        <div className="HeroSection_Left_Details">
          <p className="HeroSection_Left_Details_Content">
            No photos, no pressure
          </p>
          <p className="HeroSection_Left_Details_Content">
            Just <span className="Color">your</span> hobbies and{" "}
            <span className="Color">you</span>
          </p>
        </div>

        <div>
          <a href="/signup" class="Anchor_Button">
            Sign Up
          </a>
        </div>
      </div>
      <div className="HeroSection_Right">Animated Picture???</div>
    </div>
  );
}

export default HeroSection;
