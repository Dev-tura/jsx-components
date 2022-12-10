import React from "react";
import "../FullName/FullName.css";

const FullName = () => {
  return (
    <div
      style={{
        width: 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3>About me</h3>
      <p className="Fullname-text">
        I am an all-round developer. I build beautiful and interactive UI for my frontend. I also
        use the server side to make a frontend and backend website.
        <br></br>
        You can reach me via mail or github, kindly use the button below.{" "}
      </p>
      <a href="https://github.com/Dev-tura">
        <button>CONTACT ME</button>
      </a>
    </div>
  );
};

export default FullName;
