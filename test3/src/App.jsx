import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./routes/";

const App = () => {
  return <div>
    <BrowserRouter>
      <AppRoute/>
    </BrowserRouter>
  </div>;
};

export default App;
