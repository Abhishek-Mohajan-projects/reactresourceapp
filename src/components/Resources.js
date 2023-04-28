import React from "react";
import Resource from "./Resource";
import style from "./resources.module.css";

const Resourses = (props) => {
  return (
    <section className={style.resources}>
      {props.todos.map((todo) => (
        <Resource todo={todo.todo} key={todo.id} id={todo.id} />
      ))}
    </section>
  );
};

export default Resourses;
