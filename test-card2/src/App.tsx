import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListCards from "./components/ListCards";
import Home from "./screens/Home";
import Cards from "./screens/Cards";
import CardsDetails from "./screens/CardsDetails";
//import SideRoutingBar from "./components/SideRoutingBar";
import NotFound from "./screens/NotFound";

const App = () => {
  // return <ListCards />;
  return (
    <>
      <BrowserRouter>
        {/* <SideRoutingBar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards" element={<Cards />}>
            <Route path="" element={<ListCards />} />
            <Route path=":id" element={<CardsDetails />} />
            <Route path="add" element={<CardsDetails />} />
          </Route>
          {/* <Route children={}/> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
