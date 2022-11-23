import Layout from "@/components/Layout";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="theme-color"></meta>
        <title>NEXTJS</title>
        <meta name="description" content="nextjs app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </>
  );
}

export default MyApp;
