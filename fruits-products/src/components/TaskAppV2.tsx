// update with versiion 2 :D

import { useEffect, useState } from "react";
import TaskList from "./TaskList";
import AddTodo from "./AddTodo";

let nextId = 3;
const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: true },
  { id: 2, title: "Brew tea", done: false },
];

export default function TaskAppV2() {
  const [list, setList] = useState(initialTodos);
  const [newTitle, setTitle] = useState("");

  const Todo = () => {
    const [isEditing, setIsEditing] = useState(false);

    const editingTemplate = (
      <form className="stack-small">
        {list.map((item) => (
          <div>
            <div className="form-group">
              <label className="todo-label" htmlFor={item.id}>
                New name for {item.id}
              </label>
              <input id={item.id} className="todo-text" type="text" />
            </div>
            <div className="btn-group">
              <button type="button" className="btn todo-cancel">
                Cancel
                <span className="visually-hidden">renaming {item.title}</span>
              </button>
              <button type="submit" className="btn btn__primary todo-edit">
                Save
                <span className="visually-hidden">
                  new title for {item.title}
                </span>
              </button>
            </div>
          </div>
        ))}
      </form>
    );

    const viewTemplate = (
      <div className="stack-small">
        {list.map((item) => (
          <div>
            <div className="c-cb">
              <input
                id={item.id}
                type="checkbox"
                defaultChecked={item.done}
                onChange={() => toggleTaskCompleted(item.id)}
              />
              <label className="todo-label" htmlFor={props.id}>
                {props.name}
              </label>
            </div>
            <div className="btn-group">
              <button type="button" className="btn">
                Edit <span className="visually-hidden">{props.name}</span>
              </button>
              <button
                type="button"
                className="btn btn__danger"
                onClick={() => props.deleteTask(props.id)}
              >
                Delete <span className="visually-hidden">{props.name}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    );

    return (
      <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>
    );
  };

  const handleAdd = (newT) => {
    setList([...list, { id: list.length + 1, title: newT, done: false }]);
  };

  const handleChangeName = (id, newName) => {
    const updatedArtists = list.map((artist) => {
      if (artist.id === id) {
        return { ...artist, title: newName };
      }
      return artist;
    });
    setList(updatedArtists);
  };

  const handleDelete = (id) => {
    console.log(id);

    const newList = list.filter((l) => l.id !== id);
    setList(newList);
  };

  return (
    <>
      <h4> Methode 3 : </h4>
      <AddTodo onAdd={handleAdd} />
      {list.map((item, i) => (
        <div key={i}>
          <ul>
            <li>
              <input
                type="checkbox"
                checked={item.done}
                onChange={(e) => e.target.checked}
              />
              {item.title}
              {/* <input
                //type="text"
                value={item.title}
                onChange={(e) => handleUpdateV1(item.id, e.target.value)}
              /> */}
              <button
                onClick={() =>
                  handleChangeName(
                    item.id,
                    prompt("Enter new title:", item.title)
                  )
                }
              >
                Change Title
              </button>
              {/* {item.title} <AddTodo edit={handleUpdateV1} /> */}
              {/* <button onClick={() => handleUpdateV1(item.id)}>update</button>{" "} */}
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          </ul>
        </div>
      ))}
    </>
  );
}
