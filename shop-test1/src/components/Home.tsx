import React, { useState } from "react";
import ListCard from "./ListCard";
import { Button } from "react-bootstrap";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div>
      {/* <Button>set mode to {isDarkMode ? "dark" : "white"}</Button> */}
      <ListCard />
    </div>
  );
};

export default Home;
