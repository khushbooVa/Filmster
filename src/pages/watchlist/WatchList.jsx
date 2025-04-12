import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import dummy from '../../../public/media.webp';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
  removeFromWatchlist,
  incrementCount,
  resetCount,
} from '../../redux/slices/search-movie/WatchListSlice';
import CardDetails from '../../components/ui/CardDetails';
import { getMovieDetails } from '../../redux/reducers/movie-reducer/MovieReducer';
import { toast, ToastContainer } from 'react-toastify';

const WatchList = () => {
  const dispatch = useDispatch();
    const { isDetails } = useSelector((state) => state.movies);
  
  const { watchlist, Count } = useSelector((state) => state.watchlist);

  useEffect(() => {
    dispatch(resetCount());
  }, [dispatch]);
  const notify = () => toast.error("Removed from watchlist!");

  const hasMore = Count < watchlist.length;

  const fetchMoreData = () => {
    dispatch(incrementCount(4));
  };

  const handleRemove = (id) => {
    dispatch(removeFromWatchlist(id));
  };

 const handleClick = (id) => {
    dispatch(getMovieDetails(id))
  };


  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 text-primary fw-bold"> My Watchlist</h2>
      <ToastContainer/>
      {watchlist.length > 0 ? (
        <InfiniteScroll
          dataLength={Math.min(Count, watchlist.length)}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<p className="text-center my-4">Loading more movies...</p>}
          className="row"
        >
          {watchlist.slice(0, Count).map((movie) => (
            <div key={movie.imdbID} className="col-sm-6 col-md-4 col-lg-3 mb-4"
            
            >
              <div className="card h-100 shadow-sm border-0"
              onClick={() => handleClick(movie?.imdbID)}
              >
                <img
                  src={movie?.Poster !== 'N/A' ? movie.Poster : dummy}
                  alt={movie?.Title}
                  className="card-img-top"
                  style={{ height: '400px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-truncate">{movie?.Title}</h5>
                  <p className="card-text mb-2"><strong>Year:</strong> {movie?.Year}</p>
                  <p className="card-text text-capitalize"><strong>Type:</strong> {movie?.Type}</p>
                  <button
                    className="btn btn-outline-danger mt-auto"
                    onClick={(e) => {
                      e.stopPropagation();
                      notify();
                       handleRemove(movie.imdbID)}}
                  >
                    Remove from Watchlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </InfiniteScroll>
      ) : (
        <div className="text-center text-muted">
          <p>Your watchlist is empty ......</p>
        </div>
      )}


{
        isDetails &&
        <CardDetails />
      }
    </div>
  );
};

export default WatchList;
