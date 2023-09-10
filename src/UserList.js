import React, { useEffect, useState } from "react";
import axios from "axios";
const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUsers(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <div className="COL">
      <ul className="lists">
        {listOfUsers.map((users) => (
          <li className="listNames">{users.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default UserList;
