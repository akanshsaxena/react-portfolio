import React, { useState, useEffect } from "react";
import Loader from "./Loader";
export default function Help() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <div className="answer-div basic-details">
          <h3 className="command">akansh -help</h3>
          <p>
            Usage: akansh [-options] <br />
            where [-options] includes:
          </p>
          <div className="left-margin">
            <p>-intro</p>
            <p>-skills</p>
            <p>-projects</p>
            <p>-internships</p>
            <p>-work-experience</p>
            <p>-education</p>
            <p>-contact</p>
            <p>-clearall</p>
            <p>-help</p>
          </div>
          <p>Example: akansh -contact {"       "}to get the contact details</p>
        </div>
      )}
    </>
  );
}
