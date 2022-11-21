import React from "react";

export default function WorkExperience({ message }) {
  return (
    <>
      <h3 className="command">{message}</h3>
      <p className="obj-start"></p>
      <div className="left-margin">
        <p className="key-value">
          "company":
          <span className="yellow">"Publicis Sapient"</span>
        </p>
        <p className="key-value">
          "location":
          <span className="yellow">"Bengaluru, Karnataka"</span>
        </p>
        <p className="key-value">
          "role":
          <span className="yellow">"Associate Technology L2"</span>
        </p>
        <p className="key-value">
          "description":
          <span className="yellow">
            "Worked on building multiple E-commerce websites for a variety of customers."
          </span>
        </p>
        <p className="key-value">
          "timeline":
          <span className="yellow">"Sep 2021 - Present"</span>
        </p>
      </div>
      <p className="obj-end"></p>
      <p className="obj-start"></p>
      <div className="left-margin">
        <p className="key-value">
          "company":
          <span className="yellow">"Tata Consultancy Services"</span>
        </p>
        <p className="key-value">
          "location":
          <span className="yellow">"Pune, Maharasthra"</span>
        </p>
        <p className="key-value">
          "role":
          <span className="yellow">"ASE(Quality Analyst)"</span>
        </p>
        <p className="key-value">
          "description":
          <span className="yellow">
            "Holding a postion of module Lead, working actively on mutiple
            modules with my team to deliver quality product"
          </span>
        </p>
        <p className="key-value">
          "timeline":
          <span className="yellow">"Jun 2019 - Sep 2021"</span>
        </p>
      </div>
      <p className="obj-end"></p>
    </>
  );
}
