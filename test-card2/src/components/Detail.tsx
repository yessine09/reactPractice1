interface DetailProps {
  name: string;
  age: string;
}

const Detail = ({ name, age }: DetailProps) => {
  return (
    <>
      <h5>Name :</h5>
      <input type="text" defaultValue={name} />
      <h5>Age :</h5>
      <input type="text" defaultValue={age} />
    </>
  );
};

export default Detail;
