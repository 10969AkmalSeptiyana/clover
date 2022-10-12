import "../styles/global.css";
import Provider from "../lib/hooks/useGlobalContext";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
