import React from 'react';
import PropTypes from 'prop-types';
import DialogContent from '@material-ui/core/DialogContent';
import { Modal } from '@material-ui/core';
import BaseModal from '../../../components/Shared/BaseModal/BaseModal';
import MovieDetails from '../MovieDetails';

const NewMovieModal = (props) => {
  const {
    open,
		onClose,
    movieData,
    indexMovie,
    movie,
  } = props;
  
  const saveItem = (data) => {
    console.log("data sabe");    
  };

  return (
    <Modal open={open} className="modalContainer">
      <DialogContent>
        <BaseModal
          width="80%"
          onClose={onClose}
          showCancelButton={false}
          showConfirmButton={false}
          showBackButton={false}
          title={indexMovie === -1 ? "Nueva Pelicula" : "Editar Pelicula"}
        >
          <MovieDetails
            movieData={movieData}
            onSubmit={(data) => saveItem(data)}
            indexMovie={indexMovie}
            movie={movie}
          />
        </BaseModal>
      </DialogContent>
    </Modal>
  );
};

NewMovieModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  movieData: PropTypes.object,
  indexMovie: PropTypes.number,
  movie: PropTypes.object,
};

export default NewMovieModal;
