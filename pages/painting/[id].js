import { useRouter } from "next/router";
import Link from "next/link";

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
