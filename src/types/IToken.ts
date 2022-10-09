export interface IToken {
  asset_id: string;
  name: string;
  price_usd: number;
  type_is_crypto: number;
  price_eur?: number;
  price_gbp?: number;
}
