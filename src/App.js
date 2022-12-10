import React from "react";
import Address from "./Components/Address/Address";
import FullName from "./Components/FullName/FullName";
import ProfilePhoto from "./Components/ProfilePhoto/ProfilePhoto";

function App() {
  return (
    <container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "grey", fontSize: 60, marginBottom: -15 }}>Profile</h1>
      <p style={{}}>I'm a creative webDeveloper</p>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: 600 }}>
        <Address />
        <FullName />
        <ProfilePhoto />
      </div>
    </container>
  );
}

export default App;
