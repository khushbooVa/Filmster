import React, { useState } from "react";
import dummy from "../../../public/media.webp";
import { useDispatch, useSelector } from "react-redux";
import {
  getMovieDetails,
  MovieSearchFunc,
} from "../../redux/thunk/movie/MovieThunk";
import InfiniteScroll from "react-infinite-scroll-component";
import { clearMovies } from "../../redux/slices/search-movie/MovieSlice";
import CardDetails from "../../components/ui/CardDetails";
import { addToWatchlist } from "../../redux/slices/search-movie/WatchListSlice";
import { toast, ToastContainer } from "react-toastify";

const Home = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const { watchlist } = useSelector((state) => state.watchlist);
  const { movies, totalResults, loading, error, isDetails } = useSelector(
    (state) => state.movies
  );
  const [page, setPage] = useState(1);
  const hasMore = movies.length < totalResults;

  const handleSearch = (isNewSearch = false) => {
    if (!searchTerm) return;

    const nextPage = isNewSearch ? 1 : page;
    dispatch(MovieSearchFunc({ searchTerm, page: nextPage }));
    if (isNewSearch) setPage(1);
  };

  const notify = () => toast.info("Added to watchlist!");

  const fetchMoreData = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    dispatch(MovieSearchFunc({ searchTerm, page: nextPage }));
  };

  const handleNewSearch = () => {
    handleSearch(true);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    if (value === "") {
      dispatch(clearMovies());
      setPage(1);
    }
  };
  const handleClick = (id) => {
    dispatch(getMovieDetails(id));
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4 text-primary fw-bold"> Movie Search</h1>
      <ToastContainer />
      <div className="row justify-content-center mb-5">
        <div className="col-md-8">
          <div className="input-group ">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Search movie..."
              value={searchTerm}
              onChange={handleChange}
              onKeyDown={(e) => e.key === "Enter" && handleNewSearch()}
            />
            <button className="btn btn-primary " onClick={handleNewSearch}>
              Search
            </button>
          </div>
        </div>
      </div>

      {error && (
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      )}

      {movies.length > 0 ? (
        totalResults > 10 ? (
          <InfiniteScroll
            dataLength={movies.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<p className="text-center my-4">Loading more movies...</p>}
            className="row"
          >
            {movies.map((movie) => (
              <div
                key={movie.imdbID}
                className="col-sm-6 col-md-4 col-lg-3 mb-4"
              >
                <div
                  className="card h-100 shadow-sm border-0 card-hover"
                  onClick={() => handleClick(movie?.imdbID)}
                >
                  <img
                    src={movie?.Poster !== "N/A" ? movie.Poster : dummy}
                    alt={movie?.Title}
                    className="card-img-top"
                    style={{ height: "400px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-truncate">{movie?.Title}</h5>
                    <p className="card-text mb-2">
                      <strong>Year:</strong> {movie?.Year}
                    </p>
                    <p className="card-text text-capitalize">
                      <strong>Type:</strong> {movie?.Type}
                    </p>
                    {watchlist.some((item) => item.imdbID === movie.imdbID) ? (
                      <button
                        className="btn btn-primary mt-auto"
                        disabled
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        Added to Watchlist
                      </button>
                    ) : (
                      <button
                        className="btn btn-outline-primary mt-auto"
                        onClick={(e) => {
                          e.stopPropagation();
                          notify();
                          dispatch(addToWatchlist(movie));
                        }}
                      >
                        Add to Watchlist
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </InfiniteScroll>
        ) : (
          <div className="row">
            {movies.map((movie) => (
              <div
                key={movie.imdbID}
                className="col-sm-6 col-md-4 col-lg-3 mb-4"
              >
                <div className="card h-100 shadow-sm border-0 card-hover">
                  <img
                    src={movie?.Poster !== "N/A" ? movie.Poster : dummy}
                    alt={movie?.Title}
                    className="card-img-top"
                    style={{ height: "400px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-truncate">{movie?.Title}</h5>
                    <p className="card-text mb-2">
                      <strong>Year:</strong> {movie?.Year}
                    </p>
                    <p className="card-text text-capitalize">
                      <strong>Type:</strong> {movie?.Type}
                    </p>
                    <button className="btn btn-outline-primary mt-auto">
                      Add to Watchlist
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      ) : (
        searchTerm &&
        !loading && (
          <div className="text-center text-muted">
            <p>
              No results found for <strong>{searchTerm}</strong>.
            </p>
          </div>
        )
      )}

      {loading && <p className="text-center my-4">Loading...</p>}
      {isDetails && <CardDetails />}
    </div>
  );
};

export default Home;
