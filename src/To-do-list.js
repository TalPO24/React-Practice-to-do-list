import React, { useState } from "react";
import "./To-do-list.css";

const ToDoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  const handleRemoveBtn = (index) => {
    const updateItems = [...items];
    updateItems.splice(index, 1);
    setItems(updateItems);
  };

  return (
    <div>
      <h1>To Do List</h1>
      <form onSubmit={HandleSubmit}>
        <div className="input">
          <input type="text" value={inputValue} onChange={handleInput} />
        </div>
        <div className="button">
          <button type="submit">Add item</button>
        </div>
      </form>
      <div className="li">
        <ul>
          {items.map((item, index) => (
            <li className="to-Do-List" key={index}>
              {item}
              <button className="removeBtn" onClick={handleRemoveBtn}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
