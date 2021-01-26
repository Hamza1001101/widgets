import React, { useState, useEffect } from "react";
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/users";

const ExerciseSolution = () => {
  const [users, setUsers] = useState([]);

  /**
   * * We are making a network request in useEffect hood.
   * * Network request are always asnychronous in nature
   *
   */

  useEffect(() => {
    const usersList = async () => {
      const { data } = await axios.get(URL);
      setUsers(data);
    };
    usersList();
  }, []);

  const renderedList = users.map((user) => (
    <li key={user.id}> {user.name} </li>
  ));

  return (
    <div>
      <ul>{renderedList}</ul>
    </div>
  );
};

export default ExerciseSolution;
