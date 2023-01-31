import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';

import styles from './home.module.scss';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            { product.amount && <span>for {product.amount} month</span> }
          </p>
          <SubscribeButton priceId={ product.priceId }/>
        </section>

        <Image src="/images/avatar.svg" alt="Girl coding" width={334} height={520} />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps= async () => {
  const price = await stripe.prices.retrieve('price_1JuM3OCQfvCbujiH5HLLgIu3',{
    expand: ['product']
  });

  const amountFormattedOrNull = price.unit_amount
    ? new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount! / 100)
    : null;
  
  const product = {
    priceId: price.id,
    amount: amountFormattedOrNull
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24,  // 24 hours
  }
}
