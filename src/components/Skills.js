import React from "react";

export default function Skills({ message }) {
  return (
    <>
      <h3 className="command">{message}</h3>
      <p className="yellow">
        ["ReactJS", "NodeJS", "JavaScript", "Express", "MongoDB", "Redux",
        "React Router", "HTML", "CSS", "SCSS"]
      </p>
    </>
  );
}
