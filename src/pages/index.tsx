import Head from "next/head";
import { SubscribeButton } from '../components/SubscribeButton';
import styles from "./index.module.scss";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.container}>
        <section className={styles.content}>
          <span>👏 &nbsp; Hey, welcome</span>
          <h1>News about the <span>React</span> world</h1>
          <p>
            Get access to all the publications <br />
            <span>for $ 9.90 month</span>
          </p>
          <SubscribeButton />
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}
