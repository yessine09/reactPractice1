import { useEffect, useState } from "react";
import { ListProps } from "../interfaces/CardInterfaces";
import Card from "./Card";

const ListCard = () => {
  const [list, setList] = useState<ListProps[]>([]);
 
  useEffect(() => {
    setList([
      {
        id: 1,
        title: "action",
        desc: "aaa",
        imgSrc:
          "https://www.shutterstock.com/shutterstock/photos/1982900573/display_1500/stock-photo-flying-yellow-leather-womens-sneaker-isolated-on-white-background-fashionable-stylish-sports-1982900573.jpg",
        detail: {
          name: "ahmed",
          age: 16,
        },
      },
      {
        id: 2,
        title: "adventure",
        desc: "bbbb",
        imgSrc:
          "data:image/jpeg;base64,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",
        detail: {
          name: "mohsen",
          age: 35,
        },
      },

      {
        id: 13,
        title: "romantic",
        desc: "ccc",
        imgSrc:
          "https://rukminim1.flixcart.com/image/450/500/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=90&crop=false",
        detail: {
          name: "salah",
          age: 50,
        },
      },
    ]);
  }, []);

  function handleDelete(id: number) {
    const newList = list.filter((elem) => elem.id !== id);
    console.log("new List ", newList);

    setList(newList);
  }

  

  const handleAdd = () => {



     setList((current) => [...current, {
      id: list.length + 1,
      title:"",
      desc:"",
      imgSrc: "",
      detail:{name:'',age:''},
    }
  ]);
  };
  

  return (
    <>
      <h1>List of Cards</h1>
      <button className="btn btn-success mx-5 " onClick={handleAdd}>
        Add
      </button>
      <div className="mt-5" style={{ display: "flex" }}>
        {list.map((item, index) => (
          <Card data={item} deleteItem={handleDelete} key={index} />
        ))}
        {/* { list.length >0 && <Card data={list[0]} deleteItem={handleDelete} />} */}
      </div>
    </>
  );
};

export default ListCard;
