import React, { useState, useEffect } from "react";
import Loader from "./Loader";
export default function BasicInfo({ delay }) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, delay);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <div className="answer-div basic-details">
          <h3 className="command">akansh -intro</h3>
          <p>
            Hi, I am Akansh Saxena, a 23 year old{" "}
            <span className="yellow">Frontend developer enthusiast.</span>I
            love exploring the field of Frontend developement and having basic root level Backend information. I am
            passionate learner and is looking for a position where I can apply
            my skills.
          </p>
        </div>
      )}
    </>
  );
}
