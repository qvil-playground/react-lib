import * as React from "react";

interface IButtonProps {
  children?: any;
}

const Button: React.FunctionComponent<IButtonProps> = ({ children }) => {
  return <button>{children}</button>;
};

export default Button;
