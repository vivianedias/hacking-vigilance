import Head from "next/head";
import { Navbar } from "../components";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        Main
      </main>

      <footer>Footer</footer>
    </div>
  );
}
