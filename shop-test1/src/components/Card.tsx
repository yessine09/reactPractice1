import React, { useState } from "react";
import { ListProps } from "../interfaces/CardInterfaces";
import Details from "./Details";

const Card = ({ data, deleteItem }: ListProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isEditClicked, setIsEditClicked] = useState(false);
  //const [isDeletedlicked, setIsDeletedClicked] = useState(false);

  function handleInfo() {
    console.log("clicked");
    setIsClicked(!isClicked);
  }

  function handleEdit() {
    setIsEditClicked(!isEditClicked);
  }

  // function handleDelete(id: number) {
  //   setIsDeletedClicked(!isDeletedlicked);
  // }

  return (
    <div className="card mx-3" style={{ flexWrap: "wrap" }}>
      <img
        //src={data?.imgSrc?.x}
        src={data.imgSrc}
        className="card-img-top"
        alt="..."
        style={{ width: "100px" }}
      />
      <div className="card-body">
        <h3>Id : {data.id}</h3>
        <h5>Title:</h5>
        <input
          className="card-title"
          value={data.title}
          readOnly={!isEditClicked}
          // onKeyDown={(e) => { if(e.key === "Enter") setIsEditClicked(false) }}
        />
        <div>
          <h5>description :</h5>
          <textarea
            className="card-text"
            value={data.desc}
            readOnly={!isEditClicked}
          ></textarea>
        </div>
        {isClicked && (
          <>
            {" "}
            <h1>Detail</h1>
            <Details
              name={data.detail.name}
              age={data.detail.age}
              isEditClicked={isEditClicked}
            />{" "}
          </>
        )}
        <div>
          <button
            className="btn btn-info "
            style={{ marginRight: "10px" }}
            onClick={handleInfo}
          >
            view details
          </button>
          <button
            className={"btn ".concat(
              !isEditClicked ? "btn-outline-warning" : "btn-outline-success"
            )}
            style={{ marginRight: "10px" }}
            onClick={handleEdit}
          >
            {isEditClicked ? "Save" : "Edit"}
          </button>
          <button
            className="btn btn-danger"
            style={{ marginRight: "10px" }}
            onClick={() => deleteItem(data.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
