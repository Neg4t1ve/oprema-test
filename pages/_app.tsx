import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { Main } from "../src/components/main/Main";
import { FC } from "react";
import { wrapper } from "../src/store";

const MyApp: FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <Main>
        <Component {...props.pageProps} />
      </Main>
    </Provider>
  );
};

export default MyApp;
