import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { IGame } from '../../types';
import imageLoader from '../../imageLoader';
import Link from 'next/link';
import Slider from '../components/Slider/Slider';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import styles from '../styles/Home.module.css';
import { styled } from '../../stitches.config';

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
      <main>
        <h1>Welcome to GamerGuides</h1>

        {games.map((game) => {
          return (
            <div key={game.id}>
              <Link href={`/games/${game.gameSlug}`}>
                <a>
                  <h3>{game.gameTitle}</h3>
                </a>
              </Link>

              <Image
                loader={imageLoader}
                unoptimized
                src={game.gameImage}
                alt={game.gameTitle}
                width="200"
                height="300"
              />
            </div>
          );
        })}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
