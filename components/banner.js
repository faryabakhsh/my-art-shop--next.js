import styles from "./banner.module.css";

const Banner = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Art Shop</h1>
      <p className={styles.subTitle}>discover my art and rate it!</p>
      <div className={styles.buttonWrapper}>
        <button className={styles.button}>view stores nearby</button>
      </div>
    </div>
  );
};

export default Banner;
