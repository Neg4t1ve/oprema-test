import React, { FC } from "react";
import { Footer } from "../footer/Footer";
import styles from "./Main.module.scss";

type MainProps = {
  children: React.ReactNode;
};

export const Main: FC<MainProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>{children}</main>

      <Footer />
    </div>
  );
};
