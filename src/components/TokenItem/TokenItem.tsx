import { FC } from "react";
import { IToken } from "../../types/IToken";
import styles from "./TokenItem.module.scss";

interface ITokenItemProps {
  token: IToken;
  key: any;
}

export const TokenItem: FC<ITokenItemProps> = ({ token }) => {
  const { name, price_usd, price_eur, price_gbp } = token;
  return (
    <div className={styles.token}>
      <p className={styles.name}>{name}</p>
      <div>
        <p className={styles.currency}>
          <span>USD:</span> {price_usd}
        </p>
        <p className={styles.currency}>
          <span>GBP:</span> {price_gbp}
        </p>
        <p className={styles.currency}>
          <span>EUR:</span> {price_eur}
        </p>
      </div>
    </div>
  );
};
