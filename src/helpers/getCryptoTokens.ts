import { IToken } from "../types/IToken";

export const GetCryptoTokens = (tokens: IToken[]): IToken[] => {
  const crypto = tokens.filter((item) => item.type_is_crypto);
  return crypto;
};
