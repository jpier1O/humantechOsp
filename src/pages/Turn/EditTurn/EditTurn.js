import React from 'react';
import PropTypes from 'prop-types';
import DialogContent from '@material-ui/core/DialogContent';
import { Modal } from '@material-ui/core';
import BaseModal from '../../../Shared/BaseModal/BaseModal';
import ProductDetails from '../../../Shared/ProductDetails/ProductDetails';

const EditMovieModal = (props) => {
  const {
    open,
    onClose,            
  } = props;
  
  const saveItem = (data, index) => {
    const {
      name,
      price,
      description,
    } = data;

    updatePinnedProduct({
      variables: {
        id: streamId,
        indexItem: index,
        nameProduct: name,
        description,
        price: +price
      }
    });
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
          title="Editar Pelicula"
        >
          <MovieDetails
            productData={product}
            onSubmit={(data) => saveItem(data, indexItem)}
          />
        </BaseModal>
      </DialogContent>
    </Modal>
  );
};

NewMovieModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  product: PropTypes.object,
  indexItem: PropTypes.number,
  streamId: PropTypes.string,
};

export default EditMovieModal;
