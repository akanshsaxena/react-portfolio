import React from "react";

export default function Eduction({ message }) {
  return (
    <>
      <h3 className="command">{message}</h3>
      <p>[</p>
      <p className="obj-start"></p>
      <div className="left-margin">
        <p className="key-value">
          "college":{" "}
          <span className="yellow">"Birla Institute of Applied Sciences"</span>
        </p>
        <p className="key-value">
          "university":{" "}
          <span className="yellow">"Uttarakhand Technical University"</span>
        </p>
        <p className="key-value">
          "location": <span className="yellow">"Nainital, Uttarakhand"</span>
        </p>
        <p className="key-value">
          "aggregate-percentage": <span className="yellow">"74%"</span>
        </p>
        <p className="key-value">
          "major":{" "}
          <span className="yellow">
            "Electronics & Communication Engineering"
          </span>
        </p>
        <p className="key-value">
          "timeline": <span className="yellow">"Aug 2015- Jun 2019"</span>
        </p>
      </div>
      <p className="obj-end">,</p>
      <p className="obj-start"></p>
      <div className="left-margin">
        <p className="key-value">
          "school": <span className="yellow">"B.B.L Public School"</span>
        </p>
        <p className="key-value">
          "board": <span className="yellow">"CBSE"</span>
        </p>
        <p className="key-value">
          "location": <span className="yellow">"Bareilly, Uttar Pradesh"</span>
        </p>
        <p className="key-value">
          "aggregate-percentage": <span className="yellow">"84%"</span>
        </p>
        <p className="key-value">
          "major": <span className="yellow">"Intermediate"</span>
        </p>
        <p className="key-value">
          "timeline": <span className="yellow">"Apr 2014 - Mar 2015"</span>
        </p>
      </div>
      <p className="obj-end">,</p>
      <p className="obj-start"></p>
      <div className="left-margin">
        <p className="key-value">
          "school": <span className="yellow">"B.B.L Public School"</span>
        </p>
        <p className="key-value">
          "board": <span className="yellow">"CBSE"</span>
        </p>
        <p className="key-value">
          "location": <span className="yellow">"Bareilly, Uttar Pradesh"</span>
        </p>
        <p className="key-value">
          "aggregate-percentage": <span className="yellow">"89%"</span>
        </p>
        <p className="key-value">
          "major": <span className="yellow">"High School"</span>
        </p>
        <p className="key-value">
          "timeline": <span className="yellow">"Apr 2012 - Mar 2013"</span>
        </p>
      </div>
      <p className="obj-end"></p>
      <p>]</p>
    </>
  );
}
