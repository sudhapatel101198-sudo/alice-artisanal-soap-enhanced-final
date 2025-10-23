import "../styles/globals.css";
import Head from "next/head";
export default function App({ Component, pageProps }){
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#164A2C" />
      <link rel="icon" href="/logo.png" />
      <title>Alice Artisanal Soap</title>
      <meta name="description" content="Handcrafted natural soaps and glycerine soap bases by Alice — gentle on skin, kind to Earth." />
    </Head>
    <Component {...pageProps} />
  </>
}
