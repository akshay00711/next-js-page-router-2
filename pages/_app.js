import Head from "next/head";

import "../styles/globals.css";
import Layout from "../components/layout/layout";
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SessionProvider session={pageProps.session}>
        {getLayout(<Component {...pageProps} />)}
      </SessionProvider>
    </>
  );
}

export default MyApp;
