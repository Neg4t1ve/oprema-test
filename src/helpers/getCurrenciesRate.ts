import { IToken } from "../types/IToken";

interface ICurrenciesRate {
  EUR: number;
  GBP: number;
}

export const getCurrenciesRate = (tokens: IToken[]): ICurrenciesRate => {
  // getting non crypto tokens
  const currencies = tokens.filter((token) =>
    token.type_is_crypto ? null : token
  );

  // get eur and gbp price in usd
  const EUR = currencies.filter((item) =>
    item.asset_id === "EUR" ? item.price_usd : null
  )[0].price_usd;

  const GBP = currencies.filter((item) =>
    item.asset_id === "GBP" ? item.price_usd : null
  )[0].price_usd;
  return { EUR, GBP };
};
