import React from "react";
import { TodoItems } from "./TodoItems";

export const Todos = (props) => {
  let myStyle = {
    minHeight: "60vh",
    margin: "40px auto"
  }
  return (
    <div className="container" style={myStyle}>
      <h3 className="text-center my-3">WorkBook ToDo List</h3>
      {props.todos.length === 0
        ? "No ToDo's to Display in WorkBook"
        : props.todos.map((todo) => {
            return (
              <>
              <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete} />
              <hr/>
              </>
            );
          })}
    </div>
  );
};
