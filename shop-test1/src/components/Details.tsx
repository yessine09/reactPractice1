import { ListProps } from "../interfaces/CardInterfaces";

let fruits = ["apple", "tomatte", "kiwi"];
let l = fruits.join(",");
// fruits = [];

const getMessage = () => (l.length === 0 ? <h1>Not Found</h1> : <h1>{l}</h1>);
const Details = ({ name, age, isEditClicked }: ListProps) => {
  return (
    <>
      {getMessage()}
      {/* <h1> detail </h1> */}
      <h5>Name :</h5>
      <input type="text" value={name} readOnly={!isEditClicked} />
      <h5>Age :</h5>
      <input type="text" value={age} readOnly={!isEditClicked} />
    </>
  );
};

export default Details;
