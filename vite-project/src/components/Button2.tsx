interface Props {
  text: string;
  onClick: () => void;
}

const Button2 = ({ text, onClick }: Props) => {
  return (
    <button
      style={{ marginInlineStart: "20px", marginTop: "40px" }}
      className="btn btn-primary"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button2;
