import { AppProps } from "next/app";
import BackgroundImage from "../components/BackgroundImage";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <BackgroundImage />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
