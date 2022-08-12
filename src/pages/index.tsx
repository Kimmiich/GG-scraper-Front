import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import { styled } from '../../stitches.config';

const Text = styled('p', {
  fontFamily: '$system',
  color: 'purple',

  variants: {
    size: {
      1: {
        fontSize: '$1',
      },
      2: {
        fontSize: '$2',
      },
      3: {
        fontSize: '$3',
      },
    },
  },
});

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Text as="h1" size="3">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Text>
      </main>
    </div>
  );
};

export default Home;