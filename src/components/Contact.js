import React from "react";

export default function Contact({ message }) {
  return (
    <>
      <h3 className="command">{message}</h3>
      <p className="obj-start"></p>
      <div className="left-margin">
        <p className="key-value">
          "email":{" "}
          <a href="mailto:akanshsaxena723@gmail.com">
            <span className="yellow">"akanshsaxena723@gmail.com"</span>
          </a>
        </p>
        <p className="key-value">
          "mobile":{" "}
          <a href="tel:8979647170">
            <span className="yellow">"8979647170"</span>
          </a>
        </p>
        <p className="key-value">
          "linkedin":{" "}
          <a href="https://www.linkedin.com/in/a23/" target="_blank">
            <span className="yellow">"https://www.linkedin.com/in/a23/"</span>
          </a>
        </p>
        <p className="key-value">
          "github":{" "}
          <a href="https://github.com/akanshsaxena/" target="_blank">
            <span className="yellow">"https://github.com/akanshsaxena/"</span>
          </a>
        </p>
        <p className="key-value">
          "twitter":{" "}
          <a href="https://twitter.com/SaxenaAkansh" target="_blank">
            <span className="yellow">"https://twitter.com/SaxenaAkansh"</span>
          </a>
        </p>
        <p className="key-value">
          "discord": <span className="yellow">"akanshsaxena#9171"</span>
        </p>
      </div>
      <p className="obj-end"></p>
    </>
  );
}
