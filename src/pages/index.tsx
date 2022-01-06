import { GetServerSideProps } from "next";
import Head from "next/head";
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from "../services/stripe";
import styles from "./index.module.scss";

type Product = {
  priceID: string;
  amount: number
}

type HomeProps = {
  product: Product
}

export default function Home({ product }: HomeProps): JSX.Element {
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
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceID={product.priceID} />
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {

  const price = await stripe.prices.retrieve('price_1KEropELrW9ScMWo86B4MaiQ', {
    expand: ['product']
  });

  const product = {
   priceID: price.id,
   amount: new Intl.NumberFormat('en-US', {
     style: 'currency',
     currency: 'USD'
   }).format(price.unit_amount / 100),
  }

  return {
    props: {
      product,
    }
  }
}
