import Image from 'next/image';
import imageLoader from '../../../imageLoader';
import Link from 'next/link';
import { IGame } from '../../../types';

interface Props {
  games: IGame[];
}

const Games = ({ games }: Props) => {
  return (
    <>
      {games.map((game) => {
        return (
          <Link key={game.id} href={`/games/${game.gameSlug}`}>
            <div>
              <Image
                loader={imageLoader}
                unoptimized
                src={game.gameImage}
                alt={game.gameTitle}
                width="200"
                height="300"
              />

              <h3>{game.gameTitle}</h3>
              <p>{game.gameReleased}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Games;
