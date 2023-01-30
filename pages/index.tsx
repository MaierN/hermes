import Head from "next/head";
import Index from "../components/Index/Index";

export default function Home() {
  return (
    <>
      <Head>
        <title>File Transfer</title>
      </Head>
      <Index />
    </>
  );
}
