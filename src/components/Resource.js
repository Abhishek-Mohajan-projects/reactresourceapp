import React from "react";
import style from "./resource.module.css";

const Resource = (props) => {
  const { title, desc } = props.todo;
  return (
    <section className={style.resource}>
      <h2>{title}</h2>
      <p>{desc}</p>
    </section>
  );
};

export default Resource;
