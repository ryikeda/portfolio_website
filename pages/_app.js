import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const title = pageProps.data?.title;
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.ico" />

        <title>{title || `Rafael Ikeda`}</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
