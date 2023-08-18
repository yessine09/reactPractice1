//import { Fragment } from "react";

import { useState } from "react";

interface ListGroupProps {
  listitems: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ listitems, heading, onSelectItem }: ListGroupProps) {
  //heading= "" //bc props are immutable (unchangeble)

  //listitems = [];
  //const message = listitems.length === 0 && <p>Not found</p>
  const getmessage = () => {
    return listitems.length === 0 && <p>Not found</p>;
  };

  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [data, setData] = useState(-1);
  let x = null
  return (
    <>
      <h1>{heading}</h1>

      {/* {listitems.length === 0 && <p>Not found</p>} */}
      {getmessage()}
      <ul className="list-group">
        {listitems.map((item, i) => (
          <li
            className={
              selectedIndex === i
                ? "list-group-item active"
                : "list-group-item "
            }
            key={i}
            onClick={() => {
              setSelectedIndex(i);
              setData(onSelectItem(item));
            }}
          >
            {item}
          </li>
        ))}
      </ul>
        {data}
    </>
  );
}
export default ListGroup;
