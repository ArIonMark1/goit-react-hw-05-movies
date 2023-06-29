import { handleMovieReview } from 'components/api_request';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Review.scss';

const toastStyle = {
  position: 'top-right',
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const receiveReview = async () => {
      await handleMovieReview(movieId)
        .then(reviews => {
          if (reviews.results.length === 0) {
            return toast.error(
              'Didn`t find anything on this request',
              toastStyle
            );
          }
          setReviews(prevReviews => [...reviews.results]);
        })
        .catch(console.error);
    };
    receiveReview();
  }, [movieId]);

  return (
    <div>
      <ToastContainer />
      <ul className="reviewList">
        {reviews.map(review => (
          <li key={review.id}>
            <h3>Author: {review.author_details.username}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
