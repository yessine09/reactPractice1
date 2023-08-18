//import Button from "react-bootstrap/Button";
//import Card from "react-bootstrap/Card";
import { CardItem } from "../interfaces/CardInterfaces";
import { useState } from "react";
import Detail from "./Detail";

//Nb!
interface PropsCardC {
  dataList: CardItem;
  deleteList: (identifiant: number) => void;

  // Ici, dataList.id est l'expression qui accède à la valeur de la propriété id de l'objet dataList, qui représente l'identifiant de la liste à supprimer. Cette valeur est passée en tant qu'argument à la fonction deleteList. La fonction deleteList utilisera ensuite cet identifiant pour supprimer la liste correspondante en fonction de l'id fourni.
}

function CardC({ dataList, deleteList }: PropsCardC) {
  const [isInfoClicked, setIsInfoClicked] = useState(false);
  const [isEditClicked, setIsEditClicked] = useState(false);

  function handleInfo() {
    setIsInfoClicked(!isInfoClicked);
  }

  function handleEdit() {
    setIsEditClicked(!isEditClicked);
  }

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   //event.currentTarget.value;
  //   event.target.value;
  //   setIsEditClicked(true);
  // };

  console.log("value of ", isEditClicked);

  return (
    <div className="card mx-3" style={{ flexWrap: "wrap" }}>
      <img
        src={dataList?.imgSrc}
        className="card-img-top"
        alt="..."
        style={{ width: "100px" }}
      />
      <div className="card-body">
        <h3>Id : {dataList?.id}</h3>
        <h5>Title:</h5>
        <input
          className="card-title"
          defaultValue={dataList?.title}
          readOnly={!isEditClicked}
          // onChange={handleChange}

          // onKeyDown={(e) => { if(e.key === "Enter") setIsEditClicked(false) }}
        />
        <div>
          <h5>description :</h5>
          <textarea
            className="card-text"
            defaultValue={dataList?.desc}
            readOnly={!isEditClicked}
          ></textarea>
        </div>
        {isInfoClicked && (
          <>
            <h4 style={{ color: "red" }}>Detail :</h4>
            {/* <h5>Name :</h5>
            <input type="text" value={dataList.details.name} />
            <h5>Age :</h5>
            <input type="text" value={dataList.details.name} /> */}

            <Detail name={dataList?.details.name} age={dataList?.details.age} />
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
              isEditClicked ? "btn-outline-success" : "btn-outline-warning"
            )}
            style={{ marginRight: "10px" }}
            onClick={handleEdit}
          >
            {!isEditClicked ? "Edit" : "Save"}
          </button>
          {/* <button
            className="btn btn-danger"
            style={{ marginRight: "10px" }}
            onClick={() => deleteItem(dataList.id)}
          >
            Delete
          </button> */}
          <button
            className="btn btn-danger"
            style={{ marginRight: "10px" }}
            onClick={() => deleteList(dataList.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );

  //---------------------------------------Using react-bootstrap
  // return (
  //   <Card style={{ width: "18rem" }}>
  //     <Card.Img variant="top" src="holder.js/100px180" />
  //     <Card.Body>
  //       <Card.Title>{dataListList.title}</Card.Title>
  //       <Card.Text>{dataListList.desc}</Card.Text>
  //       <Button variant="primary">Go somewhere</Button>
  //     </Card.Body>
  //   </Card>
  // );
}

export default CardC;
