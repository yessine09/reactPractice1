// this component with different update v1 :
import { useEffect, useState } from "react";
import TaskList from "./TaskList";
import AddTodo from "./AddTodo";

let nextId = 3;
const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: true },
  { id: 2, title: "Brew tea", done: false },
];

export default function TaskAppV1() {
  const [list, setList] = useState(initialTodos);

  const [editedTitleId, setEditedTitleId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");

  const handleAdd = (newT) => {
    setList([...list, { id: list.length + 1, title: newT, done: false }]);
  };

  const startEdit = (id, currentTitle) => {
    setEditedTitleId(id);
    setEditedTitle(currentTitle);
  };

  const cancelEdit = () => {
    setEditedTitleId(null);
    setEditedTitle("");
  };

  const finishEdit = (id) => {
    handleChangeName(id, editedTitle);
    cancelEdit();
  };

  // update item from liste :
  const handleChangeName = (id, newTitle) => {
    const updatedArtists = list.map((artist) => {
      if (artist.id === id) {
        return { ...artist, title: newTitle };
      }
      return artist;
    });
    setList(updatedArtists);
  };

  // delete item from
  const handleDelete = (id) => {
    console.log(id);

    const newList = list.filter((l) => l.id !== id);
    setList(newList);
  };

  return (
    <>
      <h4> Methode 2 : </h4>

      <AddTodo onAdd={handleAdd} />
      {list.map((item, i) => (
        <div key={i}>
          <ul>
            <li key={i}>
              {editedTitleId === item.id ? (
                <>
                  <input
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                  />
                  <button onClick={() => finishEdit(item.id)}>Save</button>
                  <button onClick={cancelEdit}>Cancel</button>
                </>
              ) : (
                <>
                  {item.title}
                  <button onClick={() => startEdit(item.id, item.title)}>
                    Change Title
                  </button>
                </>
              )}
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          </ul>
        </div>
      ))}
    </>
  );
}
