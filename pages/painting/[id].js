import { useRouter } from "next/router";
import Link from "next/link";
import detailsData from "../../data/details.json";

export function getStaticProps(StaticProps) {
  const params = StaticProps.params;
  return {
    props: {
      details: detailsData.find((painting) => {
        return painting.id === 0;
      }),
    },
  };
}

export function getStaticPaths() {
  return {
    paths: [{ params: { id: "0" } }, { params: { id: "1" } }],
  };
}

const Paintings = () => {
  const router = useRouter();
  console.log("router", router);
  return (
    <div>
      paintings {router.query.id}
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </div>
  );
};

export default Paintings;
