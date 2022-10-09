import { FC } from "react";
import styles from "./Footer.module.scss";

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <p>Made for Pro-Bit Programska Oprema D.O.O.</p>
      <p className={styles.data}>This data was produced from the CoinAPI.io</p>
    </footer>
  );
};
