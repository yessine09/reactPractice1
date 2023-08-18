import React, { useEffect, useState } from "react";
import { getAllProducts } from "../service/api";

function Home() {
  const [animals, setAnimals] = useState([]);
  //Get products:
  useEffect(() => {
    getAllProducts().then((tanimals) => setAnimals(tanimals));
  }, []);

  return (
    <div>
      <h1>Home page</h1>
      <ul>
        {animals.map((animal) => (
          <li key={animal.id}>{animal.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default Home;
