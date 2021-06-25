import React from "react";

export default function CommandNotFound({ message }) {
  return (
    <>
      <h3 className="command">{message}</h3>
      <p style={{ color: "red", marginBottom: "10px" }}>
        {message} is not recognized as internal or external command, <br />
        akansh -help for more
      </p>
    </>
  );
}
