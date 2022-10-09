import { useRouter } from "next/router";
import { FC } from "react";
import { useGetTokensQuery } from "../../api/priceApi";
import { GetCryptoTokens } from "../../helpers/getCryptoTokens";
import { getCurrenciesRate } from "../../helpers/getCurrenciesRate";
import { IErrorMessage } from "../../types/IErrorMessage";
import { IToken } from "../../types/IToken";
import { Button } from "../Button/Button";
import { Error } from "../ErrorMessage/Error";
import { TokenItem } from "../TokenItem/TokenItem";
import styles from "./TokenList.module.scss";

export const TokenList: FC = () => {
  const router = useRouter();

  const { data, isLoading, isError, error, refetch } = useGetTokensQuery(
    "BTC;ETH;XRP;ADA;DOGE;XLM;SOL;GBP;EUR;",
    {
      skip: router.isFallback,
    }
  );

  if (isError && "data" in error) {
    const errorMessage: IErrorMessage = {
      status: error.status,
      message: JSON.stringify(error.data),
    };
    return <Error {...errorMessage} />;
  }

  if (isLoading) {
    return <h1>Data is loading..</h1>;
  }

  if (data) {
    const { EUR, GBP } = getCurrenciesRate(data);
    const tokens = GetCryptoTokens(data);

    return (
      <div className={styles.container}>
        <div className={styles.tokensContainer}>
          {tokens.map((item) => {
            const token: IToken = {
              name: item.name,
              asset_id: item.asset_id,
              type_is_crypto: item.type_is_crypto,
              price_usd: Math.round(item.price_usd * 10000) / 10000,
              price_gbp: Math.round((item.price_usd / GBP) * 10000) / 10000,
              price_eur: Math.round((item.price_usd / EUR) * 10000) / 10000,
            };
            return (
              <TokenItem
                key={item.asset_id}
                token={token}
              />
            );
          })}
        </div>
        <Button
          handleClick={() => {
            refetch();
          }}
        >
          Refresh
        </Button>
      </div>
    );
  }
  return <></>;
};
