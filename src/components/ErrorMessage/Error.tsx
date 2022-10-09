import { FC } from "react";
import { IErrorMessage } from "../../types/IErrorMessage";
import styles from "./ErrorMessage.module.scss";

export const Error: FC<IErrorMessage> = (message) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.head}>An error occuried</h2>
      <h2 className={styles.name}>Error code: {message.status}</h2>
      {message.message === "null" ? null : <h3>{message.message}</h3>}
    </div>
  );
};
