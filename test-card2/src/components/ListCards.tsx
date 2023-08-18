import { useEffect, useState } from "react";
import CardC from "./CardC";
import { CardItem } from "../interfaces/CardInterfaces";
//import { Container } from "react-bootstrap";
//import { v4 as uuidv4 } from "uuid";

const ListCards = () => {
  console.log("begin");

  //const listOfCard: PropsListCard = {
  //data: [
  // const listOfCard: CardItem[] = [
  //   {
  //     id: 1,
  //     title: "Title 1",
  //     desc: "desc of card one",
  //     imgSrc: "https://via.placeholder.com/50x75",
  //     details: {
  //       name: "ali",
  //       age: 23,
  //     },
  //   },
  //   {
  //     id: 2,
  //     title: "Title 2",
  //     desc: "desc of card two",
  //     imgSrc: "https://via.placeholder.com/50x75",
  //     details: {
  //       name: "ahmed",
  //       age: 50,
  //     },
  //   },
  //   {
  //     id: 3,
  //     title: "Title 3",
  //     desc: "desc of card three",
  //     imgSrc: "https://via.placeholder.com/50x75",
  //     details: {
  //       name: "mohsen",
  //       age: 43,
  //     },
  //   },
  // ];
  const [listOfCard, setListOfCard] = useState<CardItem[]>([]);

  useEffect(() => {
    console.log("useState 1");

    setListOfCard([
      {
        id: 1,
        title: "Title 1",
        desc: "desc of card one",
        imgSrc: "https://via.placeholder.com/50x75",
        details: {
          name: "ali",
          age: "23",
        },
      },
      {
        id: 2,
        title: "Title 2",
        desc: "desc of card two",
        imgSrc: "https://via.placeholder.com/50x75",
        details: {
          name: "ahmed",
          age: "50",
        },
      },
      {
        id: 3,
        title: "Title 3",
        desc: "desc of card three",
        imgSrc: "https://via.placeholder.com/50x75",
        details: {
          name: "mohsen",
          age: "43",
        },
      },
    ]);
  }, []);

  useEffect(() => {
    console.log("use state 2");
  }, [listOfCard]);

  const handleDelete = (identifiant: number) => {
    const newList = listOfCard.filter((item) => {
      item.id !== identifiant;
    });
    console.log("new List is ", newList);

    setListOfCard(newList);
  };

  const handleAdd = () => {
    const newItemAdd: CardItem = {
      id: listOfCard.length + 1,
      title: "",
      desc: "",
      imgSrc: "",
      details: { name: "", age: "" },
    };

    const newListList = [...listOfCard, newItemAdd];
    console.log(newListList);
    setListOfCard(newListList);

  };

  //listOfCard = [];
  console.log("return");

  return (
    <>
      <h1>List Cards</h1>

      <button className="btn btn-success mt-3 " onClick={handleAdd}>
        {" "}
        Add new item{" "}
      </button>

      <div>
        {/* {listOfCard.data.map((item, index) => (
          <div key={index}>
            <div> Tile : {item.id}</div>
            <div> {item.title}</div>
            <div> {item.desc}</div>
            <div> {item.imgSrc}</div>
            <div> {item.details.age}</div>
            <div> {item.details.name}</div>
          </div>
        ))} */}

        {listOfCard.length === 0 ? (
          <p>Not found</p>
        ) : (
          <div className="mt-5" style={{ display: "flex" }}>
            {listOfCard.map((item, index) => (
              <CardC dataList={item} key={index} deleteList={handleDelete} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ListCards;
