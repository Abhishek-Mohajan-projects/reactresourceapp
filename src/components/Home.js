import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import style from "./home.module.css";
import Resources from "./Resources";
import NewResource from "./NewResource";

const Home = () => {
  const [todos, setTodo] = useState([]);
  const handleAddTodo = (todo) => {
    setTodo((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), todo }];
    });
  };

  return (
    <div className={style.container}>
      <h1 style={{ color: "white" }}>Collect Data From a Form</h1>
      <NewResource onAddTodo={handleAddTodo} />
      {todos && <Resources todos={todos} />}
    </div>
  );
};

export default Home;
