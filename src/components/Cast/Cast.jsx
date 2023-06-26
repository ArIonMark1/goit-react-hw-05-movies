import { handleMovieCredits } from 'components/api_request';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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

  if (characters.length === 0) {
    return <div>Movie without characters! Unbelievably!!!</div>;
  }
  return (
    <ul>
      {characters.map(character => (
        <li key={character.id}>
          <img
            src={
              character.profile_path
                ? `${characterImg}${character.profile_path}`
                : 'https://via.placeholder.com/200x300'
            }
            alt={character.name}
          />
          <p>{character.name}</p>
          <p>{character.character}</p>
        </li>
      ))}
    </ul>
  );
}
