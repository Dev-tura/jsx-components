import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Address = () => {
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
      <h3>Details</h3>
      <br></br>
      <h4>Name:</h4>
      <p>Adelaja Mistura</p>
      <h4>Age:</h4>
      <p>20 Years old</p>
      <h4>Location:</h4>
      <p>7, oreofero street, shomolu-Lagos.</p>
      <br></br>
      <div className="myreact-icons">
        <RiFacebookFill style={{ margin: 5 }} />
        <FaTwitter style={{ margin: 5 }} />
        <GrInstagram style={{ margin: 5 }} />
      </div>
    </div>
  );
};

export default Address;
