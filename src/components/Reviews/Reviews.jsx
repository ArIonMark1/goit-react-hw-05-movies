import { handleMovieReview } from 'components/api_request';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  // console.log(movieId);
  useEffect(() => {
    const receiveReview = async () => {
      await handleMovieReview(movieId)
        .then(reviews => setReviews(prevReviews => [...reviews.results]))
        .catch(console.error);
    };
    receiveReview();
  }, [movieId]);

  return (
    <div>
      <ul>
        {reviews &&
          reviews.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author_details.username}</h3>
              <p>{review.content}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
