import React from "react";

function Task({ category, text, onDeleteTask }) {
  function handleClick() {
    onDeleteTask(text);
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleClick} className="delete">
        Delete
      </button>
    </div>
  );
}

export default Task;
