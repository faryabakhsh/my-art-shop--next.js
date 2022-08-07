import Head from "next/head";
import Image from "next/image";
import Banner from "../components/banner";
import Card from "../components/card";
import styles from "../styles/Home.module.css";
import details from "../data/details.json";

export async function getStaticProps(context) {
  console.log("hi getstartic props");
  return {
    props: {
      details,
    }, // will be passed to the page component as props
  };
}

export default function Home(props) {
  console.log("props", props);
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

        <h2 className={styles.heading2}>My Paintings</h2>
        <div className={styles.cardLayout}>
          {props.details.map((paintings) => {
            return (
              <Card
                className={styles.card}
                key={paintings.id}
                name={paintings.name}
                imgUrl={paintings.imgUrl}
                href={`/painting/${paintings.id}`}
              />
            );
          })}
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
