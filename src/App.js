import React from "react";
import UserList from "./UserList";
import "./App.css";
const App = () => {
  return (
    <div className="row">
      <h3
        style={{
          color: "Red",
          fontWeight: "bolder",
          fontFamily: "sans-serif",
          textAlign: "center",
        }}
      >
        Users:
      </h3>
      <UserList />
    </div>
  );
};

export default App;
