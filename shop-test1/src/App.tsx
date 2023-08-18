import Container from "react-bootstrap/Container";
import { Routes, Route } from "react-router";
import ListCard from "./components/ListCard";
import Home from "./components/Home";
const App = () => {
  return (
    // <Container className="mt-40">
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/store" element={<Store />} />
    //     <Route path="/about" element={<About />} />
    //   </Routes>
    // </Container>
    <div>
      <Home />
    </div>
  );
};

export default App;
