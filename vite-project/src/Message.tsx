function fn(x: number, y: number) {
  console.log("ahla");
  if (x > y) return x + y;
}

fn(3, 5);

// interface Props {
//   children: string;
// }
let o = 5;

//PascalCasing
function Message({ children }: any) {
  return (
    <div>
      {o}
      <p>aaaa</p>
      {/* <p>{props.x}</p>
      <p>{props.y}</p> */}
      {children}
    </div>
  );
}

export default Message;
