import { useRouter } from "next/router";
import Link from "next/link";
import detailsData from "../../data/details.json";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Painting.module.css";
import cls from "classnames";
import { useState } from "react";

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

  const [votingCount, setVotingCount] = useState(1);

  const handleUpvoteButton = () => {
    let count = votingCount + 1;
    setVotingCount(count);
  };

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
        <div className={cls("glass", styles.col2)}>
          <div className={styles.iconWrapper}>
            <Image
              src="/static/icons/info.svg"
              width="24"
              height="24"
              alt="info icon"
            />
            <p className={styles.text}>{props.details.address}</p>
          </div>

          <div className={styles.iconWrapper}>
            <Image
              src="/static/icons/info.svg"
              width="24"
              height="24"
              alt="info icon"
            />
            <p className={styles.text}>{props.details.neighbourhood}</p>
          </div>

          <div className={styles.iconWrapper}>
            <Image
              src="/static/icons/star.svg"
              width="24"
              height="24"
              alt="star icon"
            />
            <p className={styles.text}>{votingCount}</p>
          </div>

          <button className={styles.upvoteButton} onClick={handleUpvoteButton}>
            Up vote!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Paintings;
