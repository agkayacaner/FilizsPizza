import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Filiz's Pizza Restaurant</title>
        <meta name="description" content="Best pizza shop in Malatya" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList  />
    </div>
  );
}
