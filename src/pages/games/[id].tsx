import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import imageLoader from '../../../imageLoader';
import { IGame } from '../../../types';

function GamePage({ game }: { game: IGame }) {
  const router = useRouter();
  return (
    <div>
      <h1>{game.gameTitle}</h1>
      <p>{game.gamePublisher}</p>
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:3000/games/${context.query.id}`);
  const game = await res.json();

  return {
    props: {
      game,
    },
  };
};

export default GamePage;
