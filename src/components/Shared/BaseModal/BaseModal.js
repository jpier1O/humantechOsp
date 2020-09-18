import React from 'react';
import PropTypes from 'prop-types';
import { Button, Typography } from '@material-ui/core';
import styles from './BaseModal.module.scss';
import { ReactComponent as BackButton } from '../../../assets/icons/icon_back.svg';
import { ReactComponent as CloseButton } from '../../../assets/icons/icon_close.svg';

const BaseModal = props => {
  const {
    children,
    width,
    height,
    title,
    showBackButton,
    onBack,
    showCloseButton,
    onClose,
    showConfirmButton,
    disableConfirmButton,
    fullWidthConfirmButton,
    confirmButtonText,
    onConfirm,
    showCancelButton,
    disableCancelButton,
    cancelButtonText,
    onCancel,
    afterButtons
  } = props;

  return (
    <div
      className={styles.modal}
      style={{
        width,
        height
      }}
    >
      <div className={styles.header}>
        <div>
          {showBackButton &&
          <BackButton onClick={onBack} className={styles.iconButton} />}
        </div>
        <Typography>
          {title}
        </Typography>
        <div>
          {showCloseButton &&
          <CloseButton onClick={onClose} className={styles.iconButton} />}
        </div>
      </div>
      <div className={styles.body}>
        {children}
      </div>
      <div className={styles.buttons}>
        { showCancelButton &&
        <Button
          onClick={onCancel}
          variant="outlined"
          className="btn--cancel"
          disabled={disableCancelButton}
        >{cancelButtonText}</Button> }
        { showConfirmButton &&
        <Button
          fullWidth={fullWidthConfirmButton}
          onClick={onConfirm}
          className="btn--confirm"
          disabled={disableConfirmButton}
        >{confirmButtonText}</Button> }
      </div>
      {afterButtons &&
      <div className={styles.afterButtons}>
        {afterButtons}
      </div>}
    </div>
  );
};

BaseModal.propTypes = {
  children: PropTypes.node,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  title: PropTypes.string,
  showBackButton: PropTypes.bool,
  onBack: PropTypes.func,
  showCloseButton: PropTypes.bool,
  onClose: PropTypes.func,
  showConfirmButton: PropTypes.bool,
  disableConfirmButton: PropTypes.bool,
  fullWidthConfirmButton: PropTypes.bool,
  confirmButtonText: PropTypes.string,
  onConfirm: PropTypes.func,
  showCancelButton: PropTypes.bool,
  disableCancelButton: PropTypes.bool,
  cancelButtonText: PropTypes.string,
  onCancel: PropTypes.func,
  afterButtons: PropTypes.node
};

BaseModal.defaultProps = {
  showBackButton: true,
  showCloseButton: true,
  showConfirmButton: true,
  confirmButtonText: 'Confirm',
  showCancelButton: true,
  cancelButtonText: 'Cancel'
};

export default BaseModal;
