import React from "react";
import Typewriter from "typewriter-effect";
function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "MERN Stack Developer",
          "Ex-SRIP Intern @IIT Gandhinagar",
          "Software Developer",
          "Agentic AI Developer",
          "Open Source Contributor",
          "Puzzle Game Developer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
      }}
    />
  );
}

export default Type;
