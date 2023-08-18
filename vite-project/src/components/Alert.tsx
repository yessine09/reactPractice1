import React, { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose, unshow }: Props) => {
  const [isClosed, setIsClosed] = useState(false);

  if (!isClosed)
    return (
      <div className="alert alert-primary alert-dismissible">
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          // onClick={() => unshow(false)}
          //onClick={() => setIsClosed(true)}
          onClick={onClose}
          ></button>
          {children}
      </div>
    );
};

export default Alert;
