import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <>
    
{/*     
    <h3>
      I am a
    </h3>   */}
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "A quick Learner",
          "Tech Enthuiast",
          "Gamer",
          "Traveller"
         
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
    </>
  );
}

export default Type;
