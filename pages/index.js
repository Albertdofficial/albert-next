import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

import Link from "next/link";

export default function Home() {
  return (
    <>
    <Head> 
    <title> Ninja List | Home </title>
    <meta name="keywords" content="ninjas"/>
    </Head>
    <div>

      <h1 className={styles.title} >Index</h1>
      <p className={styles.text} >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet fugit
        adipisci vel, perferendis rerum unde? Sed nihil corrupti, ducimus
        deserunt nobis mollitia suscipit voluptate quo nam nostrum veritatis,
        similique tempore?{" "}
      </p>
      <p className={styles.text} >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet fugit
        adipisci vel, perferendis rerum unde? Sed nihil corrupti, ducimus
        deserunt nobis mollitia suscipit voluptate quo nam nostrum veritatis,
        similique tempore?{" "}
      </p>
      <Link className={styles.btn} href="/ninjas" >See Ninja Listing</Link>
    </div>
    </>
  );
}
