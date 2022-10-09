import { FC } from "react";
import styles from "./Button.module.scss";

interface IButtonProps {
  handleClick: () => void;
  children: React.ReactNode;
}

export const Button: FC<IButtonProps> = ({ handleClick, children }) => {
  return (
    <button
      className={styles.button}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
