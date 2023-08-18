import { useState } from "react";

// HEDHA component child win bch affiche ui mt3na :

// houni 5dhina props mt3na todos: list , function change,delete
export default function TaskList({ todos, onChangeTodo, onDeleteTodo }) {
  return (
    //just parcours taa list mt3na w b3thneha les items lel child Task
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Task todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} />
        </li>
      ))}
    </ul>
  );
}

//houni child component win bch tsir Edit & Delete
function Task({ todo, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;

  //if kol k nji na3mel update kifch bch twali ui
  if (!isEditing) {
    todoContent = (
      <>
        {todo.title}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  } else {
    todoContent = (
      <>
        <input
          value={todo.title}
          onChange={(e) => {
            onChange({
              ...todo,
              title: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  }
  return (
    // Hedha ui main :D
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => {
          onChange({
            ...todo,
            done: e.target.checked,
          });
        }}
      />
      {todoContent}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </label>
  );
}
