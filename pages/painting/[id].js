import { useRouter } from "next/router";
import Link from "next/link";
import detailsData from "../../data/details.json";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Painting.module.css";

export function getStaticProps(StaticProps) {
  const params = StaticProps.params;
  return {
    props: {
      details: detailsData.find((painting) => {
        return painting.id.toString() === params.id;
      }),
    },
  };
}

export function getStaticPaths() {
  const paths = detailsData.map((painting) => {
    return {
      params: {
        id: painting.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

const Paintings = (props) => {
  const router = useRouter();

  return (
    <div className={styles.layout}>
      <Head>
        <title>{props.details.name}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href="/">
              <a>Back to home</a>
            </Link>
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{props.details.name}</h1>
          </div>
          <Image
            src={props.details.imgUrl}
            width={600}
            height={360}
            className={styles.storeImg}
            alt="store image"
          />
        </div>
        <div className={styles.col2}>
          <p>{props.details.address}</p>
        </div>
      </div>
    </div>
  );
};

export default Paintings;
