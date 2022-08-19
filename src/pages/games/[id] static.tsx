import Image from 'next/image';
import imageLoader from '../../../imageLoader';
import { GetGameResults, IGame } from '../../../types';

function GamePage({ game }: { game: IGame }) {
  return (
    <div>
      <h1>{game.gameTitle}</h1>
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
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/games');
  const results: GetGameResults = await res.json();

  return {
    paths: results.map((game: IGame) => {
      return { params: { id: String(game.gameSlug) } };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const res = await fetch(`http://localhost:3000/games/${params.id}`);
  const game = await res.json();
  return {
    props: {
      game,
    },
  };
}

export default GamePage;
