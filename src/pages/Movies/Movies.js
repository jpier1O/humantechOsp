import React, {useState, useRef} from 'react';
// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Container, Grid, Paper, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Create from '@material-ui/icons/Create';
import Title from '../../components/Shared/Title/Title';
import NewMovieModal from './NewMovie/NewMovieModal';
import LockIcon from '@material-ui/icons/Lock';
import IconButton from '@material-ui/core/IconButton';


const Movies = () => {
	const movieData = useRef([]);
	const [openMovieModal, setOpenMovieModal] = useState(false);
	const [indexMovie, setIndexMovie] = useState(-1);
	const [movie, setMovie] = useState(null);


	const drawerWidth = 240;

	const editMovie = (index) => {		
		setOpenMovieModal(true);
		setIndexMovie(index);
		setMovie(movieData.current[index]);
		console.log(index);
	};

	const useStyles = makeStyles((theme) => ({
		root: {
			display: 'flex',
		},
		toolbar: {
			paddingRight: 24, // keep right padding when drawer closed
		},
		toolbarIcon: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-end',
			padding: '0 8px',
			...theme.mixins.toolbar,
		},
		appBar: {
			zIndex: theme.zIndex.drawer + 1,
			transition: theme.transitions.create(['width', 'margin'], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
		},
		appBarShift: {
			marginLeft: drawerWidth,
			width: `calc(100% - ${drawerWidth}px)`,
			transition: theme.transitions.create(['width', 'margin'], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
		},
		menuButton: {
			marginRight: 36,
		},
		menuButtonHidden: {
			display: 'none',
		},
		title: {
			flexGrow: 1,
		},
		drawerPaper: {
			position: 'relative',
			whiteSpace: 'nowrap',
			width: drawerWidth,
			transition: theme.transitions.create('width', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
		},
		drawerPaperClose: {
			overflowX: 'hidden',
			transition: theme.transitions.create('width', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			width: theme.spacing(7),
			[theme.breakpoints.up('sm')]: {
				width: theme.spacing(9),
			},
		},
		appBarSpacer: theme.mixins.toolbar,
		content: {
			flexGrow: 1,
			height: '100vh',
			overflow: 'auto',
		},
		container: {
			paddingTop: theme.spacing(4),
			paddingBottom: theme.spacing(4),
		},
		paper: {
			padding: theme.spacing(2),
			display: 'flex',
			overflow: 'auto',
			flexDirection: 'column',
		},
		fixedHeight: {
			height: 240,
		},
	}));
	const classes = useStyles();
	return (
		<React.Fragment>			
			<main className={classes.content}>
        <div className={classes.appBarSpacer} />					
					<Container maxWidth="lg" className={classes.container}>
						<Grid container spacing={3}>
							<Grid item xs={12}>
							<Button variant="contained" color="primary" onClick={() => setOpenMovieModal(true)}>Nueva Pelicula</Button>
							</Grid>
							<Grid item xs={12}>
								<Paper className={classes.paper}>
									<Title>Peliculas</Title>
									<Table size="small">
										<TableHead>
											<TableRow>
												<TableCell>Id</TableCell>
												<TableCell>Nombre</TableCell>
												<TableCell>F. Publicación</TableCell>
												<TableCell>Estado</TableCell>
												<TableCell align="right"></TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											{movieData.current.map((row, index) => (
												<TableRow key={row.id}>
													<TableCell>{index + 1}</TableCell>
													<TableCell>{row.nombre}</TableCell>
													<TableCell>{row.fecha}</TableCell>
													<TableCell>{row.estado}</TableCell>	
													<TableCell>
														<IconButton aria-label="delete" color="primary" onClick={() => editMovie(index)}>
															<Create/>
      											</IconButton>
														<IconButton aria-label="delete" color="primary" >
															<CalendarViewDayIcon/>
														</IconButton>
														<IconButton aria-label="delete" color="primary">																													
															<LockIcon/>
														</IconButton>
														<IconButton aria-label="delete" color="primary">
															<DeleteIcon/>
														</IconButton>
													</TableCell>
												</TableRow>
											))}
										</TableBody>
									</Table>
								</Paper>
							</Grid>
						</Grid>
					</Container>
				</main>
				{openMovieModal &&
					<NewMovieModal
						open={openMovieModal}
						onClose={() => setOpenMovieModal(false)}
						movieData={movieData}
						indexMovie={indexMovie}
						movie={movie}
					/>
				}
		</React.Fragment>
	);
};

export default Movies;