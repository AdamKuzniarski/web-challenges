import { SWRConfig } from "swr";
import GlobalStyle from "../styles";

const fetcher = (url) =>
  fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error("Error in fetcher");
    }

    return res.json();
  });
export default function App({ Component, pageProps }) {
  return (
    <>
      <SWRConfig value={{ fetcher: fetcher }}>
        <GlobalStyle />
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
