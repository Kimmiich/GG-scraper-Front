import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import { IGame } from '../../types';

import Slider from '../components/Slider/Slider';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Games from '../components/Games/Games';

import styles from '../styles/Home.module.css';
import { styled } from '../ui/stitches.config';

interface Props {
  games: IGame[];
}

//Fetch with nextjs getstatic...
export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch('http://localhost:3000/games');
  const results = await res.json();

  return {
    props: {
      games: results,
    },
  };
};

const Home: NextPage<Props> = ({ games }) => {
  return (
    <div>
      <Head>
        <title>GamerGuides</title>
        <meta
          name="description"
          content="This is the ultimate guide for todays games"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Slider />

      <Games games={games} />
      <Footer />
    </div>
  );
};

export default Home;
