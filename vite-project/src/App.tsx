import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["newYork", "tunis", "rades", "beja"];

  const handleSelectItem = (item: string) => {
    console.log(item);
    
    return items.length === 0 ? <p> No item </p> : <h1>{item}</h1>;
  };
  
  function close(){
    setAlertVisible(false);
  }

  const [alerVisible, setAlertVisible] = useState(false);
  
  return (
    <div>
      <Message>
        
        <span>hello world:</span>
        <h1>ahla w sahla</h1>x

      </Message>
      <ListGroup
        listitems={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {/* <Alert>
        {" "}
        Hello ! <span>world..</span>
      </Alert> */}
      {/* <Button onClick={() => console.log("clicked")}>My button</Button> */}
      {alerVisible && (
        <Alert onClose={close}  >MyAlert</Alert>
      )}
      <Button
        children="MyButton"
        color="primary"
        onClick={() => setAlertVisible(!alerVisible)}
      />
    </div>
  );
}

export default App;
