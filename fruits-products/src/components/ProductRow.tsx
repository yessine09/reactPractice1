export default function ProductRow({ product }: any) {
  //   const name = product.stocked ? (
  //     product.name
  //   ) : (
  //     <span style={{ color: "red" }}>{product.name}</span>
  //   );

  const Name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name} </span>
  );

  return (
    <tr>
      <td>{Name}</td>
      <td>{product.price}</td>
    </tr>
  );
}
