import React, { useState } from "react";
import Icons from "../icons";
export default function Todo({
  todo,
  toggleComplete,
  handleDelete,
  handleEdit,
}) {
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };
  return (
    <>
      <div className="relative bg-white shadow-md rounded-sm ">
        <div className="flex items-center justify-center p-5 mt-10 text-xl font-bold ">
          <input
            style={{ textDecoration: todo.complete && "line-through" }}
            type="text"
            value={todo.title === "" ? newTitle : todo.title}
            className="flex w-[600px] p-3 items-center justify-between border-b focus:outline-none "
            onChange={handleChange}
          />
          <div>
            {/* complete button */}
            <button className="" onClick={() => toggleComplete(todo)}>
              <img
                className="w-5 m-2"
                src={Icons.checkCircle}
                alt="check circle icon"
              />
            </button>
            {/* edit button */}
            <button className="" onClick={() => handleEdit(todo, newTitle)}>
              <img
                className="w-5 m-2"
                src={Icons.editIcon}
                alt="check circle icon"
              />
            </button>
            {/* delete button */}
            <button className="" onClick={() => handleDelete(todo.id)}>
              <img
                className="w-5 m-2"
                src={Icons.deleteIcon}
                alt="check circle icon"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
