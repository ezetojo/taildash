import Layout from "@/components/Layout";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#ccc"
        ></meta>
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#333"
        ></meta>
        <title>NEXTJS</title>
        <meta name="description" content="nextjs app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
