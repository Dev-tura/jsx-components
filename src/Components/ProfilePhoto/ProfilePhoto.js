import React from "react";
import profilepic from "../Images/cartoon.png";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";

const ProfilePhoto = () => {
  return (
    <div
      style={{
        border: 1,
        backgroundColor: "#ff5349",
        width: 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img style={{ width: 200, borderRadius: 100 }} src={profilepic} alt="none" />
      <h2 style={{ color: "white" }}>HELLO I'M MISTURA</h2>
      <p className="Fullname-text" style={{ color: "white" }}>
        I am a versatile web developer, who can approach marketing projects from concept to
        implementation
      </p>
      <div style={{ color: "white" }}>
        <RiFacebookFill style={{ margin: 5 }} />
        <FaTwitter style={{ margin: 5 }} />
        <GrInstagram style={{ margin: 5 }} />
        <FaLinkedin style={{ margin: 5 }} />
      </div>
    </div>
  );
};

export default ProfilePhoto;
