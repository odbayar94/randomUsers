import React, { useState, useEffect } from "react";
import axios from "axios";

import User from "./User";
import "./styles.css";

export default function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api?results=20")
      .then((response) => {
        // const users = response.data;
        setUser(response.data.results);
      })
      .catch((err) => {
        const errorMessage = err;
      });
  }, []);

  return (
    <div className="App">
      <div className="user">
        {user.map((el) => (
          <User key={el.name.first} first={el.name.first} last={el.name.last} />
        ))}
      </div>
    </div>
  );
}
