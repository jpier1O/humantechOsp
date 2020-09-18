import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { TextField, Grid, Button } from '@material-ui/core';
import styles from './MovieDetails.module.scss';

const MovieDetails = props => {
  const {
    onSubmit,
    movieData,
  } = props;

  const { register, handleSubmit, errors, formState } = useForm({
    mode: 'onChange',
    defaultValues: {
      nombre: movieData && movieData.nameProduct,
      fecha: movieData && movieData.price,
      estado: movieData && movieData.description,
    },
  });

  return (
    <div className={styles.root}>      
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <Grid
            item
            xs={12}            
          >
            <TextField
              className="formField"
              error={!!errors.name}
              name="Nombre de la pelicula"
              placeholder="Nombre"
              variant="filled"
              fullWidth
              inputRef={register({
                maxLength: {
                  value: 20,
                  message: 'Name should not exceed 20 characters',
                },
              })}
            />
            {errors.name &&
            <div className="formError">{errors.name.message}</div>}
          </Grid>          
          <Grid item xs={12}>
            <TextField
              className="formField"
              error={!!errors.description}
              name="Fecha"
              placeholder=""
              variant="filled"
              fullWidth
              multiline
              rows={2}
              inputRef={register({
                maxLength: {
                  value: 72,
                  message: 'Description should not exceed 72 characters',
                },
              })}
            />
            {errors.description &&
            <div className="formError">{errors.description.message}</div>}
          </Grid>
					<Grid item xs={12}>
            <TextField
              className="formField"
              error={!!errors.description}
              name="Estado"
              placeholder=""
              variant="filled"
              fullWidth
              multiline
              rows={2}
              inputRef={register({
                maxLength: {
                  value: 72,
                  message: 'Description should not exceed 72 characters',
                },
              })}
            />
            {errors.description &&
            <div className="formError">{errors.description.message}</div>}
          </Grid>
        </Grid>
        <Button
          style={{ marginTop: 15 }}
					fullWidth
					color="primary"
          type="submit"
          className="btn--confirm"
          disabled={!formState.isValid}
        >Guardar</Button>
      </form>
    </div>
  );
};

MovieDetails.propTypes = { 
  onSubmit: PropTypes.func,
  productData: PropTypes.object,
};

export default MovieDetails;
