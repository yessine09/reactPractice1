// This component for Test Immer and such other news

import { useState } from "react";
import { useImmer } from "use-immer";

let nextId = 3;
const initialList = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

export default function Test() {
  const [list, setList] = useState(initialList);
  //const [list, setList] = useImmer(initialList);

  function handleToggle(artworkId, nextSeen) {
    // console.log("list 1", initialList[0].seen);

    // console.log("next awel mara", nextSeen);
    // console.log("eli bch da5lou ID", artworkId);
    // console.log("id eli aandi", initialList[0].id);

    setList(
      list.map((artwork) => {
        if (artwork.id === artworkId) {
          //console.log("hani nzelet ", artwork.seen);
          //console.log("next 1", nextSeen);
          //console.log("new array", artwork);

          return { ...artwork, seen: nextSeen };
        } else {
          //console.log("mchina lel else  ", artwork);
          //console.log("next", nextSeen);

          //console.log("new array 2", artwork.seen);

          return artwork;
        }
      })
    );
  }

  // Using Immer

  //   function handleToggle(artworkId, nextSeen) {
  //     setList(draft => {
  //       const artwork = draft.find(a =>
  //         a.id === artworkId
  //       );
  //       artwork?.seen = nextSeen;
  //     });
  //   }
  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList artworks={list} onToggle={handleToggle} />
    </>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map((artwork) => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={(e) => {
                onToggle(artwork.id, e.target.checked);
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}

