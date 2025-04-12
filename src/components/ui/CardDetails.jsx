import React, { useEffect } from 'react';
import { detailedMovie } from '../../redux/slices/search-movie/MovieSlice';
import { useDispatch, useSelector } from 'react-redux';

const CardDetails = () => {
  const { movieDetails } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(detailedMovie({ movie: {}, status: false }));
  };

  return (
    <React.Fragment>
      <div className="modal-backdrop fade show"></div>

      <div className="modal fade show d-block" tabIndex="-1">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content shadow-lg">

            {/* Modal Header */}
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title">{movieDetails?.Title}</h5>
              <button type="button" className="btn-close btn-close-white" onClick={handleClose}></button>
            </div>

            {/* Modal Body */}
            <div className="modal-body">
              <div className="row">
                {/* Poster */}
                <div className="col-md-4 mb-3">
                  <img
                    src={movieDetails?.Poster}
                    alt={movieDetails?.Title}
                    className="img-fluid rounded shadow-sm"
                  />
                </div>

                {/* Details */}
                <div className="col-md-8">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Year:</strong> {movieDetails?.Year}</li>
                    <li className="list-group-item"><strong>Rated:</strong> {movieDetails?.Rated}</li>
                    <li className="list-group-item"><strong>Released:</strong> {movieDetails?.Released}</li>
                    <li className="list-group-item"><strong>Runtime:</strong> {movieDetails?.Runtime}</li>
                    <li className="list-group-item"><strong>Genre:</strong> {movieDetails?.Genre}</li>
                    <li className="list-group-item"><strong>Director:</strong> {movieDetails?.Director}</li>
                    <li className="list-group-item"><strong>Writer:</strong> {movieDetails?.Writer}</li>
                    <li className="list-group-item"><strong>Actors:</strong> {movieDetails?.Actors}</li>
                    <li className="list-group-item"><strong>Language:</strong> {movieDetails?.Language}</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4">
                <h6 className="fw-bold">Full Plot:</h6>
                <p className="text-muted">{movieDetails?.Plot}</p>
              </div>

              {/* Ratings Across different platforms*/}
              <div className="mt-3">
                <h6 className="fw-bold">Ratings:</h6>
                <ul className="list-unstyled">
                  {movieDetails?.Ratings?.map((source, index) => (
                    <li key={index}>
                      <strong>{source?.Source}:</strong> {source?.Value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CardDetails;
