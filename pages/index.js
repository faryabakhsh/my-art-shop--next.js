import Head from "next/head";
import Image from "next/image";
import Banner from "../components/banner";
import Card from "../components/card";
import styles from "../styles/Home.module.css";

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log("hi banner btn");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Art Shop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText="view stores nearby"
          handleOnClick={handleOnBannerBtnClick}
        />
        <div className={styles.heroImage}>
          <Image
            src="/static/mega-creator-removebg-preview.png"
            alt="artist"
            width={700}
            height={400}
          />
        </div>
        <br />
        <div className={styles.cardLayout}>
          <Card
            className={styles.card}
            name="Stallion"
            imgUrl="/static/mega-creator-removebg-preview.png"
            href="/painting/stallion"
          />

          <Card
            className={styles.card}
            name="Stallion"
            imgUrl="/static/mega-creator-removebg-preview.png"
            href="/painting/stallion"
          />
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
