import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

import styles from "../styles/404.module.css";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Ooooops...</h1>
      <h2>That page cannot be found</h2>
      <p>
        Go back to the{" "}
        <Link className={styles.btn} href="/">
          Homepage
        </Link>{" "}
      </p>
    </div>
  );
};

export default NotFound;
