import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { TextField, Grid, Button, Select, MenuItem, InputLabel } from '@material-ui/core';
import styles from './MovieDetails.module.scss';

const MovieDetails = props => {
  const {
    onSubmit,
    movieData,
    indexMovie,
    movie,
  } = props;
  
  const [estado, setEstado] = useState("");
  const [regMovie, setRegMovie] = useState(null);
  const { register, handleSubmit, errors, formState } = useForm({
    mode: 'onChange',
    defaultValues: {
      nombre: movie && movie.nombre,
      fecha: movie && movie.fecha,
      estado: movie && movie.estado,
    },
  });

  const handleChange = (event) => {     
    setEstado(event.target.value);    
  };
  
  useEffect(() => {    
    if (!regMovie) return;
    manageData();
  }, [regMovie]);

  const manageData = () => {
    console.log("ga", indexMovie);
    if (indexMovie === -1) {
      movieData.current.push(regMovie);        
    } else {
      const movieNew = {};
      movieNew.nombre = regMovie.nombre;
      movieNew.fecha = regMovie.fecha;
      movieNew.estado = regMovie.estado;
      movieData.current[indexMovie] = movieNew;
    }
  };


  return (
    <div className={styles.root}>      
      <form onSubmit={handleSubmit(onSubmit => {
          onSubmit.estado = estado;
          console.log(onSubmit);
          setRegMovie(onSubmit);
        })}>
        <Grid container>
          <Grid
            item
            xs={12}            
          >
            <label>Nombre de la pelicula</label>
            <TextField
              className="formField"
              error={!!errors.name}
              name="nombre"
              // value={indexMovie === -1 ? onSubmit.nombre : movie.nombre}
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
            <label>Fecha de Publicación</label>
            <TextField
              type="date"
              className="formField"
              name="fecha"
              // value={indexMovie === -1 ? onSubmit.fecha : movie.fecha}
              error={!!errors.description}
              placeholder=""
              variant="filled"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              inputRef={register({
                maxLength: {
                  value: 100,
                  message: 'Description should not exceed 72 characters',
                },
              })}
            />
            {errors.description &&
            <div className="formError">{errors.description.message}</div>}
          </Grid>
					<Grid item xs={12}>
          <label>Estado</label>
          <InputLabel id="demo-simple-select-error-label"></InputLabel>
            <Select
              labelId="demo-simple-select-error-label"
              id="demo-simple-select-error"
              // value={indexMovie === -1 ? onSubmit.estado : movie.estado}
              name="estado"
              fullWidth
              onChange={handleChange}
            >
              <MenuItem value="">
                <em></em>
              </MenuItem>
              <MenuItem value={"Activo"}>Activo</MenuItem>
              <MenuItem value={"Inactivo"}>Inactivo</MenuItem>              
            </Select>
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
  indexMovie: PropTypes.number,
  movie: PropTypes.object,
};

export default MovieDetails;
