import React, { useState } from "react";
import style from "./newresource.module.css";

const NewResource = (props) => {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const { title, desc } = todo;
  const handleChange = (event) => {
    const name = event.target.name;
    setTodo((oldTodo) => {
      return { ...oldTodo, [name]: event.target.value };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setTodo({ title: "", desc: "" });
    props.onAddTodo(todo);
  };
  return (
    <section className={style.form}>
      <form onSubmit={handleSubmit}>
        <div className={style["form-field"]}>
          <label htmlFor="title">Title:</label> <br />
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={handleChange}
            required
          />
        </div>

        <div className={style["form-field"]}>
          <label htmlFor="desc">Description:</label> <br />
          <textarea
            type="text"
            name="desc"
            id="desc"
            value={desc}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className={style.btn}>
          Send
        </button>
      </form>
    </section>
  );
};

export default NewResource;
