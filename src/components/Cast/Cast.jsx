import { handleMovieCredits } from 'components/api_request';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Cast.scss';

export default function Cast() {
  const [characters, setCharacters] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const handleTeamList = async () => {
      return await handleMovieCredits(movieId);
    };
    handleTeamList()
      .then(team => setCharacters(prevCharacters => [...team.cast]))
      .catch(console.error);
  }, [movieId]);
  //
  const characterImg = `https://image.tmdb.org/t/p/w200`;

  return (
    <ul className="listActors">
      {characters.map(character => (
        <li className="listActors__block" key={character.id}>
          <img
            className="listActors__foto"
            src={
              character.profile_path
                ? `${characterImg}${character.profile_path}`
                : 'https://via.placeholder.com/200x300'
            }
            alt={character.name}
          />
          <div className="listActors__content">
            <p className="listActors__name">
              <span className="titleInfo">Name:</span> {character.name}
            </p>
            <p className="listActors__role">
              <span className="titleInfo">Character:</span>{' '}
              {character.character}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
