import React, { useState, useEffect, useRef } from "react";
import BasicInfo from "./BasicInfo";
import Help from "./Help";
import Project from "./Project";
import Skills from "./Skills";
import CommandNotFound from "./CommandNotFound";
import Internships from "./Internships";
import Education from "./Education";
import Contact from "./Contact";
import WorkExperience from "./WorkExperience";

export default function Container() {
  const ref = useRef(null);
  const [domArray, setDomArray] = useState([
    <BasicInfo delay={800} />,
    <Help />,
  ]);
  const [value, setValue] = useState("");
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (value.split(" ").length === 1 || value.split(" ")[0] != "akansh") {
        setDomArray((prevState) => [
          ...prevState,
          <CommandNotFound message={value} />,
        ]);
      } else {
        const command = value.split(" ")[1];
        if (command === "-help") {
          setDomArray((prevState) => [...prevState, <Help />]);
        } else if (command === "-intro") {
          setDomArray((prevState) => [...prevState, <BasicInfo delay={500} />]);
        } else if (command === "-skills") {
          setDomArray((prevState) => [
            ...prevState,
            <Skills message={value} />,
          ]);
        } else if (command === "-projects") {
          setDomArray((prevState) => [
            ...prevState,
            <Project message={value} />,
          ]);
        } else if (command === "-internships") {
          setDomArray((prevState) => [
            ...prevState,
            <Internships message={value} />,
          ]);
        } else if (command === "-education") {
          setDomArray((prevState) => [
            ...prevState,
            <Education message={value} />,
          ]);
        } else if (command === "-contact") {
          setDomArray((prevState) => [
            ...prevState,
            <Contact message={value} />,
          ]);
        } else if (command === "-work-experience") {
          setDomArray((prevState) => [
            ...prevState,
            <WorkExperience message={value} />,
          ]);
        } else if (command === "-clearall") {
          setDomArray([<BasicInfo />, <Help />]);
        } else {
          setDomArray((prevState) => [
            ...prevState,
            <CommandNotFound message={value} />,
          ]);
        }
        setValue("");
        ref.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="container">
      <div className="inner-container">
        <div className="image">
          <img src="programmer.png" />
        </div>
        <div className="command-screen-container">
          <div className="viewer">
            <div style={{ padding: "10px" }}>
              {domArray.map((element) => {
                return element;
              })}
            </div>
            <div ref={ref} />
          </div>
          <div className="input">
            <input
              value={value}
              type="text"
              id="input-box"
              placeholder="Type your command here and press Enter"
              spellCheck={false}
              onKeyDown={handleKeyDown}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
