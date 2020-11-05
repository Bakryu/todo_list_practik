import React from "react";
import "./todoItem.css";

export default function TodoItem({
  value,
  id,
  done,
  removeHandler,
  doneHandler,
}) {
  let selectors = "";
  if (done) {
    selectors = "done";
  }
  return (
    <li id={id}>
      <span className={selectors} onClick={() => doneHandler(id)}>
        {value}
      </span>
      <button className="btn" onClick={() => removeHandler(id)}>
        X
      </button>
    </li>
  );
}
