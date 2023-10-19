import type { AppProps } from "next/app";
import { getLoggedUserId } from "../utils/getLoggedUserId";
import "../styles/globals.css";
import store from "../store/store";
import { Provider } from "react-redux";

// Default way to get a logged user
export const loggedUserId = getLoggedUserId();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
