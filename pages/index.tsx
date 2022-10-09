import type { NextPage } from "next";
import Head from "next/head";
import { TokenList } from "../src/components/TokenList/TokenList";
import { getTokens, getRunningOperationPromises } from "../src/api/priceApi";
import { wrapper } from "../src/store";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    store.dispatch(getTokens.initiate("BTC;ETH;XRP;ADA;DOGE;XLM;SOL;GBP;EUR;"));
    await Promise.all(getRunningOperationPromises());

    return {
      props: {},
    };
  }
);

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Current token price</title>
      </Head>
      <TokenList />
    </>
  );
};

export default Home;
