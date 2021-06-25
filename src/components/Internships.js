import React from "react";

export default function Interships({ message }) {
  return (
    <>
      <h3 className="command">{message}</h3>
      <p className="obj-start"></p>
      <div className="left-margin">
        <p className="key-value">
          "company": <span className="yellow">"Karma Labs"</span>
        </p>
        <p className="key-value">
          "location": <span className="yellow">"Remote"</span>
        </p>
        <p className="key-value">
          "skills":{" "}
          <span className="yellow">["JavaScript", "HTML", "CSS"]</span>
        </p>
        <p className="key-value">
          "role": <span className="yellow">"Development Intern"</span>
        </p>
        <p className="key-value">
          "timeline": <span className="yellow">"Jan 2018- Mar 2018"</span>
        </p>
      </div>
      <p className="obj-end">,</p>
      <p className="obj-start"></p>
      <div className="left-margin">
        <p className="key-value">
          "company": <span className="yellow">"IFFCO"</span>
        </p>
        <p className="key-value">
          "location": <span className="yellow">"Aonla, Uttar Pradesh"</span>
        </p>
        <p className="key-value">
          "skills": <span className="yellow">["Internet of Things"]</span>
        </p>
        <p className="key-value">
          "role": <span className="yellow">"Summer Intern"</span>
        </p>
        <p className="key-value">
          "timeline": <span className="yellow">"Jun 2018- Jul 2018"</span>
        </p>
      </div>
      <p className="obj-end"></p>
    </>
  );
}
