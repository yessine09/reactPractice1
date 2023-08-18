// Hedhy same just ena 3melha bch testi add wahdi :D

import React, { useState } from "react";

const AddTodoV1 = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  return (
    <div>
      <h6 style={{ color: "red" }}>Juste nheb chouf Child</h6>
      <input
        type="text"
        placeholder="Add to do"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          onAdd(title);
          setTitle("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodoV1;
