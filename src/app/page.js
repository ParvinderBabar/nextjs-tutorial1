import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link.js";

import { useRouter } from "next/navigation.js";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/products">Products</Link>
        <Link href="/learn">Learn</Link>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
       
      
</div>
    
    </main>
  );
}
